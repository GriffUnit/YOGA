import { SettingsIcon } from "../assets/Icons";

const Discount = () => {
  return (
    <div className="max-container bg-purpleBackground h-52 flex flex-row max-lg:flex-col mt-20 max-container mx-auto items-center rounded-3xl w-full">
      <div className="bg-purple-500 w-[86px] h-[86px] rounded-xl flex items-center justify-center ml-[68px]">
        <img src={SettingsIcon} alt="Settings Icon" width={46} height={48} />
      </div>

      <div className="flex flex-col gap-2 ml-[46px] -mt-5">
        <h1 className="font-DavidLibre font-bold mt-4 text-4xl text-white">
          Get Discount for All Classes
        </h1>
        <p className="font-Kumbh text-xl text-slate-500">
          The sky was cloudless and of a deep dark blue spectacle before.
        </p>
      </div>

      <button className="font-Kumbh text-sm font-bold px-7 py-2 bg-peach_yellow rounded-lg ml-36">
        APPOINTMENT
      </button>
    </div>
  );
};

export default Discount;
