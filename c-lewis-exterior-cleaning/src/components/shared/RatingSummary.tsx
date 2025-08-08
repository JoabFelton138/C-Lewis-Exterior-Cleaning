import { Star } from "lucide-react";
import googleLogo from '@/assets/images/logo.svg';

export const RatingSummary = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <h3 className="text-black title-style text-sm sm:text-sm md:text-lg lg:text-xl font-bold">  
                EXCELLENT
            </h3>
            <div className='flex gap-0 sm:gap-1'>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} 
                        className="w-4 h-4 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>
            <p className='text-black text-xs sm:text-sm'>
                Based on <span className="font-bold text-sm sm:text-lg">60+ reviews</span>
            </p>
            <img src={googleLogo} 
                alt="Google Logo" 
                className="w-30"
            />
        </div>
    );
}