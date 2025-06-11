import {Button} from "./ui/button";
import {HeroCards} from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#c9aa3a]  to-[#e4d6a6] text-transparent bg-clip-text">
              Jon David Decrative Painting
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Renowned painting company in Prescott, AZ. Jon David's expertise in
          decrative painting transforms spaces, servering client in Prescott and
          surrounding areas.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button variant="ribbon" size="ribbon">
            Get Started
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
