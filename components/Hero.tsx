'use client'

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen  flex items-center justify-center overflow-hidden ">
      {/* Hero Background */}
      <div className=" bg-[url('/hero-bg.jpg')] bg-cover bg-center w-full h-full absolute"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent blur-3xl to-transparent opacity-75"></div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">


        <motion.h1
          className="mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block mb-2">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Abdur Rahman Toha
              </span>
              <motion.span
                className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-green-500 blur-lg opacity-30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </span>
          <span className="block text-3xl">Fullstack Developer</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-500/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.5)" }}
          >
            <span className="text-emerald-400">Welcome to my digital realm</span>
          </motion.div>
        </motion.div>
        <motion.p
          className="mb-12 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building scalable, high-performance web applications with modern technologies.
          Transforming ideas into powerful digital solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-linear-to-r from-emerald-500/60 to-green-500/75 rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-3 border border-emerald-500/30 rounded-lg bg-emerald-500/5 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
}