"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

interface MotionProviderProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut", 
    },
  },
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const shouldReduceMotion = useReducedMotion(); 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate="show"
        exit="hidden"
        variants={pageVariants}
        style={{ minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
