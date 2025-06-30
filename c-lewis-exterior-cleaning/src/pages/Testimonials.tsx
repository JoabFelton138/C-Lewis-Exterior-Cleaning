import { Hero } from "@/components/shared/Hero";
import roofCleanBefore from '@/assets/images/before-after/before1.jpg';
import roofCleanAfter from '@/assets/images/before-after/after1.jpg';
import { Quote } from "lucide-react";

export const Testimonials = () => {
    return (
        <main>
            <Hero title="testimonials" />
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Roof Cleaning & Moss Removal
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2 justify-center items-center mb-16">
                        <div className="relative">
                            <img 
                                src={roofCleanBefore} 
                                className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-lg" 
                                alt="Roof before cleaning" 
                            />
                            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                BEFORE
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src={roofCleanAfter} 
                                className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-lg" 
                                alt="Roof after cleaning" 
                            />
                            <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                AFTER
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-gray-50 p-10 rounded-lg mb-8">
                        <Quote className="w-10 h-10 text-sky-500 mx-auto mb-6" />
                        <p className="text-md md:text-lg text-center italic">
                            Amazing transformation of roof and exterior area of property. Absolutely delighted with the results- thank you!!! Chad worked diligently, was punctual, polite & trustworthy being left alone with the property whilst the work was completed. Totally recommend his services & you too will be delighted with the result.
                        </p>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-50 rotate-45 "></div>
                    </div>
                    <div className="text-lg font-bold">
                        - HELEN ROBERTS
                    </div>
                </div>
            </section>
        </main>
    );
}