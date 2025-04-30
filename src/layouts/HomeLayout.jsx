import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow mt-16 snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
