import { motion, useMotionValue, useTransform } from "framer-motion";

export const Example = () => {
  const blockVariants = {
    initial: {
      rotate: 0,
    },
    target: {
      rotate: 360,
    },
  };

  const rotate = useMotionValue(0);
  /**
   * Here we tie together the value of "scale" to the value
   * of "rotate"
   * The scale will increase along the rotation, from 0
   * until the rotation reaches 270 degrees ([0, 270])
   * where the scale property will be equal to 1 ([0, 1]).
   * The scale will stop increasing while the rotation
   * finishes its transition
   *
   * You can try to modify the values below, and see how it
   * impacts the resulting transition.
   */
  const scale = useTransform(rotate, [0, 270], [0, 1]);

  return (
    <motion.div
      style={{
        background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
        height: "100px",
        width: "100px",
        borderRadius: "10px",
        rotate,
        scale,
      }}
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: "easeInOut",
        duration: 4,
      }}
    />
  );
};

export const AdvancedBanner = () => {
  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 290], [0, 1]);
  //const opacityOutput = [0, 0.5, 1];
  //const xInput = [-600, 3000]
  //const opacity = useTransform(x, xInput opacityOutput)

  const AdvancedVariants = {
    wildIn: {
      x: -600,
      rotate: -5,
      scale: 1,
    },
    wildOut: {
      rotate: 5,
      x: 3000,
      scale: 3,
      boxShadow: "18px 18px 0 rgba(0, 0, 0, 0.2)",
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
      }}
      variants={AdvancedVariants}
      initial="wildIn"
      animate="wildOut"
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 3,
        duration: 12,
        delay: 2,
      }}
    >
      Read My Blog for more cool stuff
    </motion.div>
  );
};
