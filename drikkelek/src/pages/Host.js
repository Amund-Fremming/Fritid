import React, { useState } from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import HostGame from "../Components/HostGame";
import CreateRoom from "../Components/CreateRoom";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

/*
    TODO - later
    fikse regex lengde på input
*/

const Host = (props) => {

    const [roomInit, setRoomInit] = useState(false);
    const [roomID, setRoomID] = useState("");
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");

    const namesCollectionRef = collection(db, "names");
    const questionsCollectionRef = collection(db, "questions");

    const onSubmitName = async () => {
        try {
            setRoomInit(true);
            await addDoc(namesCollectionRef, { name: name, gameid: roomID });
        } catch(err) {
            console.err(err);
        }
    }

    const onSubmitQuestion = async () => {
        try {    
            await addDoc(questionsCollectionRef, { question: question, gameid: roomID });
            console.log("Adding :" + question);
        } catch(err) {
            console.err(err);
        }

    }

    return(
        <>
            <Header />
            <div className="mt-64 justify-center items-center flex">

                <div className="h-64 w-80 bg-violet-500 rounded shadow-xl justify-center items-center flex">
                    <div className="flex-col">
                    {
                        roomInit
                        ? <HostGame
                            roomID={roomID}
                            setQuestion={setQuestion}
                            onSubmitQuestion={onSubmitQuestion}
                        />
                        : <CreateRoom
                            onSubmitName={onSubmitName}
                            setName={setName}
                            setRoomID={setRoomID}
                        />
                    }
                    </div>
                </div>
            </div>

        </>
    );
}

export default Host;