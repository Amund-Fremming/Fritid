import React from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import { useState, useEffect } from "react";
import ChoosePremade from "../Components/ChoosePremade";
import PlayPremade from "../Components/PlayPremade";
import QuestionsArray from "../storage/QuestionsArray";

const Premade = () => {

    const [chosen, setChosen] = useState(false);
    const [game, setGame] = useState(0);
    const [questionArray, setQuestionArray] = useState([]);

    useEffect(() => {
        const arrObj = new QuestionsArray();
        const arr = arrObj.getArr();
        setQuestionArray(arr);
    }, [setGame]);


    return(
        <>
            <Header />

            <div className="mt-24 justify-center items-center flex">
                <img alt="beer guy" src={require('../img/beerguy.png')} className='w-72'/>    
            </div>

            <div className="mt-8 justify-center items-center flex">
                <div className="flex-col">
                    {
                        chosen
                        ? <PlayPremade
                            questionArray={questionArray}
                            game={game}
                            setGame={setGame}
                        />
                        : <ChoosePremade 
                            setChosen={setChosen}
                            setGame={setGame}
                        />
                    }
                </div>
            </div>    

        </>
    );
}

export default Premade;