import { HomeCarousel } from "../components/homepage/HomeCarousel";
import { AboutMe } from "../components/homepage/AboutMe";
import { Testimonials } from "@/components/homepage/Testimonials";
import { QuoteForm } from "@/components/homepage/QuoteForm";
import { WhyUs } from "@/components/homepage/WhyUs";

export const Home = () => {
  return (
    <main>
      <HomeCarousel />
      <AboutMe />
      <Testimonials />
      <WhyUs />
      <QuoteForm />
    </main>
  );
};
