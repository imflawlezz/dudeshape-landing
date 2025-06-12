import {Header} from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import {TrustedBy} from "@/components/sections/TrustedBy";
import {AboutUs} from "@/components/sections/AboutUs";
import {PopularFurniture} from "@/components/sections/PopularFurniture";
import {AllFurniture} from "@/components/sections/AllFurniture";
import {Customers} from "@/components/sections/Customers";
import {Newsletter} from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
      <>
          <Header />
          <Hero />
          <TrustedBy/>
          <AboutUs/>
          <PopularFurniture/>
          <AllFurniture/>
          <Customers/>
          <Newsletter/>
          <Footer/>
      </>
  );
}
