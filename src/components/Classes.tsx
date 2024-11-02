import ClassList from "./ClassList";
import Discount from "./Discount";

const Classes = () => {
  return (
    <section className="flex flex-col justify-center items-center z-0 mt-56">
      <h3 className="font-Kumbh text-peach_red text-lg leading-normal">
        OUR CLASSES
      </h3>

      <h1 className="text-[56px] font-DavidLibre mt-6 w-[450px] text-center font-bold leading-[64px] p-6">
        Discover & Register For Our Classes
      </h1>

      <div className="mt-10">
        <ClassList />
      </div>

      <button className="bg-white font-Kumbh font-bold text-sm px-14 py-4 text-center flex items-center justify-center border-2 border-gray-300 mt-10 pt-2 rounded-xl">
        All CLASSES
      </button>

      <Discount />
    </section>
  );
};

export default Classes;
