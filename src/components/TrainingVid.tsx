import { Play } from "../assets/Icons";

interface Props {
  mainVideo: {
    image: string;
    time: string;
    title: string;
  };
  thumbnails: {
    image: string;
    time: string;
    title: string;
  }[];
}

const TrainingVid = ({ mainVideo, thumbnails }: Props) => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="relative w-2/3">
        <div className="rounded-3xl shadow-lg overflow-hidden">
          <img
            src={mainVideo.image}
            alt={mainVideo.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 ml-4 text-white">
          <img
            src={Play}
            alt="Play"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div>
            <p className="text-xl font-Kumbh">{mainVideo.time}</p>
            <p className="text-4xl leading-normal font-DavidLibre font-bold">
              {mainVideo.title}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-1/3">
        {thumbnails.map((thumb, index) => (
          <div key={index} className="relative h-1/2">
            <div className="rounded-3xl shadow-lg overflow-hidden">
              <img
                src={thumb.image}
                alt={thumb.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 ml-2">
              <img
                src={Play}
                alt="Play"
                className="w-[46px] h-[46px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />

              <div className="text-white absolute">
                <p className="text-sm font-Kumbh text-slate-300 font-normal">
                  {thumb.time}
                </p>
                <p className="text-xl leading-normal font-DavidLibre font-bold">
                  {thumb.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingVid;
