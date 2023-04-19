import React from "react";
import { Link } from "react-router-dom";

const HostGame = (props) => {
    
    const { roomID, setQuestion, onSubmitQuestion } = props;

    const handleAddQuestion = () => {
        onSubmitQuestion();
        const addInput = document.getElementById("addInput");
        addInput.value = "";
        localStorage.setItem("gameID", roomID);
    }

    return(
        <>
            <h1 className="justify-center items-center flex font-bold text-white">Room ID: {roomID}</h1>
            <input id="addInput" className="text-center h-10 w-64 rounded shadow-md m-1" onChange={e => setQuestion(e.target.value)}/>
                            
            <button onClick={() => handleAddQuestion()} className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                <p>Add question</p>
            </button>

            <Link to="/playgame">
                <button className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                    <p>Start</p>
                </button>
            </Link>            

        </>
    );
}

export default HostGame;