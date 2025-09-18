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
      case "Based in Staffordshire, serving the West Midlands & beyond":
        return navigatToAbout();
      case "Driveways & Patio's. Decking, siding & more":
        return navigate('/pressure-washing');
      case "With optional moss prevention treatments available":
          return navigate('/roof-cleaning');
      case "Also offering soffit & Facia Cleaning":
          return navigate('/gutter-cleaning');
      case "Pure water cleaning technology":
          return navigate('/window-cleaning');
      case "Professional Cleaning to Light up your home":
          return navigate('/conservatory-and-solar-panel-cleaning');
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
            <CarouselItem key={index} className="relative w-full h-[85vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">
             <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobileSrc} />
                <source media="(min-width: 768px)" srcSet={slide.desktopSrc} />
                <img
                  src={slide.desktopSrc}
                  alt={slide.alt}
                  className="w-screen h-full object-cover"
                 />
             </picture>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap title-style text-white text-center animate-slide-down drop-shadow-2xl ${activeSlide === index && !isTransitioning ? "active" : ""}`}
                  >
                    {slide.title}
                  </h2>
                  <h4
                    className={`text-sm sm:text-lg md:text-xl lg:text-2xl title-style text-white/90 text-center animate-slide-left drop-shadow-lg line-clamp-2 sm:line-clamp-none max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] ${activeSlide === index && !isTransitioning ? "active" : ""}`}
                  >
                    {slide.subtitle}
                  </h4>
                  <Button
                    className={`hover:scale-105 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm md:text-base px-4 py-4 mt-2 sm:mt-0 ${activeSlide === index && !isTransitioning ? "animate-slide-up active" : ""}`}
                    variant="outline"
                    size="sm"
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
