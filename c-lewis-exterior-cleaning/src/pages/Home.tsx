import { HomeCarousel } from "../components/homepage/HomeCarousel";
import { AboutMe } from "../components/homepage/AboutMe";
import { Testimonials } from "@/components/homepage/Testimonials";
import { QuoteForm } from "@/components/homepage/QuoteForm";

export const Home = () => {
  return (
    <main>
      <HomeCarousel />
      <AboutMe />
      <Testimonials />
      <QuoteForm />
    </main>
  );
};
