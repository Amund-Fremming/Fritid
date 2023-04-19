import React from 'react';
import { Link } from "react-router-dom";

/*
    Legg til onClick på pil tilbake for å gå til forrige side
    Legg til onClick på øl for å komme til hjemsiden
    Legg til onHove
*/

const Header = (props) => {

    return(
        <> 
            <div className='fixed top-0 bg-violet-600 w-screen h-28 flex items-center justify-center shadow-md'>
                <div className='mt-6 inline-flex pb-4 content-center'>
                    
                    <div className='pt-4 pr-28'>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>

                    <Link to="/">
                        <p className='font-italic text-bold text-base content-center pt-5  text-white'>100 spm</p>
                    </Link>

                    <div className='pt-4 pl-28'>
                        {/* <Link to="/howto"> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        {/* </Link> */}
                    </div>
                

                </div>
            </div>
        </>
    );

}

export default Header;


