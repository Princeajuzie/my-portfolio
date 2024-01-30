import Image from "next/image";

export function ProfileCard() {
  return (
    <section className="bg-[#20202a] w-[290px] min-w-[290px] shadow-md  relative z-40" style={{height: "calc(100vh - 30px)"}}>

      <div>
        <div>

        <Image height={200} width={200} src="/resources/images/avatar.jpeg" alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
        </div>
      </div>
      <div></div>
      
    </section>
  )
}


export default ProfileCard;