import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="grow mt-16 scroll-smooth">{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
