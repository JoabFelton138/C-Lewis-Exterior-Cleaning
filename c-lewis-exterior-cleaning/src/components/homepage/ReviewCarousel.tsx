import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { reviews } from "@/data/testimonial-section-reviews"
import { Review } from "../shared/Review"
import Autoplay from "embla-carousel-autoplay"

interface ReviewCarouselProps {
  cardSize?: "small" | "large";
  isHomepage?: boolean;
}

export function ReviewCarousel({cardSize = "small", isHomepage = false}: ReviewCarouselProps) {

  const plugin = React.useRef(
    Autoplay({ 
      delay: isHomepage ? 7000 : 5000, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true 
    })
  );

  const getCarouselItemClass = () => {
    if (cardSize === "large") {
      return "basis-full sm:basis-1/2 lg:basis-1/3 px-2 pt-2 flex justify-center"
    }
    return "basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3 px-1 pt-2 flex justify-center"
  }

  const getCarouselItems = () => {
    if (cardSize === "small") {
      return reviews.slice(0, 9);
    }
    return reviews;
  }

  const style = "bg-sky-500 hover:bg-sky-500 hover:scale-110 sm:hover:scale-120 relative -translate-y-0 -translate-x-0 top-0 [&_svg]:!size-4 sm:[&_svg]:!size-6 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12";


  return (
    <Carousel
      opts={{ 
        align: "start", 
        loop: true,  
        slidesToScroll: isHomepage ? 1 : 3,
        duration: 40,
        dragFree: false
      }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className={`${cardSize === "large" ? "-ml-2" : ""}`}>
        {getCarouselItems().map((review, index) => (
          <CarouselItem key={index} className={getCarouselItemClass()}>
            <Review {...review} isLarge={cardSize === "large"} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {cardSize === "large" && (
        <div className="flex justify-center gap-2 sm:gap-4 mt-6">
          <CarouselPrevious className={`${style} left-0`}/>
          <CarouselNext className={`${style} right-0`} />
        </div>
      )}
    </Carousel>
  );
}
