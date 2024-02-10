import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const loadIsotope = () => require("isotope-layout");

let Isotope;

export function Workssection() {
  const isotope = React.useRef<Isotope | null>();

  const categories = [
    { key: "*", label: "All Categories" },
    { key: "web", label: "Web" },
    { key: "server", label: "Server" },
    { key: "app", label: "App" },
  ];

  // Content for each category
  const content = [
    { category: "app", text: "App Content" },
    { category: "web", text: "Web Content" },
    { category: "server", text: "Server Content" },
  ];

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      Isotope = loadIsotope();
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }
    return () => isotope.current?.destroy();
  }, []);

  const handleFilterKeyChange = (key: string) => () => {
    if (key === "*") {
      isotope.current?.arrange({ filter: "*" });
    } else {
      isotope.current?.arrange({ filter: `.${key}` });
    }
  };

  return (
    <div className="py-[30px] w-full  lg:px-8 px-2">
      <div className="pt-0 basis-full max-w-full">
        <div className="flex justify-between lg:flex-row flex-col lg:flex  lg:items-center lg:text-center lg:justify-center">
          <div className="self-center relative mb-[30px] w-full ">
            <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">
              Works
            </h4>
          </div>
          <div className="pb-[30px]">
            <div className="lg:w-max">
              <div className="flex flex-row items-center justify-center">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={handleFilterKeyChange(category.key)}
                    className="relative uppercase text-[12px] inline-block mr-[15px] text-[#8c8c8e] font-[600] transition ease-in-out hover:text-white hover:text-shadow"
                  >
                    {category.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ul className="filter-container flex flex-row gap-3  justify-center mx-auto" style={{ position: "relative", height: "auto" }}>
          {/* Map over content array and render items */}
      
          <li className="bg-[#2C2C37] w-full h-auto p-[10px]">
            <Link href={"#"}>
              <img
                src={`https://alicalimli.com/_next/image?url=%2Fprojects%2Facmessenger.png&w=640&q=75`}
                height={300}
                width={300}
                className="w-[600px] h-auto mb-3"
                alt="project 1"
              />
            </Link>
            <div className="flex flex-col gap-4 ">
              <div>
                <div className="w-full  pt-0 ">
                  <p className="text-xs text-muted-foreground">
                    Design &amp; Development
                  </p>
                  <h5 className="scroll-m-20 text-lg font-semibold tracking-tight flex items-center gap-2 text-[#FEFEFE]">
                    ACMessenger
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/alicalimli/ac-messenger"
                      className="hover:text-primary duration:200"
                      data-state="closed"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 496 512"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </a>
                  </h5>
                  <p className="text-sm text-muted-foreground mt-1">
                    A Fullstack Chatapp that Ive built to learn more about React
                    and its popular libraries like redux, and also learn to use
                    Firebase.
                  </p>
                </div>
              </div>
              <div>
                <div className=" pt-0 mt-auto items-start px-4 pb-4 flex flex-col">
                  <ul className="flex gap-1 flex-wrap">
                    <li>
                      <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-muted text-white/80 rounded-md bg-[#0C0A09]">
                        ReactJS
                      </div>
                    </li>
                    <li>
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-muted text-white/80 rounded-md bg-[#0C0A09]">
                        Typescript
                      </div>
                    </li>
                    <li>
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-muted text-white/80 rounded-md bg-[#0C0A09]">
                        Firebase
                      </div>
                    </li>
                    <li>
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-muted text-white/80 rounded-md bg-[#0C0A09]">
                        TailwindCSS
                      </div>
                    </li>
                    <li>
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-muted text-white/80 rounded-md bg-[#0C0A09]">
                        Redux Toolkit
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-row bg-red-600 items-center justify-center gap-3 w-full text-center">

                  <Link href={"#"} className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px] w-full">
                  <span  >Visit Website </span>
                  <IoIosArrowForward />
                </Link>
                <Link href={"#"} className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px] w-full">
                  <span  >Source Code </span>
                  <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/alicalimli/ac-messenger"
                      className="hover:text-primary duration:200"
                      data-state="closed"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 496 512"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </a>
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-[#2C2C37] w-full h-auto p-[30px]">
            <h1>hello world</h1>
          </li>
          {/* {content.map((item, index) => (
            <li key={index} className={`filter-item ${item.category}  bg-[#2C2C37] `}>
              <div className="">

              </div>
              <span className="">{item.text}</span>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default Workssection;