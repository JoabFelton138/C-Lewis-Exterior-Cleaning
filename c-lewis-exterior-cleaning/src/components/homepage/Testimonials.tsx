import van from '../../assets/images/carousel/van.png'
import { Review } from '../shared/Review';
import { Button } from '@/components/ui/button';
import cena from '../../assets/images/john-cena.webp';
import ferguson from '../../assets/images/af.jpg';
import statham from '../../assets/images/js.jpg';
import { Star } from 'lucide-react';
import googleLogo from '../../assets/images/logo.svg';
import roof from '../../assets/images/roof.webp';

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
        <section className='w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden relative'>
        <div className='absolute inset-0 z-0'>
            <img 
                src={roof} 
                alt="Roof background" 
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/40'></div>
        </div>
        <div className='container mx-auto px-4 relative z-10'>
            <div className='flex flex-row items-center gap-12'>
                <div className='flex flex-col gap-4'>
                    <h3 className="text-white text-3xl font-bold">
                        EXCELLENT
                    </h3>
                    <div className='flex gap-2'>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} 
                                className="w-8 h-8 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                    <p className='text-white text-lg'>
                        Based on <span className="font-bold">60+ reviews</span>
                    </p>
                    <img src={googleLogo} 
                         alt="Google Logo" 
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {reviews.map((review, index) => (
                        <Review 
                            key={index}
                            rating={review.rating}
                            comment={review.comment}
                            author={review.author}
                            authorTitle={review.authorTitle}
                            url={review.url}
                            image={review.image}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <Button size='lg' 
                        className="bg-black hover:bg-primary/90 hover:scale-105 text-lg px-8">
                    TESTIMONIALS
                </Button>
            </div>
        </div>
       </section>
    );
};