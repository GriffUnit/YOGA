import Nav from "./components/Nav";
import Meditate from "./sections/Meditate";
import StarImage from "./assets/Images/Bitmap (3).png";
import About from "./components/About";
import Classes from "./components/Classes";

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

          {/* <div
              className="bg-white absolute top-0 left-0 w-full "
              style={{
                height: "50%",
                transform: "translateY(-25%)",
                zIndex: -1,
              }}
            />*/}

          <div className="bg-white relative flex justify-center">
            <Classes />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
