import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import cena from '../../assets/images/john-cena.webp';
import ferguson from '../../assets/images/af.jpg';
import statham from '../../assets/images/js.jpg';
import { Review } from "../shared/Review";

interface Review {
    rating: number;
    comment: string;
    author: string;
    authorTitle: string;
    url: string;
    image: string;
}

export const ReviewCarousel = () => {

    const reviews: Review[] = [
        {
            rating: 5, 
            comment: `Chad transformed our property with his attention to detail.
            The results were beyond our expectations!`,
            author: 'John Cena', 
            authorTitle: '17 Time WWE Champion', 
            url:'https://www.google.com',
            image: cena
        },
        {
            rating: 5, 
            comment: `Chad transformed our property with his attention to detail.
            The results were beyond our expectations!`,
            author: 'Alex Ferguson', 
            authorTitle: 'Former MUFC Manager', 
            url:'https://www.google.com',
            image: ferguson
        },
        {
            rating: 5, 
            comment: `Chad's expertise brought our vision to life in ways we never imagined. His craftsmanship and dedication made all the difference—our space feels brand new!`,
            author: 'Jason Statham', 
            authorTitle: 'Generic Movie Tough Guy', 
            url:'https://www.google.com',
            image: statham
        }
    ]

    return (
        <Carousel
            opts={{ loop: true, dragFree: true }}
            plugins={[Autoplay({ delay: 6000 })]}
            className="w-full max-w-[345px] min-[900px]:max-w-[750px] min-[1280px]:max-w-[1200px] mx-auto overflow-hidden"
        >
            <CarouselContent className="">
                {reviews.map((review) => (
                    <CarouselItem className="basis-auto pl-2">
                       <Review
                        rating={review.rating}
                        comment={review.comment}
                        author={review.author}
                        authorTitle={review.authorTitle}
                        url={review.url}
                        image={review.image}
                       />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};