import { Bubbles, ShieldCheck, ThumbsUp, TreeDeciduous } from 'lucide-react';
import wc from '../../assets/images/servicecarousel2/twctwc.png'
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
        <section className="w-full pt-14 pb-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionTitle title="Why Choose Us" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex gap-3 space-y-5">
                                        <reason.icon className="w-8 h-8 text-primary"/>
                                        <h3 className="text-2xl font-bold">{reason.title}</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        {reason.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="relative order-1 lg:order-2 group">
                        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <img src={wc} alt="why choose us" className="object-cover w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}