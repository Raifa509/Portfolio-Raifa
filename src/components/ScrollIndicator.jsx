import { motion, useScroll } from "motion/react";

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "6px",
        transformOrigin: "0%",
        backgroundColor: "var(--color-button)", 
        zIndex: 50,
      }}
    />
  );
}

export default ScrollIndicator;
