interface Props {
  icon: string;
  mainHeading: string;
  desc: string;
  buttonInfo: string;
}

const PurpleBox = ({ icon, mainHeading, desc, buttonInfo }: Props) => {
  return (
    <div className="max-container relative bg-purpleBackground h-52 flex flex-row max-lg:flex-col mt-20 max-container mx-auto items-center rounded-3xl w-full p-5">
      <div
        className={` ${
          mainHeading === "We Are Hiring!" ? "bg-light_blue" : "bg-purple-600"
        } w-[86px] h-[86px] rounded-xl flex items-center justify-center ml-[68px]`}
      >
        <img src={icon} alt="Settings Icon" width={46} height={48} />
      </div>

      <div className="flex flex-col gap-2 ml-[46px] -mt-5">
        <h1 className="font-DavidLibre font-bold mt-4 text-4xl text-white">
          {mainHeading}
        </h1>
        <p className="font-Kumbh text-xl text-slate-500">{desc}</p>
      </div>

      <button className="absolute font-Kumbh text-sm font-bold px-8 py-3 bg-peach_yellow rounded-lg right-14">
        {buttonInfo}
      </button>
    </div>
  );
};

export default PurpleBox;
