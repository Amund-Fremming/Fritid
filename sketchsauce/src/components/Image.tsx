import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageProps {
  image: string;
}


const Image = ({ image }: ImageProps) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
      visible: { opacity: 1, scale: 1, transition:{duration: 2} },
      hidden: { opacity: 0, scale: 1 },
  }

  useEffect(() => {
    if(inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return(
      <>
          <motion.div
            ref={ref}
            className="w-[500px] bg-violet-400 m-4 border-4 border-ss-house shadow-xl"
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <img className="shadow-2xl" alt="img" src={image} />
          </motion.div>
      </>
  );
}

export default Image;