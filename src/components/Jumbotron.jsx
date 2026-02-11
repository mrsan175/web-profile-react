import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import HeroImage from "../assets/hero.jpg";

const Jumbotron = () => {
  const { scrollY } = useScroll();

  // Zoom dari 1 ke 1.1 saat scroll dari 0 ke 500px
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden snap-start"
      id="home"
    >
      {/* Background Image with Motion */}
      <motion.div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
        }}
        className="absolute inset-0"
      />

      {/* Overlay dengan Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 text-sm font-semibold uppercase tracking-widest">
              Software Engineer | IT Engineer
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
          >
            Muhammad{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500">
              Ikhsan Nur
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-8">
            {/* <p className="text-xl sm:text-2xl text-gray-200 font-light">
              Software Engineer | IT Engineer
            </p> */}
            <p className="text-base sm:text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
              Passionate about building reliable web applications and managing
              IT systems, with experience in backend development, database
              management, networking, and technical problem solving.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
            >
              Contact Me
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all"
            >
              View Profile
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/mrsan175"
              target="_blank"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.linkedin.com/in/muhammad-ikhsan-nur-86ba69298/"
              target="_blank"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:muhammadikhsannur175@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Jumbotron;
