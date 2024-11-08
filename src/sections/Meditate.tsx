import meditateImage from "../assets/Images/Meditate.png";
import rounds from "../assets/Images/rounds.png";
import SymbolList from "../components/SymbolList";

const Meditate = () => {
  return (
    <section className="flex w-full flex-col relative top-12">
      <div className="flex flex-col justify-center max-container items-center w-639 gap-3">
        <div className="leading-8 top-0 mt-1.5">
          <p className="text-peach_yellow font-Kumbh text-lg text-">
            YOGA CLASSES
          </p>
        </div>
        <div className="text-center">
          <p className="text-white font-DavidLibre text-7xl text-wrap leading-tight font-bold">
            Clear Mind & Refresh Your Body
          </p>
        </div>
        <div>
          <button className="text-black font-bold bg-peach_yellow  font-Kumbh px-8 py-2 rounded-xl">
            VIEW CLASSES
          </button>
        </div>
      </div>

      <div className="flex relative justify-center w-710 items-center max-container mt-28">
        <img
          src={meditateImage}
          alt="Meditate Image"
          className="absolute w-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-64 flex justify-center items-center sm:w-auto"
        />
        <img
          src={rounds}
          alt="Rounds"
          className="w-full h-full object-cover z-0 overflow-hidden"
        />
      </div>

      <SymbolList />
    </section>
  );
};

export default Meditate;
