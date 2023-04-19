import React from "react";
import Typewriter from "typewriter-effect";

const JoinedGame = (props) => {

    const { gameID, name, onSubmitQuestion, setQuestion } = props;

    const handleAddQuestion = () => {
        onSubmitQuestion();
        const addInput = document.getElementById("addQuestion");
        addInput.value = "";
    }

    return(
        <>  
            <div className="justify-center flex mb-4 text-bold text-xl">
                <Typewriter 
                    options = {{
                        strings: [`Hola ${name}`, `Priviet ${name}`, `Nǐn hǎo ${name}`, `Ciao ${name}`],
                        autoStart: true,
                        loop: true,
                        cursor: "_"
                    }}
                />
            </div>

            <h1 className="justify-center items-center flex font-bold text-white">Room ID: {gameID}</h1>
            <input onChange={e => setQuestion(e.target.value)} id="addQuestion" className="text-center h-10 w-64 rounded shadow-md m-1" />
                            
            <button onClick={() => handleAddQuestion()} className="m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                <p>Add question</p>
            </button>   
        </>
    );
}

export default JoinedGame;