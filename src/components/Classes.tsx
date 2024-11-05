import Button from "./Button";
import ClassList from "./ClassList";
import Discount from "./Discount";

const Classes = () => {
  return (
    <section className="flex flex-col justify-center items-center z-0 mt-56">
      <h3 className="red_heading mt-64">OUR CLASSES</h3>

      <h1 className="text-[56px] font-DavidLibre mt-6 w-[450px] text-center font-bold leading-[64px] p-6">
        Discover & Register For Our Classes
      </h1>

      <div className="mt-10">
        <ClassList />
      </div>

      <Button buttonTitle="All CLASSES" />
      <div className="-mb-[104px] w-full">
        <Discount />
      </div>
    </section>
  );
};

export default Classes;
