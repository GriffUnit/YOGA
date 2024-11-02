interface Props {
  icon: string;
  title: string;
  desc: string;
}

const Symbolbox = ({ icon, title, desc }: Props) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center max-container">
      <div
        className={`bg-purpleBackground w-32 h-32 shadow-lg flex items-center justify-center md:mt-0 rounded-3xl z-10 ${
          title === "Flexibility" ? "mt-14" : "mt-0"
        }`}
      >
        <img src={icon} alt="Icon" />
      </div>

      <p className="font-DavidLibre font-bold mt-4 text-4xl">{title}</p>
      <p className="mt-2 font-Kumbh text-center text-slate-500">{desc}</p>
    </div>
  );
};

export default Symbolbox;
