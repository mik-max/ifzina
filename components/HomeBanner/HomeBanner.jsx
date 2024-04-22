import Image from "next/image";

export default function Banner ({first})  {
   
   return(
      <div className="banner px-4 lg:px-24  bg-teal-200 flex items-center">
         <div className="text-box">{first}</div>
         
         {/* <Image src="/images/island.jpg" className=" " width={300} height={300} alt="Banner" /> */}
      </div>
   )
}