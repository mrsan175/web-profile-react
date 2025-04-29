import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.section
      id="profile"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-[#050505] px-4 py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 text-white">Profil Saya</h2>
      <p className="max-w-2xl text-lg text-gray-300">
        Saya adalah seorang pengembang web yang berfokus pada pengalaman
        pengguna dan desain antarmuka yang modern. Saya berkomitmen untuk
        membuat aplikasi yang cepat, responsif, dan intuitif.
      </p>
    </motion.section>
  );
};

export default Profile;
