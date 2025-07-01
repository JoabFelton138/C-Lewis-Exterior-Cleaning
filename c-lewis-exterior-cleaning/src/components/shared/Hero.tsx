import portfolio from '../../assets/images/vans/van6.jpeg';
import testimonials from '../../assets/images/roof.jpg';

interface HeroProps {
    title: 'portfolio' | 'testimonials';
    subtitle: string;
}

const heroImages = {
    'testimonials': testimonials,
    'portfolio': portfolio,
}

export const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
            <img src={heroImages[title]} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white text-center">
                    {title.toUpperCase()}
                </h2>
                <h4
                    className="text-lg sm:text-xl md:text-2xl text-white text-center"
                  >
                    {subtitle}
                  </h4>
            </div>
        </section>
    );
}