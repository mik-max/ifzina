
import Banner from "@/components/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner first={<><h1>Worlds Biggest University</h1>
      <p>Making website is now one of the easiest thing in the world. You just need to learn HTML, CSS,<br/> Javascript and you are good to go. </p>
      <a href="" class="hero-btn">Visit us to know more</a></>}/>
    </section>
  );
}
