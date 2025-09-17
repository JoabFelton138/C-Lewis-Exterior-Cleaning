import { Hero } from "@/components/shared/Hero";
import gutters from "@/assets/images/gc/gc3.webp";
import gutterDesktop from "../../assets/images/stock/gutter-clean1.webp";
import gutterMobile from "../../assets/images/stock/gutter-clean-mobile.webp";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { CtaBanner } from "@/components/services/CtaBanner";
import { ServiceArea } from "@/components/services/ServiceArea";

export const Gutters = () => {
    const description1 = `Our gutter clearing service involves removing blockages from your gutters and downpipes using our gutter vacuum system, ensuring proper water flow. Additionally, we can also clean the exterior of the gutters and downpipes to improve their appearance and refresh your exterior.`;
    const description2 = `Keeping your gutters cleared is extremely important and is often over looked. Keeping a eye on what's in the gutters can prevent water damage to the exterior and interior of your home,
                including your roof!`;
    
    return (
        <main>
            <Hero 
                title="Gutter Cleaning" 
                subtitle="Clean Gutters, Clean Home." 
                desktopImage={gutterDesktop} 
                mobileImage={gutterMobile} 
            />
            <ServiceLayout 
                subtitle1="What's Included In The Service?"
                description1={description1}
                subtitle2="Sound good? Get in touch!"
                description2={description2}
                image={gutters}
            />
            <BeforeAfterGrid service="gutters" />
            <CtaBanner />
            <ServiceArea service="gutters" />
        </main>
    );
}