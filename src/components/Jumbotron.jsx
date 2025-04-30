import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "../assets/hero.jpg";

const Jumbotron = () => {
  const { scrollY } = useScroll();

  // Zoom dari 1 ke 1.1 saat scroll dari 0 ke 500px
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8 py-40">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Hi! I'm Muhammad Ikhsan
          </h1>
          <p className="text-gray-100 text-4xl font-bold mb-6">
            I am a Web Developer
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-white text-gray-600 font-bold rounded-xl shadow hover:bg-gray-600 hover:text-white cursor-pointer transition">
              Hire me
            </button>
            <button className="px-6 py-3 border border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-600 cursor-pointer transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
