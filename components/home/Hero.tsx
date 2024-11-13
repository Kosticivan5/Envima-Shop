import Container from "../global/Container";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-hero-overlay bg-cover bg-no-repeat bg-center min-h-hero-h ">
      <Container className="pt-36 font-playfair text-7xl 2xl:text-[90px] flex flex-col items-start gap-4">
        {" "}
        <h2 className="  font-bold text-main">
          Experience new level of comfort <br /> and modern design
        </h2>
        <p className=" text-2xl font-light text-white mb-4">
          with <span className="border-b-2 border-main">Envima</span> furniture
        </p>
        <Button
          asChild
          className="button-main transition-all duration-300 inline-block"
        >
          <Link
            href={"/products"}
            className="font-workSans tracking-wider text-sm"
          >
            Our products
          </Link>
        </Button>
      </Container>
    </section>
  );
};
export default Hero;
