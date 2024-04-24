
import Banner from "@/components/HomeBanner/HomeBanner";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner 
        first={
          <>
            <h1 className="font-semibold">Welcome to IFZINA</h1>
            <p>Your premier Engineering, Procurement, and Construction partner in Nigeria.</p>
            <a href="" class="hero-btn">Visit us to know more</a>
          </>
        }
      />
    </section>
  );
}
