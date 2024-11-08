interface Props {
  buttonTitle: string;
}

const Button = ({ buttonTitle }: Props) => {
  return (
    <button
      className={` font-Kumbh font-semibold text-sm px-8 py-4 mt-8 pt-2 rounded-xl  ${
        buttonTitle === "EXPLORE"
          ? "bg-purpleBackground border-none text-white focus:ring-2 w-32"
          : buttonTitle === "CONTACT US"
          ? "bg-peach_yellow border-none text-black"
          : "border-2 border-gray-300"
      }`}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
