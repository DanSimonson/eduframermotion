
import { motion } from "framer-motion";

export default function BlogBanner() {
    
  return (

      <motion.div
        style={{
          height: "3rem",
          width: "24rem",
          background: "linear-gradient(90deg,#009688 0%,#c6ff00 75%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        
        initial={{
          x: -600,
          rotate: -5,
        }}
        animate={{
          rotate: 5,
          x: 3000,
          boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
        }}
        
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 30,
          duration: 12,
          delay: 2,
        }}
      >
        Read My Blog for more cool stuff
      </motion.div>
  );
}
