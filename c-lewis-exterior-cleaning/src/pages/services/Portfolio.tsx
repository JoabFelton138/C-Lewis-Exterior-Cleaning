import { Hero } from "@/components/shared/Hero";
import { MasonryGrid } from "@/components/shared/MasonryGrid";
import {useEffect} from 'react';

export const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <main>
            <Hero title="portfolio" subtitle="We Let the Results Do the Talking"/>
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="max-w-4xl gap-4 mx-auto text-center space-y-4 mb-16">
                        <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-800 title-style">
                            Check Out Our Work!
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            Every job we take on gets the same level of care, precision, and pride — whether it’s restoring a moss-covered roof or bringing a driveway back to life. 
                            We don’t just clean surfaces; we elevate homes. Below are some of our recent projects, each one a reflection of the standards we hold and the satisfaction 
                            we strive to deliver.
                        </p>
                </div>
                <MasonryGrid isPage={true} />
            </section>
        </main>
    )
}