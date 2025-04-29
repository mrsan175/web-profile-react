import HomeLayout from "../layouts/HomeLayout";
import Jumbotron from "../components/Jumbotron";
// import Profile from "../components/Profile";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <HomeLayout>
      <Jumbotron />
      {/* <Profile /> */}
      <About />
      <Contact />
    </HomeLayout>
  );
}

export default Home;
