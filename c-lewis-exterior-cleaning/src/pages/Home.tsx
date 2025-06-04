import { HomeCarousel } from "../components/homepage/HomeCarousel";
import { AboutMe } from "../components/homepage/AboutMe";
import { Testimonials } from "@/components/homepage/Testimonials";

export const Home = () => {
  return (
    <main>
      <HomeCarousel />
      <AboutMe />
      <Testimonials />
    </main>
  );
};
