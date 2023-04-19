import React from "react";
import Navbar from "../Base/Navbar";
import Header from "../Base/Header";
import { useLocation } from "react-router-dom";

/*
    Side hvor man får en id andre kan joine med
    kan legge til spørsmål selv
    kan starte spillet når som helst
    har count på antall spørsmål
*/

/*
    TODO - later
    fikse regex lengde på input
*/
const Host = () => {

    return(
        <>
            <Header />
            <div className="mt-64 justify-center items-center flex">

                <div onClick={this.handleClick} className="h-64 w-80 bg-violet-500 rounded shadow-xl justify-center items-center flex">
                    <div className="flex-col">
                        <input id="joinID" onChange={this.handleInput} name="id" className="ml-8 h-10 w-64 rounded shadow-md m-1" />
                        <input id="joinName" onChange={this.handleInput} name="id" className="ml-8 h-10 w-64 rounded shadow-md m-1" />
                        <button onClick={this.handleClick} id="hostBtn" className="ml-8 m-1 h-10 w-64 bg-blue-500 rounded shadow-md justify-center items-center flex hover:bg-blue-800">
                            <p>Host</p>
                        </button>

                    </div>
                </div>
            </div>

        </>
    );
    
}

export default NewHost;