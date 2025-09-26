import { Hero } from "@/components/shared/Hero";
import testimonials from '@/assets/images/roof.jpg';
import googleLogo from '@/assets/images/logo.svg';
import { Star } from "lucide-react";
import { ReviewCarousel } from "@/components/homepage/ReviewCarousel";
import { useEffect } from "react";

export default function Testimonials() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <main>
            <Hero 
                title="testimonials" 
                desktopImage={testimonials} 
                subtitle="Real Stories. Real Results." 
            />
            <section className="py-12 sm:py-16 lg:py-24 px-12 md:px-14 lg:px-16 max-w-6xl mx-auto"> 
                <header className="pb-6 lg:pb-10 flex flex-col xl:flex-row justify-between">
                    <div className="max-w-2xl flex flex-col gap-4 mx-auto xl:mx-0 text-center xl:text-left">
                        <h2 className="text-gray-800 title-style text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            Find out What our Clients say
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            Since we began, we've helped transform countless properties. 
                            Here you’ll find firsthand experiences and feedback from our valued customers. 
                            Discover how we've helped others achieve their goals and see why they trust us. 
                            Your success story could be next!
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='flex flex-col items-center mt-8 xl:mt-0'>
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
                <ReviewCarousel cardSize='large'/>
            </section>
        </main>
    );
}