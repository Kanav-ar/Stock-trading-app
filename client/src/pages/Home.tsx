import OpenAccount from "../components/common/OpenAccount";
import Awards from "../components/home/Awards";
import Education from "../components/home/Education";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    </>
  );
}