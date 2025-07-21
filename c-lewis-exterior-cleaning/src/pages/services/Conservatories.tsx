import { Hero } from '@/components/shared/Hero';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import conservatoryHero from '../../assets/images/stock/roof-clean-sun.jpeg';
import solarPanel from '../../assets/images/cc/cc4.jpg';
import { BeforeAfterGrid } from '@/components/services/BeforeAfterGrid';
import { CtaBanner } from '@/components/services/CtaBanner';
import { ServiceArea } from '@/components/services/ServiceArea';

export const Conservatories = () => {
    const description1 = `Cleaning conservatory roofs and solar panels often requires a delicate touch. I use soft brushes combined with a soapy cleaning agent to ensure I’m giving a gentle but effective thorough
            clean. Having a clean conservatory roof free of any moss or growth can reduce costly repairs to the exterior and interior of your conservatory, including damp and structural damage.
            Keeping solar panels clean and free from any debris ensures that they can run sufficiently and most effectively.`;
    const description2 = `Then don't settle for anything less! If you're in need of a quality conservatory and solar panel cleaning service
            go ahead and get your free quote today!`;
    return (
        <main>
            <Hero title="Conservatories & Solar Panels" 
                    subtitle="Gentle Cleaning. Lasting Clarity." 
                    image={conservatoryHero} 
            />
            <ServiceLayout 
                subtitle1="What's Included In The Service?"
                description1={description1}
                subtitle2="Sound Good?"
                description2={description2}
                image={solarPanel}
            />
            <BeforeAfterGrid service="conservatories" />
            <CtaBanner />
            <ServiceArea service="conservatories" />
        </main>
    );
};