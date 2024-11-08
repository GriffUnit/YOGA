import { Social } from "../assets/Icons";

const Footer = () => {
  return (
    <section className=" max-container justify-between px-[135px] p-4">
      <div className="flex flex-row gap-20 justify-between mt-24">
        <h1 className="font-DavidLibre text-4xl font-bold">YGA</h1>

        <div className="flex flex-col gap-2">
          <h3 className="red_heading">MENU</h3>
          <div className="font-Kumbh flex flex-col text-base leading-normal gap-2">
            <p>About</p>
            <p>Classes</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="red_heading">CLASSES</h3>
          <div className="font-Kumbh flex flex-col text-base leading-normal gap-2">
            <p>Ashtanga</p>
            <p>Hatha</p>
            <p>Vinayasa</p>
            <p>Meditation</p>
          </div>
        </div>

        <img src={Social} alt="Social" className="w-40 h-12" />
      </div>

      <div className="mt-36 flex flex-row justify-between">
        <p>Copyright © 2020 Laaqiq. All Rights Reserved.</p>
        <div className="flex flex-row gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
