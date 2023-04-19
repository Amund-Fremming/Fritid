import React from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const LandingPage = (props) => {

    return(
        <>
            <div className='mt-40 flex items-center justify-center'>
                <div className='h-64 w-80 rounded-xl bg-violet-400 flex items-center justify-center shadow-2xl'>
                    <div className='flex-col items-center justify-center'>
                        <img alt="beer guy" src={require('../img/beerguy.png')} className='w-40'/>
                        <h1 className='text-4xl pl-8'>
                            <Typewriter 
                                options = {{
                                    strings: ["Skål!", "Prost!", "Salut!", "Cheers!", "Zdrowie!"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "_"
                                }}
                            />
                        </h1>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <Link 
                    to={"/host"}
                >
                    <button className='flex items-center justify-center h-32 w-32 bg-blue-500 m-3 mt-20 shadow-md border-blue-700 rounded-xl'>
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                            <p className='text-white font-bold'>Host</p>
                        </div>
                    </button>
                </Link>
                
                <Link
                    to="/join"
                >
                    <button className="flex items-center justify-center h-32 w-32 rounded-xl bg-blue-500 m-3 mt-20 shadow-md">
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                            <p className='text-white font-bold'>Join</p>
                        </div>
                    </button>
                </Link>

            </div>

            <div className='justify-center items-center flex'>
                {/*
                <Link to="/premade">
                    <button className="flex items-center justify-center h-32 w-32 rounded-xl bg-blue-500 m-3 shadow-md">
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                            <p className='text-white font-bold'>Pre made</p>
                        </div>
                    </button>
                </Link>
                */}
            </div>

        </>
    );
    
}

export default LandingPage;
