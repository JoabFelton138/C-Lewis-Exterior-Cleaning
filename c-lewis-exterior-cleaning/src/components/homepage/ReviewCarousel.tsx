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
  showNavigation?: boolean;
}

export function ReviewCarousel({cardSize = "small", showNavigation = false}: ReviewCarouselProps) {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const getCarouselItemClass = () => {
    if (cardSize === "large") {
      return "basis-full sm:basis-1/2 lg:basis-1/3 px-2 pt-2"
    }
    return "basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3 px-1 pt-2"
  }

  const getCarouselItems = () => {
    if (cardSize === "small") {
      return reviews.slice(0, 9);
    }
    return reviews;
  }


  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="-ml-2">
        {getCarouselItems().map((review, index) => (
          <CarouselItem key={index} className={getCarouselItemClass()}>
            <Review {...review} isLarge={cardSize === "large"} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
