import { Hero } from "@/components/shared/Hero";
import windowHero from '../../assets/images/stock/window-clean.webp';
import windowHeroMobile from '../../assets/images/stock/window-clean-mobile.webp';
import { ServiceLayout } from "@/components/services/ServiceLayout";
import windowCleaning from '../../assets/images/servicecarousel2/twctwc.webp';
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { CtaBanner } from "@/components/services/CtaBanner";
import { ServiceArea } from "@/components/services/ServiceArea";

export const WindowCleaning = () => {
    const description1 = `Dirty window tracks collect dust, insects, and debris that can damage glass and trigger allergies. Professional cleaning protects your windows and keeps your home healthier — without the risk. With full insurance, specialist equipment, and training, we handle the hard-to-reach spots safely so you don’t have to!`;
    const description2 = `We specialize in professional window cleaning using advanced, filtered water technology to deliver streak-free, sparkling results. 
                          Our eco-friendly approach ensures your windows are spotless and safe for your family and the environment. Trust us to brighten your 
                          home or business with a thorough, reliable service that leaves your windows crystal clear.`   
    return (
        <main>
            <Hero 
                title="Window Cleaning" 
                subtitle="Your View, Our Passion." 
                desktopImage={windowHero} 
                mobileImage={windowHeroMobile} 
            />
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