import { Hero } from "@/components/shared/Hero";

import { useEffect } from "react";
import { BeforeAfterTestimonial } from "@/components/testimonials-page/BeforeAfterTestimonial";
import roofCleanBefore2 from '@/assets/images/before-after/roof-cleaning/roof-before-2.jpg';
import roofCleanAfter2 from '@/assets/images/before-after/roof-cleaning/roof-after-2.jpg';
import roofCleanBefore from '@/assets/images/before-after/before1.jpg';
import roofCleanAfter from '@/assets/images/before-after/after1.jpg';
import { CustomerQuote } from "@/components/testimonials-page/CustomerQuote";
import testimonials from '@/assets/images/roof.jpg';

export const Testimonials = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero title="testimonials" image={testimonials} subtitle="Real Stories. Real Results." />
            <CustomerQuote
                quote={`"Superb job carried out by Chad. Reasonably priced, reliable and courteous. we would definitely recommend him."`}
                author={"- MORAG BAYLEY"}
            />
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
            <section className="pt-10 px-4">
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
            <section className="pt-10 pb-20 px-4">
                <BeforeAfterTestimonial 
                    layout="left-to-right"
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