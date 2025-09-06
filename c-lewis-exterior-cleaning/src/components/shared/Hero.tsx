interface HeroProps {
    title: string;
    subtitle: string;
    image?: string;
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
    
    return (
        <section className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[750px]">            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-100">
                </div>
            )}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col gap-1 sm:gap-2 md:gap-4 items-center justify-center">
                <h2 className="text-[22px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-[88px] text-white title-style text-center">
                    {title.toUpperCase()}
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