import Company from "@/components/Company/Company";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices/OurServices";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Company/>
      <OurServices/>
    </div>
  );
}
