import { FaUser, FaAt, FaEnvelope } from "react-icons/fa";
export function Contactsection() {
  return (
    <div>
      <div className="pt-[30px] lg:px-8 px-2">
        <div>
          <h4 className="text-[#FAFAFC] text-[16px] font-[700] lg:text-start mb-4 text-center">Contact Information</h4>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Country:</h6>
                  <span>Canada</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">City:</h6>
                  <span>Toronto</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Street:</h6>
                  <span>20 Dellbank Rd</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Country:</h6>
                  <span>Canada</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">City:</h6>
                  <span>Toronto</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Street:</h6>
                  <span>20 Dellbank Rd</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Country:</h6>
                  <span>Canada</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">City:</h6>
                  <span>Toronto</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-[#FAFAFC]">Street:</h6>
                  <span>20 Dellbank Rd</span>
                </li>
              </ul>
            </div>
          </div>
       
        </div>
        <div>
          <h4 className="text-[#FAFAFC] text-[16px] font-[700] lg:text-start mb-4 text-center">Get in touch</h4>
          <div>
            <div className="bg-[#2D2D39] p-[30px] mb-[30px] ">
              <form >
                <div>
                  <div  className="artinput">
                    <input type="text" name="" id="name" placeholder="Name" className="h-[50px] w-full text-[#fafafc] pl-[65px] bg-[#242430] pr-[15px] shadow-md mb-0 outline-none inputfocus "  />
                    <label htmlFor="name" className="text-center justify-center flex items-center absolute text-[#8c8c8e] bg-[#20202a] h-[50px] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:">
                      <FaUser className="font-[500] "/>
                    </label>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div  className="artinput">
                    <input type="email" name="" id="email" placeholder="Email" className="h-[50px] w-full text-[#fafafc] pl-[65px] bg-[#242430] pr-[15px] shadow-md mb-0 outline-none inputfocus "  />
                    <label htmlFor="email" className="text-center justify-center flex items-center absolute text-[#8c8c8e] bg-[#20202a] h-[50px] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:">
                      <FaAt className="font-[500] "/>
                    </label>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div  className="artinput">
                    <textarea  name="message" id="message" className=" w-full text-[#fafafc] h-[170px] pl-[65px] bg-[#242430] py-[20px] pr-[15px] shadow-md mb-0 outline-none inputfocus " placeholder="Message"></textarea>
                
                    <label htmlFor="message" className="text-center justify-center flex pt-[20px] absolute text-[#8c8c8e] bg-[#20202a] h-[97%] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:">
                      <FaEnvelope className="font-[500] "/>
                    </label>
                  </div>
                  <div></div>
                </div>
              <div>
                <input type="submit" value="Send Message" className="text-[12px] text-[#20202a]  rounded-md  cursor-pointer leading-[1.5px] transition-[0.4s] ease-in-out h-[45px] py-0 px-[35px] bg-[#FFC107] font-[600]" />
              </div>
              </form>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
