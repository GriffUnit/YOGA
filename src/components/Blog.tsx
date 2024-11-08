import { blogDetails } from "../constants";
import BlogBox from "./BlogBox";
import Button from "./Button";

const Blog = () => {
  return (
    <section className="max-container -mt-60 mx-auto px-[135px] pt-36 pb-90">
      <div className=" flex flex-col gap-2">
        <h3 className="red_heading">OUR BLOG</h3>
        <h1 className="font-DavidLibre font-bold text-[56px] w-[360px] ">
          Latest Articles About Yoga
        </h1>
      </div>

      <div className="flex flex-1 flex-row flex-wrap max-sm:flex-col gap-6 max-container">
        {blogDetails.map((detail) => (
          <BlogBox image={detail.image} date={detail.date} desc={detail.desc} />
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Button buttonTitle="SEE MORE" />
      </div>
    </section>
  );
};

export default Blog;
