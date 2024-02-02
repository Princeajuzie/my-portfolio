import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
export function MyBackgroundsection() {
  return (
    <div className="overflow-hidden py-0 px-[30px] relative">
      <div className="flex  gap-[10px] flex-row">
        <div className="lg:w-1/2 flex-grow-0 flex-shrink-0 flex-basis-1/2 max-w-[50%]">
          <div className="self-center relative mb-[30px]">
            <h4 className="text-[14px] text-[600] text-[#fafafc]">Education</h4>
          </div>

          <div className="art-timeline">
            <div className="relative">
              <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
              <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
              <div className="relative mr-[40px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md">
                <div className="flex justify-between w-full">
                  <div className="">
                    <h5 className="text-[14px] font-semibold text-[#FAFAFC]">
                      Tittle A Section 1
                    </h5>
                    <p className="mt-[5px] mb-[20px] text-[#646466] italic text-[12px]">
                      Template Autor
                    </p>
                  </div>
                  <div className="mb-[15px] ">
                    <span className="bg-[#20202a] text-[#646466] py-[5px] px-[15px] ml-auto rounded-[15px] text-[10px]">
                      jan 2018 - may 2020
                    </span>
                  </div>
                </div>
                <p className="mb-[1rem] leading-5 text-[12px]">
                  Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.
                </p>
                <Link href={"#"} className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]">
                  <span>Diplome</span>
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex-grow-0 flex-shrink-0 flex-basis-1/2 max-w-[50%]">
          <div className="self-center relative mb-[30px]">
            <h4 className="text-[14px] text-[600] text-[#fafafc]">
              Work Experiences
            </h4>
          </div>

          <div className="art-timeline">
            <div className="relative">
              <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
              <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
              <div className="relative mr-[20px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBackgroundsection;
