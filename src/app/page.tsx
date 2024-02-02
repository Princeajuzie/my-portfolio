"use client";
import { Creteria, Herosection, MyBackgroundsection, ProfileCard } from "@/components";
import Test from "@/components/tesxt";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar1") as HTMLElement);
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
              height: "400px",
            }}
            className=" w-full  relative  "
          >
            <section className="relative bg-gradient-to-b from-[rgba(30,30,40,0.93)] via-[rgba(30,30,40,0.96)] to-[rgba(30,30,40,0.99)]  h-screen w-full">
              <div className="h-screen">
                <div className="hidden">
                  <Test />
                  <Test />
                </div>
                <div className="lg:flex  block">
                  <div className="h-screen lg:block  hidden">
                    <ProfileCard />
                  </div>
                  <div
                    className=""
                    style={{ height: `calc(100vh - 30px)` }}
                    id="my-scrollbar1"
                  >
                    <Herosection />
                    <MyBackgroundsection />
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
