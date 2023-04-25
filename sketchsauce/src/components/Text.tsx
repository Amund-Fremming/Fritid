import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TextProps {
    header: string;
    text: string;
}

const Text = ({text, header}: TextProps) => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
        hidden: { opacity: 0, scale: 1 },
    }

    useEffect(() => {
        if(inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }); 

    return(
        <motion.div
            ref={ref}
            className="text-xl w-[400px] flex flex-col"
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className="sm:text-4xl text-xl font-marker text-center">"{header}"</div>
            <div className="text-left m-2 sm:text-[18px] text-[10px] font-marker font-thin">{text}</div>
        </motion.div>
    );
}

export default Text;