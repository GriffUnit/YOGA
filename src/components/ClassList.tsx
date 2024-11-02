import ClassBox from "./ClassBox";
import { classDetails } from "../constants";

const ClassList = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-container gap-8 mx-auto">
      {classDetails.map((classDetail) => (
        <ClassBox
          key={classDetail.classTitle}
          classTitle={classDetail.classTitle}
          teacherName={classDetail.teacherName}
          cost={classDetail.cost}
          ProfilePic={classDetail.ProfilePic}
          icon={classDetail.icon}
          BackgroundColor={classDetail.BackgroundColor}
          Line={classDetail.Line}
        />
      ))}
    </div>
  );
};

export default ClassList;
