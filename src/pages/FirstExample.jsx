import { motion } from "framer-motion";

const FirstExample = () => {
  return (
    <div style={{ marginBottom: "50px", border: "5px solid brown" }}>
      <p style={{ width: "100vw", textAlign: "center", fontSize: "4rem" }}>
        Example 1
      </p>
      {/* 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)' */}
      <motion.div
        // className="bg-gradient-to-r from-green-500 via-teal-500 to-lime-500 h-12
        // w-96 py-1.5 px-1.5 text-xl flex justify-center items-center rounded-xl"
        style={{
          height: "3rem",
          width: "24rem",
          background: "linear-gradient(90deg,#009688 0%,#c6ff00 75%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        /**
          Below, the initial and animation field are set to declare a translation
          animation along the horizontal axis "x"
          Hence why we're setting an "x" field in both objects.
        **/
        initial={{
          x: -600,
          rotate: -5,
        }}
        animate={{
          rotate: 5,
          x: 3000,
          //boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
        }}
        /**
          The code below specifies the transition type for our element.
          You can comment the whole transition prop below, and Framer 
          Motion will fallback to "smart defaults".

          In this case, since we have a translation, the default transition type is
          spring, so you should see the element moving from left to right and "bounce"
          a when reaching its target state, like a spring!
        **/
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
    </div>
  );
};

export default FirstExample;
