import { Star } from 'lucide-react';
import googleLogo from '../../assets/images/logo.svg';
import roof from '../../assets/images/roof.jpg';
import { ReviewCarousel } from './ReviewCarousel';
import { useNavigate } from 'react-router-dom';
import { ResponsiveButton } from '../shared/ResponsiveButton';

export const Testimonials = () => {
    const navigate = useNavigate();
    const handleTestimonialsClick = () => {
        navigate('/testimonials');
    }

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
        <div className='max-w-5xl mx-auto px-4 relative z-10'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                <div className='flex flex-col gap-2 items-center'>
                    <h3 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold">  
                        EXCELLENT
                    </h3>
                    <div className='flex gap-1 sm:gap-2'>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} 
                                className="w-5 h-5 sm:w-7 sm:h-7 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                    <p className='text-white text-xs sm:text-md'>
                        Based on <span className="font-bold text-sm sm:text-lg">60+ reviews</span>
                    </p>
                    <img 
                        src={googleLogo} 
                        alt="Google Logo" 
                        loading="lazy"
                    />
                </div>
                <div className="max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-5xl">
                    <ReviewCarousel cardSize='small' isHomepage={true}/>
                </div>
            </div>
            <div className="flex justify-center mt-16">
               <ResponsiveButton text="TESTIMONIALS" onClick={handleTestimonialsClick} />
            </div>
        </div>
       </section>
    );
};