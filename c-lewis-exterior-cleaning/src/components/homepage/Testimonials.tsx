import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import googleLogo from '../../assets/images/logo.svg';
import roof from '../../assets/images/roof.jpg';
import { ReviewCarousel } from './ReviewCarousel';


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
            <div className='flex flex-col min-[750px]:flex-row items-center gap-12'>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold">  
                        EXCELLENT
                    </h3>
                    <div className='flex gap-1 sm:gap-2'>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} 
                                className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                    <p className='text-white text-sm sm:text-lg'>
                        Based on <span className="font-bold text-sm sm:text-lg">60+ reviews</span>
                    </p>
                    <img src={googleLogo} 
                         alt="Google Logo" 
                    />
                </div>
                <div>
                    <ReviewCarousel />
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