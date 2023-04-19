import React, { useState } from "react";

const PlayPremade = (props) => {

    const { names, questions } = props;

    const [question, setQuestion] = useState("");

    const handleClick = () => {
        console.log(names);
        console.log(questions);
        setQuestion();
    }

    return(
        <>
            <div className="h-72 w-80 bg-violet-500 rounded shadow-xl justify-center flex">
                <div className="flex-col justify-center">
                    <h1 className="text-white text-2xl text-center mt-4">Question {"x"}/{"y"}</h1><br/>
                    <p className="text-black text-xl mt-4 text-center">"{question}"</p>
                    
                    <div>
                        <button onClick={handleClick} className="bg-blue-300 m-4 rounded-xl h-12 w-32 justify-center items-center flex shadow-xl hover:bg-blue-400 mt-20 text-violet-900">Next</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PlayPremade;