import { ServiceLayout } from "@/components/services/ServiceLayout";
import { Hero } from "@/components/shared/Hero";
import roofHeroDesktop from '@/assets/images/roof-cleaning/rc4.webp';
import roofHeroMobile from '@/assets/images/roof-cleaning/roof-clean-mobile.webp';

import roofCleaning from '@/assets/images/roof-cleaning/rc3.jpg';
import { CtaBanner } from "@/components/services/CtaBanner";
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { ServiceArea } from "@/components/services/ServiceArea";

export default function RoofCleaning() {
    const description1 = `With years of experience in the industry, we take pride in delivering top-quality results safely and efficiently.
                          Fully insured and equipped with specialist tools, our team ensures your roof is thoroughly cleaned and well-maintained, 
                          enhancing your property's curb appeal and longevity. We also offer treatment to prevent any growth within the next 
                          three to four years!`;
    const description2 = `We offer a comprehensive roof cleaning service that uses state-of-the-art
                          equipment and eco-friendly solutions to remove dirt, moss, and algae from your roof. 
                          Our expert technicians will assess your roof's condition and develop a tailored cleaning plan 
                          to suit your specific needs. We use gentle yet effective cleaning methods to remove dirt 
                          and debris without damaging your roof's surface.`   
    return (
        <main>
            <Hero 
                title="roof cleaning" 
                subtitle="With optional moss prevention treatments available" 
                desktopImage={roofHeroDesktop} 
                mobileImage={roofHeroMobile} 
            />
            <ServiceLayout 
                subtitle1="Don't Let Growth Deteriorate Your Roof"
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