import React from "react";

const JoinUI = (props) => {

    const { setJoinedGame, setGameID, setName, onSubmitName } = props;

    const handleClick = () => {
        setJoinedGame(true);
        onSubmitName();
    }

    return(
        <>
            <div className="flex-col">
                <input
                    placeholder="Game id/name"
                    className="text-center ml-8 h-10 w-64 rounded shadow-md m-1"
                    onChange={e => setGameID(e.target.value)}
                />
                <input
                    placeholder="Your name"
                    className="text-center ml-8 h-10 w-64 rounded shadow-md m-1"
                    onChange={e => setName(e.target.value)}
                />
                <div onClick={() => handleClick()} className="ml-8 m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                    <p>Join</p>
                </div>
            </div>
        </>
    );
}

export default JoinUI;