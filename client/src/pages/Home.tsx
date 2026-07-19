import OpenAccount from "../components/common/OpenAccount";
import Awards from "../components/home/Awards";
import Education from "../components/home/Education";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Stats from "../components/home/Stats/Index";
import Section from "../components/layout/Sections";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Awards />
      </Section>
      <Section>
        <Stats />
      </Section>
      <Section>
        <Pricing />
      </Section>
      <Section>
        <Education />
      </Section>
      <Section>
        <OpenAccount />
      </Section>
    </>
  );
}
