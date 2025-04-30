import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040404] py-6 text-center text-white fixed bottom-0 left-0 w-full">
      <p>&copy; {new Date().getFullYear()} MrSan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
