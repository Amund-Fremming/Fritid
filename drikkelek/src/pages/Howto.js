import React, { useState, useEffect } from "react";
import Header from "../Base/Header";
import Navbar from "../Base/Navbar";

const Howto = () => {

    return(
        <>
            <Header />

            <p className="justify-center items-center flex mt-32">How to</p>
            <div className="mt-8 flex items-center justify-center">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:bg-blue-700 rounded-xl">
                    Button
                </button>
            </div>
        </>
    );
}

export default Howto;
