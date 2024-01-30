import Image from "next/image";

export function ProfileCard() {
  return (
    <section
      className="bg-[#20202a] w-[290px] min-w-[290px] shadow-md  relative z-40"
      style={{ height: "calc(100vh - 30px)" }}
    >
      <div className="px-[15px]">
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
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
