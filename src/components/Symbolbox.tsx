interface Props {
  icon: string;
  title: string;
  desc: string;
}

const Symbolbox = ({ icon, title, desc }: Props) => {
  return (
    <li className="flex flex-1 flex-col items-center justify-center max-container">
      <div
        className={`bg-purpleBackground w-32 h-32 shadow-lg flex items-center justify-center rounded-3xl ${
          title === "Flexibility" ? "mt-4" : ""
        }`}
      >
        <img src={icon} alt="Icon" />
      </div>

      <p className="font-DavidLibre font-bold mt-4 text-4xl">{title}</p>
      <p className="mt-2 font-Kumbh text-center text-slate-500">{desc}</p>
    </li>
  );
};

export default Symbolbox;
