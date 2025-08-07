interface HeroProps {
    title: string;
    subtitle: string;
    image?: string;
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
    
    return (
        <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-100">
                </div>
            )}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[88px] text-white title-style text-center">
                    {title.toUpperCase()}
                </h2>
                <h4
                    className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white title-style text-center"
                  >
                    {subtitle}
                  </h4>
            </div>
        </section>
    );
}