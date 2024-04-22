import Banner from "@/components/Banner";
import Image from "next/image";


export default function Home() {
  
  return (
    <section>
      <Banner first={<><h1 className="mb-[50px] text-xl md:text-[60px] font-extrabold">Worlds Biggest University</h1>
      <p className="text-md mb-[25px] ">Making website is now one of the easiest thing in the world. You just need to learn HTML, CSS,<br/> Javascript and you are good to go. </p>
      <a href="" className="hero-btn">know more</a></>}/>
    </section>
  );
}
