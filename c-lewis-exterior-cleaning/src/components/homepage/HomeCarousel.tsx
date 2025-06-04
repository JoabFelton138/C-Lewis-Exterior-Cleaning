import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import van5 from "../../assets/images/carousel/van5-min.jpg";
import cc from "../../assets/images/carousel/cc-min.jpg";
import pw3 from "../../assets/images/carousel/pw3-min.jpg";
import gc3 from "../../assets/images/carousel/gc3.jpg";
import { Button } from "../ui/button";
import { useState } from "react";

export const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: van5,
      alt: "Van",
      title: "EXPERT EXTERIOR CLEANING",
      subtitle: "COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE",
    },
    {
      src: cc,
      alt: "Conservatory Cleaning",
      title: "LET ME LIGHT UP YOUR HOME",
      subtitle: "CONSERVATORY & SOLAR PANEL CLEANING",
    },
    {
      src: pw3,
      alt: "Pressue Washing",
      title: "LEAVE THE PRESSURE TO ME",
      subtitle: "PRESSURE WASHING SERVICES",
    },
    {
      src: gc3,
      alt: "Gutter Cleaning",
      title: "CLEAN GUTTERS, CLEAN MIND",
      subtitle: "GUTTERS & FASCIA CLEANING",
    },
  ];

  return (
    <div className="w-screen overflow-hidden">
      <Carousel
        opts={{ loop: true, dragFree: true }}
        plugins={[Autoplay({ delay: 6000 }), Fade()]}
        setApi={(api: CarouselApi) => {
          api?.on("select", () => setActiveSlide(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-[800px]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-screen h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                  <h2
                    className={`text-6xl md:text-3xl lg:text-8xl font-bold text-white text-center animate-slide-down ${activeSlide === index ? "active" : ""}`}
                  >
                    {slide.title}
                  </h2>
                  <h4
                    className={`text-2xl md:text-2xl text-white text-center ${activeSlide === index ? "animate-slide-left active" : ""}`}
                  >
                    {slide.subtitle}
                  </h4>
                  <Button
                    className={`hover:scale-105 ${activeSlide === index ? "animate-slide-up active" : ""}`}
                    variant="outline"
                    size="lg"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
    </div>
  );
};
