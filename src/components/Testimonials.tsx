import { testimonialDetails } from "../constants";
import Button from "./Button";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  return (
    <section className=" flex flex-col max-container p-[135px]">
      <div className="space-y-5 flex flex-col justify-center items-center">
        <h3 className="red_heading mt-24">TESTIMONIALS</h3>
        <h1 className="font-DavidLibre text-5xl w-[391px] items-center text-center font-bold">
          What Our Clients Say About Us
        </h1>
      </div>

      <div className="flex flex-row gap-6 mt-10">
        {testimonialDetails.map((detail) => (
          <TestimonialBox
            name={detail.Testimonialname}
            testimonialClass={detail.TestimonialClass}
            testimony={detail.testimony}
            ProfilePic={detail.ProfilePicture}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-2">
        <Button buttonTitle="LOAD MORE" />
      </div>
    </section>
  );
};

export default Testimonials;
