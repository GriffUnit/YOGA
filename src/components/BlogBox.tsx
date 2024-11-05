interface Props {
  image: string;
  date: string;
  desc: string;
}

const BlogBox = ({ image, date, desc }: Props) => {
  return (
    <div>
      <img
        src={image}
        alt={image}
        className="rounded-2xl flex flex-1 w-full h-auto object-cover"
      />
      <div className="flex flex-col gap-4 ml-3">
        <p className="font-Kumbh text-base text-slate-400 leading-normal mt-5">
          {date}
        </p>
        <p className="font-DavidLibre text-2xl w-[260px]">{desc}</p>
        <p className="font-Kumbh text-base leading-normal">Read More</p>
      </div>
    </div>
  );
};

export default BlogBox;
