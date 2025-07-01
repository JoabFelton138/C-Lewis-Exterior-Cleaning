import { Hero } from "@/components/shared/Hero";

import { useEffect } from "react";
import { BeforeAfterTestimonial } from "@/components/testimonials-page/BeforeAfterTestimonial";
import roofCleanBefore2 from '@/assets/images/before-after/roof-before-2.jpg';
import roofCleanAfter2 from '@/assets/images/before-after/roof-after-2.jpg';
import roofCleanBefore from '@/assets/images/before-after/before1.jpg';
import roofCleanAfter from '@/assets/images/before-after/after1.jpg';

export const Testimonials = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero title="testimonials" subtitle="Real Stories. Real Results." />
            
            <section className="pt-20 px-4">            
                <BeforeAfterTestimonial 
                    layout="left-to-right"
                    beforeImage={roofCleanBefore2}
                    afterImage={roofCleanAfter2}
                    beforeAlt="Roof before cleaning"
                    afterAlt="Roof after cleaning"
                    text={"Amazing transformation of roof and exterior area of property. Absolutely delighted with the results- thank you!!! Chad worked diligently, was punctual, polite & trustworthy being left alone with the property whilst the work was completed. Totally recommend his services & you too will be delighted with the result."} 
                    author={"HELEN ROBERTS"}
                />
            </section>
            
            <section className="py-20 px-4">
                <BeforeAfterTestimonial 
                    layout="right-to-left"
                    beforeImage={roofCleanBefore}
                    afterImage={roofCleanAfter}
                    beforeAlt="Roof before cleaning"
                    afterAlt="Roof after cleaning"
                    text={"Amazing transformation of roof and exterior area of property. Absolutely delighted with the results- thank you!!! Chad worked diligently, was punctual, polite & trustworthy being left alone with the property whilst the work was completed. Totally recommend his services & you too will be delighted with the result."} 
                    author={"HELEN ROBERTS"}
                />
            </section>
        </main>
    );
}