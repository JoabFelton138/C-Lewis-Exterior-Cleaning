import { Hero } from "@/components/shared/Hero";
import testimonials from '@/assets/images/roof.jpg';
import {reviews} from '../data/testimonial-section-reviews';
import { Review } from "@/components/shared/Review";
import { useState } from "react";
import { ResponsiveButton } from "@/components/shared/ResponsiveButton";

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
                <div className="flex mt-8 justify-center gap-4">
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