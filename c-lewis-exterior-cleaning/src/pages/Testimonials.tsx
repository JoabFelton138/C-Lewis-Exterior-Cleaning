import { Hero } from "@/components/shared/Hero";
import testimonials from '@/assets/images/roof.jpg';
import {reviews} from '../data/testimonial-section-reviews';
import { Review } from "@/components/shared/Review";
import { useState } from "react";
import { ResponsiveButton } from "@/components/shared/ResponsiveButton";
import googleLogo from '@/assets/images/logo.svg';
import { Star } from "lucide-react";

export const Testimonials = () => {
    const [displayCount, setDisplayCount] = useState<number>(3);
    const reviewsToShow = reviews.slice(0, displayCount);
    const [isRemoving, setIsRemoving] = useState<boolean>(false);
    const [removingStartIndex, setRemovingStartIndex] = useState<number>(0)
    
    const loadMore = () => {
        setDisplayCount(prev => prev + 3)
    }

    const loadLess = () => {
        setIsRemoving(true);
        setRemovingStartIndex(displayCount - 3);
        
        setTimeout(() => {
            setDisplayCount(prev => prev - 3);
            setIsRemoving(false);
        }, 300);
    }
    
    return (
        <main>
            <Hero title="testimonials" image={testimonials} subtitle="Real Stories. Real Results." />
            <section className="py-12 sm:py-16 lg:py-24 px-12 md:px-14 lg:px-16 max-w-6xl mx-auto"> 
                <header className="pb-10 flex flex-col xl:flex-row justify-between">
                    <div className="max-w-2xl flex flex-col gap-4 mx-auto xl:mx-0 text-center xl:text-left">
                        <h2 className="text-gray-800 title-style text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            Find out What our Clients say
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            Since we began, we've helped transform over 100 properties and make homes shine with pride.
                            From driveways to facades, we're delighted that our work takes centre stage in communities across the West Midlands, helping homes look their absolute best every day.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    <div className='flex flex-col gap-2 items-center mt-6 xl:mt-0'>
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
                </div>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {reviewsToShow.map((review, index) => (
                        <div
                            key={review.author}
                            className={`${isRemoving && index >= removingStartIndex ? 'animate-slide-out-left' : 'animate-slide-up-fast'} active`}
                        >
                            <Review
                                {...review}
                                isLarge={true}
                            />
                        </div>
                    ))}
          
                </div>
                <div className="flex mt-10 justify-center gap-4">
                    {displayCount < reviews.length &&
                        <ResponsiveButton text={"LOAD MORE"} onClick={loadMore}/>
                    }
                    {displayCount > 3 && 
                        <ResponsiveButton text={"SEE LESS"} onClick={loadLess}/>
                    }
                </div>
            </section>
        </main>
    );
}