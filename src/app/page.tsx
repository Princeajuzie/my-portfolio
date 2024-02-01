import { ProfileCard } from "@/components";
import Test from "@/components/tesxt";

export default function Home() {
  return (
    <div className=" p-[15px] bg-[#191923] h-screen w-[100vw] top-0 relative overflow-hidden">
      <div className="max-w-[1440px] ml-auto mr-auto bg-[#1e1e28] bg-cover w-full h-full relative overflow-hidden">
        <div className="relative flex flex-nowrap h-screen">
          <main
            style={{
              backgroundImage: `url(/resources/images/bg.jpg)`,
              backgroundPosition: " center",
              backgroundSize: "cover",
            }}
            className=" w-full overflow-hidden  "
          >
            <section className="relative bg-gradient-to-b from-[rgba(30,30,40,0.93)] via-[rgba(30,30,40,0.96)] to-[rgba(30,30,40,0.99)]  h-screen w-full">
              <div className="h-screen">
                <div className="grid grid-cols-2">
                  <div className="hidden">

                 <Test />
                  </div>
                  <div className="h-screen ">
                    <ProfileCard />
                  </div>
                  <div></div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
