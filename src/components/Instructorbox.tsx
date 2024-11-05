interface Props {
  image: string;
  name: string;
  classType: string;
}

const Instructorbox = ({ image, name, classType }: Props) => {
  return (
    <div className="bg-white relative rounded-3xl w-[270px] h-[336px] flex flex-col p-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="absolute overflow-visible object-contain rounded-3xl top-0 flex justify-center items-center"
      />
      <div className=" absolute gap-3 mt-4 flex-col bottom-5 ml-0">
        <p className="text-2xl font-bold font-DavidLibre">{name}</p>

        <p className="font-Kumbh text-base text-slate-600">{classType}</p>
      </div>
    </div>
  );
};

export default Instructorbox;
