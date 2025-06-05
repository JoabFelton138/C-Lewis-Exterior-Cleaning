import van from '../../assets/images/carousel/van.png'
import { Review } from '../shared/Review';
import { Button } from '@/components/ui/button';
import cena from '../../assets/images/john-cena.webp';
import ferguson from '../../assets/images/af.jpg';
import statham from '../../assets/images/js.jpg';

interface Review {
    rating: number;
    comment: string;
    author: string;
    authorTitle: string;
    url: string;
    image: string;
}

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
        authorTitle: 'Former Manchester United Manager', 
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


export const Testimonials = () => {
    return (
       <section className='w-full relative min-h-[800px] py-24 overflow-hidden'>
        <div className='absolute inset-0 object-cover w-full h-full z-0'>
            <div className='absolute inset-0 bg-black/40 z-10'></div>
            <img className='w-full h-full object-cover' src={van} alt='van'/>
        </div>
        <div className='container relative mx-auto max-w-sm md:max-w-6xl px-4 h-full flex flex-col justify-center'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                    What My Clients Say
                </h2>
                <div className='w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto'/>
            </div>
            <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                {
                    reviews.map((review, index) => (
                        <Review 
                            key={index}
                            rating={review.rating}
                            comment={review.comment}
                            author={review.author}
                            authorTitle={review.authorTitle}
                            url={review.url}
                            image={review.image}
                        />
                    ))
                }
            </div>
            <div className="flex flex-col sm:flex-row justify-center max-w-fit mx-auto">
                <Button size='lg' 
                        className="bg-black hover:bg-primary/90 hover:scale-105 text-lg px-8">
                    TESTIMONIALS
                </Button>
            </div>
        </div>
       </section>
    );
}; 