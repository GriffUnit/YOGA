import { Left, Pins, Right, SmallCircle } from "../assets/Icons";
import Hiring from "./Hiring";
import InstructorList from "./InstructorList";

const Instructors = () => {
  return (
    <section className="-mt-40 max-container p-[135px]">
      <div>
        <h3 className="red_heading p-3">INSTRUCTORS</h3>
        <div className="flex justify-between p-3">
          <h1 className="font-bold font-DavidLibre text-5xl w-[320px] leading-normal -mt-4">
            Meet Our Talented Team
          </h1>

          <div className="flex flex-row space-x-4 mt-16">
            <div className="relative w-12 h-12">
              <img
                src={Left}
                alt="Left"
                className=" absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src={SmallCircle}
                alt="Small Circle"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-12 h-12">
              <img
                src={Right}
                alt="Right"
                className=" absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src={SmallCircle}
                alt="Small Circle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <InstructorList />

        <img src={Pins} alt="Pin" className=" mt-12" />
      </div>

      <Hiring />
    </section>
  );
};

export default Instructors;
