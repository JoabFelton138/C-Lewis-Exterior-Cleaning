import { Bubbles, ShieldCheck, ThumbsUp, TreeDeciduous } from 'lucide-react';
import wc from '../../assets/images/servicecarousel2/twctwc.png'

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
            description: "if you find any spotting or marking up to 24 hours after receiving a service, you can call myself to come back for a touch up, free of charge!"
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
        <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                    Why Choose Us? 
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex gap-3 space-y-4">
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