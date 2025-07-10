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
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { carouselSlides } from "@/data/carousel-slides";
import { useNavigate } from "react-router-dom";
import { navigatToAbout } from "../utils/navigation";

export const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = carouselSlides;
  const navigate = useNavigate();

  const handleButtonClick = (subtitle: string) => {
    switch (subtitle) {
      case "COVERING STAFFORDSHIRE, SHROPSHIRE, WEST MIDLANDS & MORE":
        return navigatToAbout();
      case "PRESSURE WASHING SERVICES":
        return navigate('/driveways-and-patios');
      case "ROOF CLEANING & MOSS REMOVAL":
          return navigate('/roof-cleaning');
      case "GUTTERS & FASCIA CLEANING":
          return navigate('/gutter-cleaning');
      case "WINDOW CLEANING & RESTORATION":
          return navigate('/window-cleaning');
      case "CONSERVATORY & SOLAR PANEL CLEANING":
          return navigate('/conservatories-and-solar-panels');
      default:
        return navigate('/');
    }
  };

  useEffect(() => {

    const slideTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => {
      clearTimeout(slideTimer);
    }
  }, [activeSlide])

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
            <CarouselItem key={index} className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-screen h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h2
                    className={`text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[88px] title-style text-white text-center animate-slide-down drop-shadow-2xl ${activeSlide === index && !isTransitioning ? "active" : ""}`}
                  >
                    {slide.title}
                  </h2>
                  <h4
                    className={`text-[16px] sm:text-xl md:text-2xl title-style text-white/90 text-center animate-slide-left drop-shadow-lg ${activeSlide === index && !isTransitioning ? "active" : ""}`}
                  >
                    {slide.subtitle}
                  </h4>
                  <Button
                    className={`sm:hover:scale-105 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 scale-75 sm:scale-100 ${activeSlide === index && !isTransitioning ? "animate-slide-up active" : ""}`}
                    variant="outline"
                    size="lg"
                    onClick={() => handleButtonClick(slide.subtitle)}
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-8 pointer-events-none hidden lg:flex">
                <CarouselPrevious className="pointer-events-auto ml-2" variant="ghost" />
                <CarouselNext className="pointer-events-auto mr-2" variant="ghost" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
