import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

export function ProfileCard() {
  return (
    <div className="h-screen">
      <section
        className="bg-[#20202a] w-[290px] min-w-[290px] shadow-md  relative z-40"
        style={{ height: `calc(100vh - 30px)` }}
      >
        <div className="px-[20px]">
          <div className="absolute left-0 top-0 z-[9999] w-full p-[30px] h-[235px] bg-gradient-to-r from-[rgba(37,37,50,0.98)] to-[rgba(35,35,45,0.98)]">
            <div className="w-[90px] h-[90px] m-auto rounded-lg mb-[15px] relative">
              <Image
                height={300}
                width={300}
                src="/resources/images/avatar.jpeg"
                alt="avatar"
                className="w-full h-full rounded-full mx-auto object-contain"
              />

              <div className="relative">
                <div className="absolute bottom-2 right-1 h-[12px] w-[12px] bg-[#FFC107] rounded-3xl z-50"></div>
                <div className="absolute bottom-2 right-1 h-[12px] w-[12px] bg-white rounded-full  animate-ping "></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-center">
              <h5 className="text-[#fafafc] ">Prince Ajuzie </h5>
              <p className="text-[12px] w-36">
                A Software Engneer & Technical Writer{" "}
              </p>
            </div>
          </div>

          <div
            className="pt-[240px] pb-[50px] pr-0 pl-0 overflow-x-auto "
            style={{ height: `calc(100vh - 80px)` }}
          >
            <div className="py-[15px]">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center justify-between">
                  <h6 className="text-[#fafafc]">Residence:</h6>
                  <span>Nigeria</span>
                </li>
                <li className="flex items-center justify-between">
                  <h6 className="text-[#fafafc]">city:</h6>
                  <span>PortHarcourt</span>
                </li>
                <li className="flex items-center justify-between">
                  <h6 className="text-[#fafafc]">Age:</h6>
                  <span>22</span>
                </li>
              </ul>
            </div>
            <div className="w-full h-[1px] opacity-[0.3] bg-[#646466]"></div>
            <div className="py-[10px]">
              <div className="w-[33.3%] text-center items-center flex flex-col">
                <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">

                  <svg
                    viewBox="0 0 100 100"
                    style={{ display: "block", width: "100%" }}
                  >
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#eee"
                      strokeWidth={7}
                      fillOpacity={0}
                    />
                    <path
                      d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                      stroke="#555"
                      strokeWidth={7}
                      fillOpacity={0}
                      style={{
                        strokeDasharray: "292.273, 292.273",
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>
                  <div class="absolute left-[50%] to-[50%] p-0  m-0 " style={{  transform: "translate(-50%, -50%)" ,color: "rgb(85, 85, 85)"}}>100</div>
                </div>
                <h6>French</h6>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="h-[50px] px-[35px] flex items-center gap-8 bg-gradient-to-r from-[rgba(37,37,50,0.98)] to-[rgba(35,35,45,0.98)] absolute z-[99] w-full ">
          <Link
            href={"https://www.linkedin.com/in/princeajuzie/"}
            className="text-base hover:text-[#ffff] hover:ease-in-out "
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"https://twitter.com/Princeajuzie7"}
            className="text-base hover:text-[#ffff] hover:ease-in-out "
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href={"https://bio.link/princeaj"}
            className="text-base hover:text-[#ffff] hover:ease-in-out "
          >
            <BsGlobe />
          </Link>
          <Link
            href={"https://github.com/Princeajuzie"}
            className="text-base hover:text-[#ffff] hover:ease-in-out "
          >
            <FaGithubSquare />
          </Link>
          <Link
            href={"mailto:princeajuzie1@gmail.com"}
            className="text-lg hover:text-[#ffff] hover:ease-in-out "
          >
            <IoIosMail />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProfileCard;