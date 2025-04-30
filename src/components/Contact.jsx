import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-[calc(100vh-4rem)] snap-start flex flex-col justify-center items-center bg-[#090909] px-4 py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
      <p className="max-w-xl text-lg text-gray-300 mb-6">
        If you have any questions or just want to say hi, feel free to reach
        out! I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <a
        href="mailto:emailkamu@example.com"
        className="px-6 py-3 bg-white text-gray-600 font-semibold rounded-xl hover:bg-gray-600 hover:text-white transition"
      >
        Kirim Email
      </a>
    </motion.section>
  );
};

export default Contact;
