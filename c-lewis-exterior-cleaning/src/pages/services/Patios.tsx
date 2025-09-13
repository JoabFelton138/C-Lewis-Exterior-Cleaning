import { Hero } from "@/components/shared/Hero";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import patios from "@/assets/images/pw/be-view.jpg";
import { CtaBanner } from "@/components/services/CtaBanner";
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { ServiceArea } from "@/components/services/ServiceArea";
import pressureWash from "@/assets/images/stock/pressure-wash.webp";
import pressureWashMobile from "@/assets/images/stock/pressure-wash-mobile.webp";

export const Patios = () => {
    const description1 = `Revitalize your property with our professional pressure washing service. We effectively remove dirt, grime, mold, and stains from your surfaces, restoring their original shine. 
                          Whether it's your driveway, siding, deck, or patio, our experienced team delivers thorough, eco-friendly cleaning that leaves your property looking fresh and well-maintained.`;
    const description2 = `If you're looking to restore your outdoor surfaces to their former glory, don't hesitate to get in touch. I offer free, no-obligation quotes and am happy to assess the best approach for your property.`
    return (
        <main>
            <Hero 
                title="pressure washing" 
                subtitle="Pristine Paths, Lasting Impressions." 
                desktopImage={pressureWash} 
                mobileImage={pressureWashMobile} 
            />
            <ServiceLayout 
                subtitle1="Our Pressure Washing & Re-Sanding Service."
                description1={description1}
                subtitle2="Sound good? Get in touch!"
                description2={description2}
                image={patios}
            />
            <BeforeAfterGrid service="patios" />
            <CtaBanner />
            <ServiceArea service={"patios"}/>
        </main>
    );
}