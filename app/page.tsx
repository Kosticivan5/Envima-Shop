import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
import TitleSection from "@/components/global/TitleSection";
import Container from "@/components/global/Container";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container>
        <TitleSection text="featured products" />
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
      </Container>
    </>
  );
};
export default HomePage;
