import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { reviews } from "@/data/reviews"
import { Review } from "../shared/Review"
import Autoplay from "embla-carousel-autoplay"

export function ReviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="-ml-1">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="basis-full lg:basis-1/2 xl:basis-1/3 pl-1 pt-2">
            <Review
              rating={review.rating}
              comment={review.comment}
              author={review.author}
              date={review.date}
              url={review.url}
              image={review.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
