import Nav from "./components/Nav";
import Meditate from "./sections/Meditate";
import StarImage from "./assets/Images/Bitmap (3).png";
import About from "./components/About";
import Classes from "./components/Classes";
import Media from "./components/Media";
import Training from "./components/Training";
import Instructors from "./components/Instructors";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full h-screen max-lg:items-center">
      <img
        src={StarImage}
        alt="Star Image"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <Nav />
      <div className="bg-light_blue w-full sm:flex-1">
        <Meditate />
        <About />

        <div className="bg-white relative flex justify-center -mt-[370px] md:-mt-[270px] sm:flex-col sm:items-center">
          <Classes />
        </div>

        <Media />

        <Training />

        <Instructors />
        <div className="bg-white -mt-[237px] ">
          <Testimonials />
          <Blog />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
