import van from '../../assets/images/carousel/van.png'
import { Review } from '../shared/Review';
import { Button } from '@/components/ui/button';

interface Review {
    rating: number;
    comment: string;
    author: string;
    authorTitle: string;
    url: string;
}

const reviews: Review[] = [
    {
        rating: 5, 
        comment: `Chad transformed our property with his attention to detail.
        The results were beyond our expectations!`,
        author: 'John Cena', 
        authorTitle: '17 Time WWE Champion', 
        url:'https://www.google.com'
    },
    {
        rating: 5, 
        comment: `Chad transformed our property with his attention to detail.
        The results were beyond our expectations!`,
        author: 'Alex Ferguson', 
        authorTitle: 'Former Manchester United Manager', 
        url:'https://www.google.com'
    },
    {
        rating: 5, 
        comment: `Chad’s expertise brought our vision to life in ways we never imagined. His craftsmanship and dedication made all the difference—our space feels brand new!`,
        author: 'Jason Statham', 
        authorTitle: 'Generic Movie Tough Guy', 
        url:'https://www.google.com'
    }
]


export const Testimonials = () => {
    return (
       <section className='w-full relative h-[800px] overflow-hidden'>
        <div className='absolute inset-0 object-cover w-full h-full z-0'>
            <div className='absolute inset-0 bg-black/20 z-10'></div>
            <img className='w-full h-full object-cover' src={van} alt='van'/>
        </div>
        <div className='container relative mx-auto px-4 h-full flex flex-col justify-center'>
            <div className='text-center mb-16'>
                <h2 className='text-6xl font-bold text-white mb-4'>
                    What My Clients Say
                </h2>
                <div className='w-24 h-1 bg-white mx-auto'/>
            </div>
            <div className= 'grid grid-cols-1 md[:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                {
                    reviews.map((review, index) => (
                        <Review 
                            key={index}
                            rating={review.rating}
                            comment={review.comment}
                            author={review.author}
                            authorTitle={review.authorTitle}
                            url={review.url}
                        />
                    ))
                }
            </div>
            <div className="flex flex-col sm:flex-row justify-center">
                <Button size='lg' 
                        className="bg-black hover:bg-primary/90 hover:scale-105 text-lg px-8">
                    TESTIMONIALS
                </Button>
            </div>
        </div>
       </section>
    );
}; 