import { Hero } from "@/components/shared/Hero";
import testimonials from '@/assets/images/roof.jpg';
import {reviews} from '../data/testimonial-section-reviews';
import { Review } from "@/components/shared/Review";

export const Testimonials = () => {
    
    return (
        <main>
            <Hero title="testimonials" image={testimonials} subtitle="Real Stories. Real Results." />
            <section className="py-12 sm:py-16 lg:py-24 px-12 md:px-14 lg:px-16 max-w-6xl mx-auto"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {reviews.map((review) => (
                        <Review
                            key={review.author}
                            rating={review.rating}
                            comment={review.comment}
                            author={review.author}
                            url={review.url}
                            isLarge={true}
                            image={review.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}