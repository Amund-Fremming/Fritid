import React, { useState } from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import JoinUI from "../Components/JoinUI";
import JoinedGame from "../Components/JoinedGame";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

/*
    Mellomsted for å joine ett rom
    her kan man skrive inn rom id og sitt navn og så joine
    krav må være oppfylt
*/

const Join = (props) => {

    const [joinedGame, setJoinedGame] = useState(false);
    const [gameID, setGameID] = useState("");
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");

    const questionsCollectionRef = collection(db, "questions");
    const namesCollectionRef = collection(db, "names");

    const onSubmitQuestion = async () => {
        try {
            await addDoc(questionsCollectionRef, { question: question, gameid: gameID });
            console.log("Adding question: " + question);
        } catch(err) {
            console.err(err);
        }
    }

    const onSubmitName = async () => {
        try {
            await addDoc(namesCollectionRef, { name: name, gameid: gameID });
            console.log("Adding name: " + name);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
            <Header />

                <div className="mt-64 justify-center items-center flex">

                    <div className="h-64 w-80 bg-violet-500 rounded shadow-xl justify-center items-center flex">
                        <div className="flex-col">
                            {
                                joinedGame 
                                ? <JoinedGame
                                    gameID={gameID}
                                    name={name}
                                    onSubmitQuestion={onSubmitQuestion}
                                    setQuestion={setQuestion}
                                />
                                : <JoinUI
                                    setJoinedGame={setJoinedGame}
                                    setGameID={setGameID}
                                    setName={setName}
                                    onSubmitName={onSubmitName}
                                />
                            }
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Join;