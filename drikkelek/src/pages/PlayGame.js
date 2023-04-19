import React, { useState, useEffect } from "react";
import Header from "../Base/Header";
import Navbar from "../Base/Navbar";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

/*
    Fikse problem
        - bruke setTimeput
        - spm kommer ikke pga de kalles rett etter de skal bli henta med async funksjon, spå de finnes ikke ends
*/

const PlayGame = (props) => {

    const [numQuestions, setNumQuestions] = useState(0);
    const [numAsked, setNumAsked] = useState(0);
    const [spak, setSpak] = useState(true);
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [allQuestions, setAllQuestions] = useState([]);
    const [names, setNames] = useState([]);
    const [allNames, setAllNames] = useState([]);

    const namesCollectionRef = collection(db, "names");
    const questionsCollectionRef = collection(db, "questions");

    const getQuestionsAndNames = async () => {
        try {
            // Gets and sets the questions
            const questionsData = await getDocs(questionsCollectionRef);
            const filteredQuestionsData = questionsData.docs.map(doc => ({...doc.data()}));
            
            setAllQuestions(filteredQuestionsData);

            // Gets and sets the names
            const namesData = await getDocs(namesCollectionRef);
            const filteredNamesData = namesData.docs.map(doc => ({...doc.data()}));

            setAllNames(filteredNamesData);

        } catch(err) {
            console.log(err);
        }
    }

    const setRoomQuestions = () => {
        const roomID = localStorage.getItem("gameID");
        
        const roomQuestions = [];
        allQuestions.forEach(question => {
            if(question.gameid === roomID) {
                roomQuestions.push(question.question);
            }
        });
        setQuestions(roomQuestions);
        setNumQuestions(roomQuestions.length);
    }

    const setRoomNames = () => {

        const roomID = localStorage.getItem("gameID");

        const roomNames = [];
        allNames.forEach(name => {
            if(name.gameid === roomID) {
                roomNames.push(name.name);
            }
        });
        setNames(roomNames);
    }

    useEffect(() => {
        getQuestionsAndNames();
    }, []);

    useEffect(() => {
        setRoomQuestions();
        setRoomNames();
    }, [spak]);

    const handleClick = () => {
        if(spak) {
            setSpak(false);
        }

        console.log(names);
        console.log(questions);

        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        setQuestion(randomQuestion);
        setQuestions(questions.filter(question => question !== randomQuestion));

        if(questions.length == 0 && numQuestions != 0) {
            setQuestion("Spillet er ferdig");
        } else {
        }
    }

    return(
        <>
            <Header />

            <div className="mt-24 justify-center items-center flex">
                <img alt="beer guy" src={require('../img/beerguy.png')} className='w-72'/>    
            </div>

            <div className="justify-center items-center flex mt-6">
                <div className="h-72 w-80 bg-violet-500 rounded shadow-xl justify-center flex">
                    <div className="flex-col justify-center">
                        <h1 className="text-white text-2xl text-center mt-4">Questions</h1><br/>
                        <p id="q" className="text-black text-xl mt-4 text-center">"{question}"</p>
                        
                        <div className="justify-center items-center flex">
                            <button onClick={handleClick} className="bg-blue-300 m-4 rounded-xl h-12 w-32 justify-center items-center flex shadow-xl hover:bg-blue-400 mt-20 text-violet-900">Next</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default PlayGame;