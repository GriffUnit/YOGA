import Nav from "./components/Nav";
import Meditate from "./sections/Meditate";
import StarImage from "./assets/Images/Bitmap (3).png";

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

        <Meditate />
      </section>
    </>
  );
}

export default App;
