interface HeroProps {
    title: string;
    subtitle: string;
    desktopImage?: string;
    mobileImage?: string;
}

export const Hero = ({ title, subtitle, desktopImage, mobileImage }: HeroProps) => {
    
    return (
        <section className="relative w-full h-[85vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">            
            <picture>
                <source media="(max-width: 767px)" srcSet={mobileImage} />
                <source media="(min-width: 768px)" srcSet={desktopImage} />
                <img 
                    src={desktopImage} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </picture>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col gap-1 sm:gap-2 md:gap-4 items-center justify-center">
            <h2 className="text-[5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[68px] whitespace-nowrap title-style text-white text-center">                    {title.toUpperCase()}
                </h2>
                <h4
                    className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-white title-style text-center"
                  >
                    {subtitle}
                  </h4>
            </div>
        </section>
    );
}