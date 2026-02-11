import HomeLayout from "../layouts/HomeLayout";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <HomeLayout>
      <Jumbotron />
      <About />
      <Contact />
    </HomeLayout>
  );
}

export default Home;
