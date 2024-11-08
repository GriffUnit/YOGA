import { Pins, Play } from "../assets/Icons";
import { GroupPic } from "../assets/Images";

const Media = () => {
  return (
    <section className="border-2 border-white max-container flex flex-1 rounded-3xl mt-[220px] mx-auto p-6 bg-light_blue shadow-xl z-10">
      <div className="bg-white flex flex-col md:flex-row p-12 justify-between gap-16 rounded-2xl w-full h-704 shadow-xl z-10">
        <div className="flex flex-col mt-5 md:w-1/2 justify-center">
          <h3 className="red_heading">MEDIA GALLERY</h3>
          <h1 className="font-DavidLibre text-3xl md:text-6xl leading-tight font-bold pr-16">
            Watch Photos Of Our Classes
          </h1>
          <p className="font-Kumbh mt-8 text-xl text-gray-700">
            The sky was cloudless and of a deep dark blue spectacle before us
            was indeed sublime sky was cloudless and of a deep dark blue.
          </p>

          <div className="flex flex-row gap-3 mt-10  items-center">
            <img src={Play} alt="Play" />
            <p className="font-bold text-2xl font-DavidLibre"> Watch 3D Tour</p>
          </div>
        </div>
        <div className="relative md:w-1/2 flex flex-col items-center justify-center">
          <img
            src={GroupPic}
            alt="Group Pic"
            className="rounded-xl object-contain"
          />

          <img src={Pins} alt="Pins" className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Media;
