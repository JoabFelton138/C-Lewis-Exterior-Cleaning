import { Bubbles, ShieldCheck, ThumbsUp, TreeDeciduous } from 'lucide-react';
import wc from '../../assets/images/servicecarousel2/twctwc.webp'
import { SectionTitle } from "../shared/SectionTitle";

export const WhyUs = () => {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Fully Insured",
            description: "We are fully insured and certified, ensuring that every project is approached with the same level of care and professionalism."
        },
        {
            icon: Bubbles,
            title: "Mark Guarantee",
            description: "Check each service for guarantee!"
        },
        {
            icon: TreeDeciduous,
            title: "Eco-Friendly",
            description: "We use eco-friendly products and equipment, ensuring that every project is approached with the same level of care and professionalism."
        },
        {
            icon: ThumbsUp,
            title: "Highly Rated",
            description: "Our customers consistently rate us highly for our reliability, attention to detail, and outstanding results. Your satisfaction is our top priority.",
        }
    ]
    return (
        <section className="w-full pt-14 pb-20 bg-white overflow-hidden px-4">
            <div className="container mx-auto">
                <SectionTitle title="Why Choose Us" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 md:gap-6 mb-6 md:mb-0">
                        {reasons.map((reason, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex gap-3 items-start mb-2">
                                        <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-primary"/>
                                        <h3 className="text-lg md:text-xl lg:text-2xl text-gray-800 title-style">{reason.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base xl:text-lg ">
                                        {reason.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="relative order-1 lg:order-2 group">
                        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <img 
                                src={wc} 
                                alt="why choose us" 
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}