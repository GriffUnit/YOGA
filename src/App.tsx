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

function App() {
  return (
    <>
      <section className="relative w-full h-screen">
        <img
          src={StarImage}
          alt="Star Image"
          className="absolute top-0 h-full w-full object-cover z-0"
        />
        <Nav />
        <div className="bg-light_blue w-full">
          <Meditate />
          <About />

          <div className="bg-white relative flex justify-center -mt-[370px]">
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
        </div>
      </section>
    </>
  );
}

export default App;
