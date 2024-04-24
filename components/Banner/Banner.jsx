import Image from "next/image";

export default function Banner ({first, bgImage})  {
   
   return(
      <div className={`${bgImage} sub-header bg-cover bg-center px-4 lg:px-24  bg-teal-200 flex items-center`}>
         <div className="w-full text-center">{first}</div>
         
         {/* <Image src="/images/island.jpg" className=" " width={300} height={300} alt="Banner" /> */}
      </div>
   )
}