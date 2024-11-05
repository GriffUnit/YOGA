import { instructorDetails } from "../constants";
import Instructorbox from "./Instructorbox";

const InstructorList = () => {
  return (
    <div className="mt-10 flex flex-row justify-between gap-5 max-container">
      {instructorDetails.map((detail) => (
        <Instructorbox
          image={detail.image}
          classType={detail.classType}
          name={detail.name}
        />
      ))}
    </div>
  );
};

export default InstructorList;
