import { Quote } from "../assets/Icons";

interface Props {
  testimony: string;
  ProfilePic: string;
  name: string;
  testimonialClass: string;
}

const TestimonialBox = ({
  testimony,
  ProfilePic,
  name,
  testimonialClass,
}: Props) => {
  return (
    <div className="w-1/2 bg-light_blue flex flex-col p-12 gap-8 rounded-2xl h-auto max-md:w-full">
      <img src={Quote} alt="Quote" width={48} height={36} className="-mt-14" />
      <p className="font-Kumbh text-xl leading-normal">{testimony}</p>
      <div className="flex flex-row gap-4">
        <img src={ProfilePic} alt="ProfilePic" className="rounded-2xl" />
        <div className="flex flex-col gap-2">
          <p className="font-DavidLibre font-bold text-2xl leading-normal">
            {name}
          </p>
          <p className="font-Kumbh text-base leading-normal text-slate-500">
            {testimonialClass}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
