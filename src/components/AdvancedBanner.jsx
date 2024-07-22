import { motion, useMotionValue, useTransform } from "framer-motion";

export const AdvancedBanner = () => {
  let x = window.innerWidth / 2;
  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 180], [0, 4]);

  const AdvancedVariants = {
    wildIn: {
      x: x,
      rotate: 0,
    },
    wildOut: {
      x: x,
      rotate: 360,
    },
  };

  return (
    <motion.div
      style={{
        height: "3rem",
        width: "24rem",
        background: "linear-gradient(90deg,#009688 0%,#c6ff00 75%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rotate,
        scale,
      }}
      variants={AdvancedVariants}
      initial="wildIn"
      animate="wildOut"
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
      }}
    >
      Read My Blog for more cool stuff
    </motion.div>
  );
};
