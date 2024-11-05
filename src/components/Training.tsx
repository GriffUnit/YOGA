import { trainingDetails } from "../constants";
import Button from "./Button";
import TrainingVid from "./TrainingVid";

const Training = () => {
  return (
    <section className="flex flex-col gap-5 max-container justify-center items-center mt-7 p-[135px]">
      <div className="flex flex-col">
        <h3 className="red_heading text-center">TRAINING ONLINE</h3>
        <h1 className=" font-bold font-DavidLibre text-[56px] w-[450px] text-center">
          Take Your Yoga To The Next Level
        </h1>
      </div>
      <div className="w-full">
        <div>
          <TrainingVid
            mainVideo={trainingDetails[0]}
            thumbnails={trainingDetails.slice(1)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Button buttonTitle="ALL VIDEO" />
        </div>
      </div>
    </section>
  );
};

export default Training;
