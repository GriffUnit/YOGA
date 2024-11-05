interface Props {
  classTitle: string;
  teacherName: string;
  cost: string;
  ProfilePic: string;
  BackgroundColor: string;
  icon: string;
  Line: string;
}

const ClassBox = ({
  classTitle,
  teacherName,
  cost,
  ProfilePic,
  icon,
  BackgroundColor,
  Line,
}: Props) => {
  return (
    //mt-10 ml-12
    <div className={`w-[570px] h-[352px] rounded-3xl ${BackgroundColor} p-10`}>
      <div className=" flex flex-col">
        <h2 className="font-DavidLibre font-bold text-4xl leading-normal">
          {classTitle}
        </h2>

        <div className="flex flex-row items-center">
          <img
            src={ProfilePic}
            alt="Profile Pic"
            className="w-10 h-10 rounded-full mr-4"
          />
          <h3 className="font-normal text-xl">{teacherName}</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between ">
        <p className=" mt-32 left-0 relative">
          <span className=" absolute font-Kumbh text-xl font-normal leading-8 -mt-1">
            $
          </span>

          <span className=" font-DavidLibre font-bold leading-[48px] text-[40px] ml-[10px]">
            {cost}
          </span>

          <span className="  font-Kumbh leading-normal text-[16px]">/mo</span>
        </p>

        <div className="relative right-0 z-auto -mr-10 w-[222px] h-32">
          <img
            src={icon}
            alt="Icon"
            /* width={121}
            height={128} */
            className={`absolute inline-block object-contain z-10 ${
              classTitle === "Meditation"
                ? "mt-9 ml-[70px]"
                : classTitle === "Ashtanga Yoga"
                ? "mt-4 ml-12"
                : classTitle === "Vinayasa Yoga"
                ? "mt-9 ml-[52px]"
                : "mt-11 ml-[46px]"
            }`}
          />
          <img
            src={Line}
            alt="Line"
            className="absolute right-0 z-0 object-contain mt-[146px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassBox;
