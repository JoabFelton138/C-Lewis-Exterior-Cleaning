interface HeroProps {
    title: string;
    subtitle: string;
    desktopImage?: string;
    mobileImage?: string;
}

export const Hero = ({ title, subtitle, desktopImage, mobileImage }: HeroProps) => {
    
    return (
        <section className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8.5] lg:aspect-[16/8.2] xl:aspect-[16/8]">            
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
            <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px] text-white title-style text-center">                    {title.toUpperCase()}
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