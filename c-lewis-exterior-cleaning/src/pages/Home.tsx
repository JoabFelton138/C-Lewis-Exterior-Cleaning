import { HomeCarousel } from "../components/homepage/HomeCarousel";
import { AboutMe } from "../components/homepage/AboutMe";
import { Testimonials } from "@/components/homepage/Testimonials";
import { QuoteForm } from "@/components/homepage/QuoteForm";
import { WhyUs } from "@/components/homepage/WhyUs";
import { MasonryGrid } from "@/components/shared/MasonryGrid";

export const Home = () => {
  return (
    <main id="home-main">
      <HomeCarousel />
      <AboutMe />
      <MasonryGrid />
      <WhyUs />
      <Testimonials />
      <QuoteForm />
    </main>
  );
};
