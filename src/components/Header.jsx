import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = "home";
      navLinks.forEach(({ href }) => {
        const id = href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          const scrollPos = window.scrollY + 100;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040404]/95 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-linear-to-b from-black/80 to-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 cursor-pointer"
          >
            MrSan
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => handleLinkClick(e, href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all relative font-medium cursor-pointer ${
                  activeSection === href.substring(1)
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
                {activeSection === href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#060606]/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-2 border-t border-gray-800/50"
        >
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`block px-4 py-2 rounded-lg transition-all font-medium cursor-pointer ${
                activeSection === href.substring(1)
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
