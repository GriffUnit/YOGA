import { LocationIcon, PhoneIcon } from "../assets/Icons";
import { ContactBg, ContactPic } from "../assets/Images";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="max-container p-8 relative -mt-[293px]">
      <img
        src={ContactBg}
        alt="Contact Background"
        className="w-full h-auto absolute inset-0 object-cover"
      />

      <div className="inset-0 relative flex flex-col md:flex-row justify-center items-center md:items-start gap-[154px]">
        <img
          src={ContactPic}
          alt="ContactPic"
          className="overflow-visible -mt-20"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-DavidLibre text-[56px] leading-[64px] text-white font-bold mt-20">
            Contact Us
          </h1>
          <p className="font-Kumbh text-base text-slate-500 leading-normal">
            Everyday 8:00 – 20:00
          </p>
          <div className="flex flex-row gap-3 items-center">
            <div className="rounded-2xl w-16 h-16 bg-purpleBackground flex justify-center items-center">
              <img src={LocationIcon} alt="LocationIcon" />
            </div>

            <p className="text-white font-Kumbh text-xl">
              7767 Clark Drive Shelton, CT 06484
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="rounded-2xl w-16 h-16 bg-purpleBackground flex justify-center items-center">
              <img src={PhoneIcon} alt="PhoneIcon" />
            </div>

            <p className="text-white font-Kumbh text-xl">+1 (234) 567-89-01</p>
          </div>
          <div>
            <Button buttonTitle="CONTACT US" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
