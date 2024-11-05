import YogaOne from "../assets/Images/Bitmap (1).png";
import YogaTwo from "../assets/Images/Bitmap.png";
import MatIcon from "../assets/Icons/Shape (2).png";
import Circle from "../assets/Images/Oval.png";
import Button from "./Button";

const About = () => {
  return (
    <section className="border-2 border-white max-container flex flex-1 rounded-3xl mt-[120px] mx-auto bg-light_blue shadow-xl z-10 p-6">
      <div className="bg-white flex flex-col md:flex-row p-12 justify-between gap-7 rounded-2xl w-full h-704 shadow-xl z-10">
        <div className="relative md:w-1/2 flex flex-col items-center justify-center">
          <div className="relative flex flex-row justify-center items-center">
            <div className=" relative z-10 -mt-36 mx-4">
              <img
                src={YogaTwo}
                alt="Yoga two"
                width={246}
                height={336}
                className="rounded-2xl shadow-lg object-cover"
              />
              <div className="w-24 h-24 bg-peach_yellow rounded-3xl flex-1 flex justify-center items-center mt-4 absolute right-0">
                <img src={MatIcon} alt="Mat Icon" className="w-12 h-12 z-10" />
              </div>
            </div>
            <div className="z-10 mt-28">
              <img
                src={YogaOne}
                alt="Yoga one"
                width={246}
                height={336}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

          <img
            src={Circle}
            alt="Circle"
            width={360}
            height={360}
            className="absolute z-0 object-cover flex justify-center"
          />
        </div>
        <div className="flex flex-col mt-5 md:w-1/2 justify-center">
          <h3 className="font-Kumbh text-peach_red mb-4 text-lg">
            ABOUT STUDIO
          </h3>
          <h1 className="font-DavidLibre text-3xl md:text-6xl leading-tight font-bold pr-16">
            Get Perfect Body & Clear Your Mind
          </h1>
          <p className="font-Kumbh mt-8 text-xl text-gray-700">
            The sky was cloudless and of a deep dark blue spectacle before us
            was indeed sublime sky was cloudless and of a deep dark blue.
          </p>
          <p className="font-Kumbh text-slate-500 text-xl mt-6 inline-block">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however.
          </p>
          <Button buttonTitle="EXPLORE" />
        </div>
      </div>
    </section>
  );
};

export default About;
