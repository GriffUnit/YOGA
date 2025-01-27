import { SettingsIcon } from "../assets/Icons";
import PurpleBox from "./PurpleBox";

const Discount = () => {
  return (
    <div className="max-container w-full">
      <PurpleBox
        icon={SettingsIcon}
        mainHeading="Get Discount for All Classes"
        desc="The sky was cloudless and of a deep dark blue spectacle before."
        buttonInfo="Appointment"
      />
    </div>
  );
};

export default Discount;
