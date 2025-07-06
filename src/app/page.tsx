import {HeroParallaxDemo} from "@/components/Hero";
import {Testimonials} from "@/components/Testimonials";
import {Pricing} from "@/components/Pricing";
import {FAQ} from "@/components/FAQ";
import {CalEmbed} from "@/components/Cal";
export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CalEmbed calLink="madbadgerstudios/30min" />
    </>
  );
}
