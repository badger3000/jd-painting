import {HeroParallaxDemo} from "@/components/Hero";
import {Testimonials} from "@/components/Testimonials";
import {Pricing} from "@/components/Pricing";
import {FAQ} from "@/components/FAQ";
export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}
