import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[calc(100vh-4rem)] snap-start flex flex-col justify-center items-center bg-[#040404] px-4 py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
      <p className="max-w-2xl text-lg text-gray-300">
        I am a web developer with a passion for creating beautiful and
        functional websites. I have experience in various technologies and
        frameworks, and I love to learn new things.
      </p>
    </motion.section>
  );
};

export default About;
