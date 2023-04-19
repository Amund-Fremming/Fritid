import React from "react";
import data from "../input/input";
import Text from "./Text";
import Image from "./Image";

const SnapSection: React.FC = () => {
    return(
        <>
            {/* Snap container */}
            <div className="snap-y snap-mandatory h-screen overflow-scroll transition-all duration-1000">
                
                {/* Snap elements */}
                {
                    data.map(element => {
                        return(
                            <div className="snap-start bg-white w-screen h-screen flex items-center justify-center text-8xl">
                                <div className="flex flex-wrap items-center justify-center w-full">
                                    <Image image={element.image}/>
                                    <Text header={element.header} text={element.text}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default SnapSection;
