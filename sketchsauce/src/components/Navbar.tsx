import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import Menu from "../icons/Menu";
import Close from "../icons/Close";

const Navbar: React.FC = (props) => {

    let [ open, setOpen ] = useState(false);

    const navbar = document.getElementById("navbar");
    if(navbar != null)
        navbar.style.backgroundColor = "FF9A00"
        
    return(
        <>
            <div className='shadow-md w-full top-0 fixed left-0 z-50'>
                <div id="navbar" className='md:flex items-center justify-between bg-ss-house py-4 md:px-10 px-7'>
                    <div className='cursor-pointer flex items-center ml-8'>
                        <NavLink to="/">
                            <img alt='logo' className='w-20 h-20' src={require("../images/ss-logo.png")} />
                        </NavLink>
                    </div>
                    <div onClick={() => setOpen(!open)}>
                    {
                        open
                        ? <Close />
                        : <Menu />
                    }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-18 absolute md:static bg-ss-house md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
                         pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 text-xl'>
                        </li>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/">
                                <p className='font-marker hover:text-white duration-500'>home</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/gallery">
                                <p className='font-marker hover:text-white duration-500'>gallery</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <NavLink to="/feedback">
                                <p className='font-marker hover:text-white duration-500'>feedback</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-2xl md:my-0 my-7'>
                            <a href="https://www.instagram.com/sketchsauceno/">
                                <BsInstagram className='hover:text-white duration-500' />
                            </a>
                        </li>
                        <li className='md:ml-4 text-2xl md:my-0 my-7'>
                            <a href="https://www.tiktok.com/@sketchsauce">
                                <BsTiktok className='hover:text-white duration-500' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;