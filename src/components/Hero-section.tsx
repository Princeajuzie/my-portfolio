import Image from "next/image";
import User2 from "../../public/resources/images/face.png";
import { TypeAnimation } from 'react-type-animation';
export function Herosection() {
  return (
    <div className="px-8 pt-8 md:basis-[100%] max-w-[100%] w-full md:grow-0 md:shrink-0 relative">
      <div
        className="  transition duration-550 ease-in-out bg-cover bg-center shadow-md z-50 w-full  relative "
        style={{ backgroundImage: `url(/resources/images/bg.jpg)` }}
      >
        <div className=" relative flex gap-11 p-20 w-[100%] rounded-md bg-gradient-to-r from-[rgba(45,45,58,0.9)] via-[rgba(45,45,58,0.7)] to-[rgba(43,43,53,0.7)] ">
          <div className="min-w-[900px]  self-center flex flex-col gap-4">
            
            <h1 className="mb-15 text-white text-[36px]">
              Discover my Amazing <br />
              Art Space!
            </h1>
            <div className="art-lg-text art-code mb-25 text-[#fff] text-[16px]">
              &lt;<i className="text-[#FFC107] text-[16px]">code</i>&gt; I build{" "}
              <TypeAnimation
      sequence={[
        'web interfaces.', // Types 'One'
        1000, // Waits 1s
        'ios and android applications', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'design mocups', // Types 'Three' without deleting 'Two'
        1000,
        "automation tools.",
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '16px', display: 'inline-block', color: "#fff" }}
    />
              <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
              >
                <span className="wrap"></span>
              </span>
              &lt;<i className="text-[#FFC107]">code</i>&gt;
              
            </div>
            <div className="art-buttons-frame">
              <a
                href="#."
                className="py-[15px] px-[35px] bg-[#FFC107] uppercase text-[#20202a] text-[700] mr-[15px]"
              >
                <span>Explore now</span>
              </a>
              <a href="#." className="art-link art-white-link art-w-chevron ">
                Hire me
              </a>
            </div>
          </div>
          <Image
            src={User2}
            height={200}
            width={200}
            alt="prince ajuzie"
            className="art-banner-photo h-auto   w-[320px] lg:block hidden  right-8 bottom-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
