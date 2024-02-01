import Image from "next/image"
import User2 from "../../public/resources/images/face.png"
export function Herosection() {
  return (
    // <div className="overflow-hidden py-0 px-[30px] relative" >
    //   <div className=" ">
    //     <div className="col-span-12 lg:col-span-12">
    //       <div style={{ backgroundImage: `url(/resources/images/bg.jpg)` }} className="bg-cover bg-center relative">
    //         <div className="absolute z-0 top-[-30px] w-90% h-30 ml-5 bg-[rgba(30,30,40,0.88)]"></div>

    //         <div className="relative flex p-60 w-full bg-gradient-to-r from-[rgba(45,45,58,0.9)] via-[rgba(45,45,58,0.7)] to-[rgba(43,43,53,0.7)]">
    //           <div className="flex">
    //           <h1 className="mb-15">Discover my Amazing <br />Art Space!</h1>
    //            <span>i build mobile and andriod application.</span>
    //           </div>
    //           <div>
    //             <Image src={User2} height={200} width={200} alt="prince ajuzie" className="w-48 absolute right-8 bottom-0"/>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="h-screen w-full relative">

    <div className="container mx-auto">
  <div className="row p-60-0 p-lg-30-0 p-md-15-0">
    <div className="lg:w-full w-screen">
      <div className=" relative transition duration-550 ease-in-out bg-cover bg-center shadow-md z-50 w-full"  style={{ backgroundImage: `url(/resources/images/bg.jpg)` }}>
        <div className="art-banner-back"></div>
        <div className="art-banner-dec"></div>
        <div className="art-banner-overlay relative flex gap-11 p-16 w-full bg-gradient-to-r from-[rgba(45,45,58,0.9)] via-[rgba(45,45,58,0.7)] to-[rgba(43,43,53,0.7)]">
          <div className="art-banner-title w-full self-center">
            <h1 className="mb-15 text-white">Discover my Amazing <br />Art Space!</h1>
            <div className="art-lg-text art-code mb-25">&lt;<i>code</i>&gt; I build <span className="txt-rotate" data-period="2000" data-rotate="[ &quot;web interfaces.&quot;, &quot;ios and android applications.&quot;, &quot;design mocups.&quot;, &quot;automation tools.&quot; ]"><span className="wrap"></span></span>&lt;/<i>code</i>&gt;</div>
            <div className="art-buttons-frame">
              <a href="#." className="art-btn art-btn-md"><span>Explore now</span></a>
              <a href="#." className="art-link art-white-link art-w-chevron">Hire me</a>
            </div>
          </div>
          <Image src={User2} height={200} width={200} alt="prince ajuzie"  className="art-banner-photo w-48 absolute right-8 bottom-0"/>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  );
}

export default Herosection;
