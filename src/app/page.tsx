"use client";
import {
  Creteria,
  Herosection,
  MyBackgroundsection,
  ProfileCard,
  Ratingsection,
  Workssection,
  Contactsection,
  Footersection,
  Mynewslettersection
} from "@/components";
import Test from "@/components/tesxt";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useState } from "react";
import { FaEllipsisV  } from "react-icons/fa";
export default function Home() {
  const [toggle, setToggle] = useState(false)

  const HandleToggle = ()=>{
    setToggle((prev)=> !prev)
    console.log(toggle)
  }
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar1") as HTMLElement);
  }, []);
  return (
    <div className=" lg:p-[15px] p-0 bg-[#191923] h-screen w-[100vw] top-0 relative overflow-hidden">
      <div className="fixed z-[10] w-full h-[70px] bg-[#20202a] shadow-md lg:hidden block "> 
      <div className="flex items-center  h-full px-2 text-[20px]">

      <FaEllipsisV  onClick={HandleToggle} />
      </div>
      </div>
      <div className="max-w-[1440px] ml-auto mr-auto bg-[#1e1e28] bg-cover w-full h-full relative overflow-hidden">
        <div className="relative flex flex-nowrap h-screen">
          <main
            style={{
              backgroundImage: `url(/resources/images/bg.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "400px",
            }}
            className=" w-full  relative"
          >
            <section className="relative bg-gradient-to-b from-[rgba(30,30,40,0.93)] via-[rgba(30,30,40,0.96)] to-[rgba(30,30,40,0.99)]  h-screen w-full">
              <div className="h-screen">
                <div className="hidden">
                  <Test />
                  <Test />
                </div>
                <div className="lg:flex  block">
                  <div className={`h-screen lg:block  ${toggle ? "block  z-[999]" : "hidden"} `}>
                    <ProfileCard HandleToggle={HandleToggle} />
                  </div>
                  <div
                    className="lg:pt-0 pt-[94px] h-screen lg:h-[calc(100vh-30px)]"
                    id="my-scrollbar1"
                  >
                    <Herosection />
                    <MyBackgroundsection />
                  
                    <div className=" ">

                    <Ratingsection />
                    <div className="h-max relative">

                      <Workssection />
                    </div>
                      <Mynewslettersection />
                   <Contactsection />
                   <div className="lg:px-8 px-2"> 

                   <Footersection />
                   </div>
                    </div>
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
