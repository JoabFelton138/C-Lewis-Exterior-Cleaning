import { Hero } from "@/components/shared/Hero";
import windowHero from '../../assets/images/stock/window-clean.webp';
import windowHeroMobile from '../../assets/images/stock/window-clean-mobile.webp';
import { ServiceLayout } from "@/components/services/ServiceLayout";
import windowCleaning from '../../assets/images/servicecarousel2/twctwc.webp';
import { CtaBanner } from "@/components/services/CtaBanner";
import { ServiceArea } from "@/components/services/ServiceArea";

export default function WindowCleaning() {
    const description1 = `Keeping your windows and frames clean is important because it enhances the overall appearance of your home or space, allowing more natural light to enter and creating a brighter environment. Regular cleaning also prevents the buildup of dirt, dust, and grime that can cause damage or deterioration over time. Additionally, clean windows and frames improve visibility and can help identify any potential issues, such as cracks or leaks, early on. Overall, maintaining clean windows and frames contributes to a healthier, more inviting, and well-maintained environment.`;
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
                subtitle1="Maintaining Your Windows?"
                description1={description1}
                subtitle2="What's Included In The Service?"
                description2={description2}
                image={windowCleaning}
            />
            <CtaBanner />
            <ServiceArea service="windows" />
        </main>
    );
}