import {Header} from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import {TrustedBy} from "@/components/sections/TrustedBy";
import {AboutUs} from "@/components/sections/AboutUs";
import {PopularFurniture} from "@/components/sections/PopularFurniture";

export default function Home() {
  return (
      <>
          <Header />
          <Hero />
          <TrustedBy/>
          <AboutUs/>
          <PopularFurniture/>
      </>
  );
}
