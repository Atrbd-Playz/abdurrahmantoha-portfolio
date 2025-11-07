'use client';

import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="top-0 left-0 h-1 w-full bg-linear-60 from-emerald-900 to-emerald-600 rounded-full origin-[0%_0%] fixed z-100"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0 0',
      }}
    />
  );
};

export default ScrollProgress;