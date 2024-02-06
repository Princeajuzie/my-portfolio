import Image from "next/image";
import User2 from "../../public/resources/images/face.svg";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowForward } from "react-icons/io";
export function Herosection() {
  return (
    <div className="xl:px-8 lg:px-2 lg:pt-8 px-[10px] py-0  relative w-full ">
      <div
        className="  transition duration-550 ease-in-out p bg-cover bg-center shadow-md  z-50 w-full rounded-md  relative "
        style={{
          backgroundImage: `url(/resources/images/bg.jpg)`,
          backgroundPosition: "center",
        }}
      >
        <div className=" relative lg:flex gap-11 lg:px-20 lg:py-[50px] px-[30px] py-[60px]  lg:items-center lg:justify-center rounded-md bg-gradient-to-r from-[rgba(45,45,58,0.9)] via-[rgba(45,45,58,0.7)] to-[rgba(43,43,53,0.7)] ">
          <div className=" lg:w-[calc(100vw-550px)] ">
            <div className="  self-center flex flex-col gap-4 items-center text-center lg:text-start lg:justify-start lg:items-start justify-center   lg:flex lg:flex-col lg:gap-4">
              <h1 className="mb-15 text-white lg:text-[36px]  text-[46px]  font-[800]">
                Discover my Amazing <br />
                Art Space!
              </h1>
              <div className="art-lg-text art-code lg:mb-[25px] mb-[10px] text-[#fff] text-[16px] lg:min-h-0 min-h-[70px]">
                &lt;<i className="text-[#FFC107] text-[16px]">code</i>&gt; I
                build{" "}
                <TypeAnimation
                  sequence={[
                    "web interfaces.", // Types 'One'
                    1000, // Waits 1s
                    "ios and android applications", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "design mocups", // Types 'Three' without deleting 'Two'
                    1000,
                    "automation tools.",
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    color: "#fff",
                  }}
                />
                <span>
                  <span className="wrap"></span>
                </span>
                &lt;<i className="text-[#FFC107]">code</i>&gt;
              </div>
              <div className="art-buttons-frame lg:flex items-center gap-5 lg:gap-3 lg:flex-row flex flex-col  text-center">
                <a
                  href="#."
                  className="py-[15px] px-[35px] bg-[#FFC107] rounded-md uppercase text-[#20202a] text-[700] mr-[15px]"
                >
                  <span>Explore now</span>
                </a>
                <a
                  href="#."
                  className="flex text-[#fff] items-center gap-2 uppercase text-center  hover:transition-transform hover:duration-400 hover:ease-in-out"
                >
                  <span className="text-center">Hire me</span>
                  <IoIosArrowForward />
                </a>
              </div>
            </div>
          </div>
          <Image
            src={User2}
            height={200}
            width={200}
            alt="prince ajuzie"
            className="art-banner-photo h-auto   lg:w-[320px] lg:block hidden  right-8 bottom-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
