"use client"
import { Herosection, ProfileCard } from "@/components";
import Test from "@/components/tesxt";
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#my-scrollbar1') as HTMLElement);
  }, []);
  return (
    <div className=" p-[15px] bg-[#191923] h-screen w-[100vw] top-0 relative overflow-hidden">
      <div className="max-w-[1440px] ml-auto mr-auto bg-[#1e1e28] bg-cover w-full h-full relative overflow-hidden">
        <div className="relative flex flex-nowrap h-screen">
          <main
            style={{
              backgroundImage: `url(/resources/images/bg.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "400px"
            }}
            className=" w-full  relative  "
          >
            <section className="relative bg-gradient-to-b from-[rgba(30,30,40,0.93)] via-[rgba(30,30,40,0.96)] to-[rgba(30,30,40,0.99)]  h-screen w-full">
              <div className="h-screen">
                  <div className="hidden">
                    <Test />
                    <Test />
                  </div>
                <div className="flex gap-10">
                  <div className="h-screen ">
                    <ProfileCard />
                    {/* <div
            className="pt-[240px] pb-[50px] pr-0 pl-0  scroll-smooth scrollbar-none  "
            style={{ height: `calc(100vh - 80px)` }}
          id="my-scrollbar">
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
            <div className="py-[15px] flex items-center justify-between gap-3">
              <div className="w-[33.3%] text-center items-center flex flex-col">
                <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                  <svg
                    viewBox="0 0 100 100"
                    style={{
                      width: "100%",
                    }}
                    display="block"
                  >
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#eee"
                      strokeWidth={7}
                      fill="none"
                    />
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#555"
                      strokeWidth={7}
                      strokeDasharray="292.273,292.273"
                      fill="none"
                    />
                  </svg>
                  <div
                    className="absolute left-[50%] top-[50%] p-0  m-0 "
                    style={{
                      transform: "translate(-50%, -50%)",
                      color: "rgb(85, 85, 85)",
                    }}
                  >
                    100%
                  </div>
                </div>
                <h6>French</h6>
              </div>
              <div className="w-[33.3%] text-center items-center flex flex-col">
                <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                  <svg
                    viewBox="0 0 100 100"
                    style={{
                      width: "100%",
                    }}
                    display="block"
                  >
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#eee"
                      strokeWidth={7}
                      fill="none"
                    />
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#555"
                      strokeWidth={7}
                      strokeDasharray="292.273,292.273"
                      fill="none"
                    />
                  </svg>
                  <div
                    className="absolute left-[50%] top-[50%] p-0  m-0 "
                    style={{
                      transform: "translate(-50%, -50%)",
                      color: "rgb(85, 85, 85)",
                    }}
                  >
                    100%
                  </div>
                </div>
                <h6>Igbo</h6>
              </div>
              <div className="w-[33.3%] text-center items-center flex flex-col">
                <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                  <svg
                    viewBox="0 0 100 100"
                    style={{
                      width: "100%",
                    }}
                    display="block"
                  >
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#eee"
                      strokeWidth={7}
                      fill="none"
                    />
                    <path
                      d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                      stroke="#555"
                      strokeWidth={7}
                      strokeDasharray="292.273,292.273"
                      fill="none"
                    />
                  </svg>
                  <div
                    className="absolute left-[50%] top-[50%] p-0  m-0 "
                    style={{
                      transform: "translate(-50%, -50%)",
                      color: "rgb(85, 85, 85)",
                    }}
                  >
                    100%
                  </div>
                </div>
                <h6>English</h6>
              </div>
            </div>
            <div className="w-full h-[1px] opacity-[0.3] bg-[#646466]"></div>
            <div>
           
            </div>
          </div> */}
                  </div>
                  <div
                    className=""
                    style={{ height: `calc(100vh - 30px)` }}
                    id="my-scrollbar1"
                  >
                    <Herosection />
                 
                 
    
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
