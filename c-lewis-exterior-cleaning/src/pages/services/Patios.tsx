import { Hero } from "@/components/shared/Hero";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import patios from "@/assets/images/pw/pw.jpg";
import { CtaBanner } from "@/components/services/CtaBanner";
import { BeforeAfterGrid } from "@/components/services/BeforeAfterGrid";
import { ServiceArea } from "@/components/services/ServiceArea";

export const Patios = () => {
    const description1 = `I have great experience in cleaning many different types of surfaces including drive ways. I use top of the range pressure washing equipment, allowing me to adjust the pressure depending
                on the surface. In some cases, I also use an industrial strength surface cleaning agent called sodium hypochlorite. This allows me to get rid of any stubborn grime with ease, particularly
                bad cases of black spot, usually found on most stone surfaces. I also offer a re-sanding and re-sealing service.`;
    const description2 = `If you're looking to restore your outdoor surfaces to their former glory, don't hesitate to get in touch. I offer free, no-obligation quotes and am happy to assess the best approach for your property.`
    return (
        <main>
            <Hero title="driveways & patios" subtitle="Pristine Paths, Lasting Impressions." />
            <ServiceLayout 
                subtitle1="What's Included In The Service?"
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