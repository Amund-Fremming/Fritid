import React from "react";
import { BsInstagram, BsPinterest, BsTiktok, BsTwitter, BsMailbox } from 'react-icons/bs';

const Footer : React.FC = () => {
    return(
        <>
            <div className="flex justify-between h-32">
                <div className="text-3xl flex-col ml-10 md:ml-32">
                    <p className="font-marker">sketchsauce</p>
                    <div className="flex">
                        <a href="https://www.tiktok.com/@sketchsauce" >
                            <BsTiktok className="m-1.5 hover:text-ss-house transition-all duration-500"/>
                        </a>
                        <a href="https://www.instagram.com/sketchsauceno/" >
                            <BsInstagram className="m-1.5 hover:text-ss-house transition-all duration-500"/>
                        </a>
                        <a href="https://twitter.com/sketchsauceno" >
                            <BsTwitter className="m-1.5 hover:text-orange-500 transition-all duration-500"/>
                        </a>
                        <a href="https://www.pinterest.com/0molg8puata1a51rg5ng8o90s0rups/?invite_code=014ea68e5c3b47929f56d1288e9d3319&sender=1009580578875501309" >
                            <BsPinterest className="m-1.5 hover:text-ss-house transition-all duration-500"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center mr-10 md:mr-32">
                    <BsMailbox className="text-2xl" />
                    <p className="font-marker">mail</p>
                    <p className="font-marker text-2xl">
                        <a className="hover:text-ss-house transition-all duration-500" href="mailto: info@sketchsauce.no">info@sketchsauce.no</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;