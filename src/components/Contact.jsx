import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "6282191722654"; // Nomor WA kamu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    window.location.href = `mailto:muhammadikhsannur175@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadikhsannur175@gmail.com",
      href: "mailto:muhammadikhsannur175@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 821 9172 2654",
      href: `https://wa.me/${phoneNumber}`,
    },
    { icon: MapPin, label: "Location", value: "Indonesia", href: "#" },
  ];

  // Variants Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-4xl w-full space-y-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Feel free to reach out for any inquiries!
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-all"
                variants={fadeUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-400 text-sm">{info.value}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-gray-900 p-8 rounded-lg border border-gray-700"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeUp}>
              <label className="block text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
