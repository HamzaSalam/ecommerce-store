import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#d9c4bd] to-[#f0e8e6] py-48 md:py-32 h-[600px] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ">
        <div className="max-w-2xl flex-1 flex flex-col items-center">
          <h1 className="text-2xl md:text-6xl font-light mb-4 leading-4 tracking-normal text-center">
            More Than Fashion
          </h1>
          <p className="text-lg md:text-5xl text-muted-foreground font-semibold mb-8 text-center">
            It's a Lifestyle !
          </p>
          {/* <Button variant="outline">Shop Now</Button> */}
          <span className="flex items-center justify-center">
            Efforts look for every moment
          </span>

          <Button className="bg-black text-white mt-4 w-fit">Explore</Button>
        </div>

        <div className="flex flex-1">
          <img
            src="/women-suite.jpg"
            alt="Fashion"
            className="absolute h-full w-[500px] bottom-0 right-72  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
