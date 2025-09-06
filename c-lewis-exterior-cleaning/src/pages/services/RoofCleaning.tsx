import { ServiceLayout } from "@/components/services/ServiceLayout";
import { Hero } from "@/components/shared/Hero";
import roofHeroDesktop from '@/assets/images/roof-cleaning/rc4.webp';
import roofHeroMobile from '@/assets/images/roof-cleaning/rc4-mobile.webp';

import roofCleaning from '@/assets/images/roof-cleaning/rc3.jpg';
import { CtaBanner } from "@/components/services/CtaBanner";
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { ServiceArea } from "@/components/services/ServiceArea";

export const RoofCleaning = () => {
    const description1 = `In the UK, where the weather is often unpredictable, roof maintenance is crucial to ensure the longevity and integrity of your home. A dirty moss ridden roof can lead to a range of issues, including water damage, mould growth, and even structural damage. That's why roof cleaning is an essential service that can help protect your property.`;
    const description2 = ` We offer a comprehensive roof cleaning service that uses state-of-the-art equipment and eco-friendly solutions to remove dirt, moss, and algae from your roof. Our expert technicians will assess your roof's condition and develop a tailored cleaning plan to suit your specific needs. We use gentle yet effective cleaning methods to remove dirt and debris without damaging your roof's surface or surrounding vegetation.`   
    return (
        <main>
            <Hero 
                title="roof cleaning" 
                subtitle="Protect Your Home, One Shingle at a Time." 
                desktopImage={roofHeroDesktop} 
                mobileImage={roofHeroMobile} 
            />
            <ServiceLayout 
                subtitle1="Why Should I Clean My Roof?"
                description1={description1}
                subtitle2="What's Included In The Service?"
                description2={description2}
                image={roofCleaning}
            />
            <BeforeAfterGrid service="roof" />
            <CtaBanner />
            <ServiceArea service="roofs" />
        </main>
    );
}