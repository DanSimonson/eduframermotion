import { motion } from "framer-motion";
import Types from "../utils/Type";

export const AnimatedBanner = ({ typeIn, typeOut }) => {
  let x = window.innerWidth / 2;

  const bannerVarients = {
    subtleIn: {
      x: x,
      rotate: 0.5,
    },

    subtleOut: {
      rotate: 0.5,
      x: x,
      boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
    },

    overthetopIn: {
      x: x,
      rotate: 360,
      boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
    },

    overthetopOut: {
      rotate: 0,
      x: x,
      boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <motion.div
      style={{
        height: "3rem",
        minWidth: "15rem",
        background: "linear-gradient(90deg,#009688 0%,#c6ff00 75%)",
        textAlign: "center",
        padding: "5px 15px 5px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={typeIn}
      animate={typeOut}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3,
        duration: 12,
        delay: 2,
      }}
      variants={bannerVarients}
    >
      Read My Blog for more cool stuff
    </motion.div>
  );
};
