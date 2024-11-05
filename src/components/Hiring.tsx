import { Search } from "../assets/Icons";
import PurpleBox from "./PurpleBox";

const Hiring = () => {
  return (
    <div className="max-container w-full">
      <PurpleBox
        icon={Search}
        mainHeading="We Are Hiring!"
        desc="The sky was cloudless and of a deep dark blue spectacle before."
        buttonInfo="CONTACT US"
      />
    </div>
  );
};

export default Hiring;
