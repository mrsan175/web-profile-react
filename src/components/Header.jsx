import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    // { href: "#profile", label: "Profile" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#040404] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white cursor-pointer">
            LogoIpsum
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-white">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`hover:text-gray-400 transition-colors ${
                  activeSection === href.substring(1) ? "font-bold" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:flex">
            <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition">
              Sign in
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060606] px-4 pt-4 pb-6 space-y-4 shadow-md text-white text-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`block hover:text-gary-400 transition-colors ${
                activeSection === href.substring(1) ? "font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          {/* <button className="w-full bg-white text-gray-600 py-2 rounded-full hover:bg-gray-600 hober:text-white transition">
            Sign in
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
