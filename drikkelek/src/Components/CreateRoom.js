import React from "react";

/*
    Må legges inn regex her!!!
    Mulig roomid staten her ødelegger for at flere kan bruke denne på en gang
*/

const CreateRoom = (props) => {

    const { setRoomID, setName, onSubmitName } = props;

    return(
        <>
            <div className="flex-col">
                <input
                    placeholder="Room name"
                    className="text-center ml-8 h-10 w-64 rounded shadow-md m-1"
                    onChange={e => setRoomID(e.target.value)}
                />
                <input
                    placeholder="Your name"
                    className="text-center ml-8 h-10 w-64 rounded shadow-md m-1"
                    onChange={e => setName(e.target.value)}
                />
                <div className="ml-8 m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                    <p onClick={() => onSubmitName()}>Create room</p>
                </div>
            </div>
        </>
    );
}

export default CreateRoom;