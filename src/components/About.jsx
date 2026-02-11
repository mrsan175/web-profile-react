import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "React", "Node.js", "Express"],
    },
    {
      category: "Database & Backend",
      items: ["PostgreSQL", "MongoDB", "REST API", "System Integration"],
    },
    {
      category: "IT & Tools",
      items: [
        "Network Configuration",
        "Troubleshooting",
        "Microsoft Excel",
        "Git",
      ],
    },
  ];

  const features = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Developing and maintaining web-based applications to support business operations.",
    },
    {
      icon: Zap,
      title: "System Optimization",
      description:
        "Improving workflow efficiency through automation and performance enhancement.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Working closely with teams to gather requirements and deliver reliable solutions.",
    },
    {
      icon: Palette,
      title: "Problem Solving",
      description:
        "Providing technical support, troubleshooting, and system maintenance.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen snap-start flex flex-col justify-center items-center bg-linear-to-b from-[#040404] to-[#0a0a0a] px-4 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            I am an IT Programmer with experience in developing and maintaining
            web-based applications to support business operations. I have strong
            skills in programming, network configuration, troubleshooting, and
            problem solving. I am passionate about technology and continuously
            learning new technologies to enhance my expertise and deliver
            reliable solutions.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-linear-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-linear-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm rounded-full border border-blue-400/30"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
