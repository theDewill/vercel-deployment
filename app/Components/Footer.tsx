import Image from "next/image";

import email from "@/public/emailIcon.png";
import phone from "@/public/phone.png";
import projects from "@/public/projects.png";
import events from "@/public/events.png";

//#48484854 bg
//#f78300

export default function Footer(attr: any) {
  let footerStyle = `${attr.blury} text-[14px] z-30 bg-orngclr w-[100%] h-fit pt-5 pb-5 terraLogo:pb-[120px] px-5 rounded-t-[60px] flex flex-col  gap-10 justify-center items-center  `;

  return (
    <footer className={footerStyle}>
      {/* <div className="flex flex-wrap gap-[300px] mdm:gap-[50px] justify-center flex-1 "> */}

      <div className="flex mdm:flex-wrap justify-center gap-x-[100px] gap-y-[50px] px-[100px] terraLogo:px-[45px]">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-bold">Company</h1>
          <ul className=" text-[#000] flex flex-col items-center">
            <li>
              <a>About</a>
            </li>
            <li>
              <a href="../Developers">Members</a>
            </li>
            <li>
              <a>Growth</a>
            </li>
            <li>
              <a>Carriers</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 flex">
          <h1 className="font-bold">Resources</h1>
          <div>
            <a href="../Projects" className="flex gap-3 items-center">
              <Image src={projects} alt="gmail_image" className="w-[20px]" />
              <p className="text-[#000]">Projects</p>
            </a>

            <a className="flex gap-3 items-center">
              <Image src={events} alt="gmail_image" className="w-[20px]" />
              <p className="text-[#000]">Events</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start sm:item-center gap-3">
          <h1 className="font-bold">Contact Us</h1>
          <div>
            <div className="flex gap-3 items-center">
              <Image src={email} alt="gmail_image" className="w-[30px]" />
              <p className="text-[#000]">contact@terracodedev.com</p>
            </div>

            <div className="flex gap-3 items-center">
              <Image src={phone} alt="gmail_image" className="w-[25px]" />
              <p className="text-[#000]">+94775824406</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Brand flex flex-col gap-4 justify-center items-center">
        <Image
          src={"/terralogo.svg"}
          alt="logo"
          width={120}
          height={120}
          className="w-[50px]"
        />

        <div>© 2024 Terracode. All rights Reserved.</div>
      </div>
    </footer>
  );
}
