import { Hero } from "@/components/shared/Hero";
import windowHero from '../../assets/images/stock/window-clean.jpeg';
import { ServiceLayout } from "@/components/services/ServiceLayout";
import windowCleaning from '../../assets/images/servicecarousel2/twctwc.png';
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { CtaBanner } from "@/components/services/CtaBanner";
import { ServiceArea } from "@/components/services/ServiceArea";

export const WindowCleaning = () => {
    const description1 = `Neglected window tracks collect dust, insects, and debris that can damage glass and trigger allergies. Professional cleaning not only protects your windows' function and longevity — it also keeps your home healthier and allergen-free. 
                          Whilst there's always the option of doing it yourself, it's much safer to leave it to a fully-insured 
                          professional. We have ladder stand offs, extension poles and extensive training so you don't have to take the risk of falling!`;
    const description2 = `To begin, I'll loosen any dirt or build up on the windows, frames and surrounding plastics by giving them a thorough scrub.
                I'll then rinse the windows rigorously, leaving behind only the pure water solution which dry clears in a matter of minutes. 
                The results are always completely crystal clear!`   
    return (
        <main>
            <Hero title="Window Cleaning" subtitle="Your View, Our Passion." image={windowHero} />
            <ServiceLayout 
                subtitle1="Why Clean My Windows?"
                description1={description1}
                subtitle2="What's Included In The Service?"
                description2={description2}
                image={windowCleaning}
            />
            <BeforeAfterGrid service="windows" />
            <CtaBanner />
            <ServiceArea service="windows" />
        </main>
    );
}