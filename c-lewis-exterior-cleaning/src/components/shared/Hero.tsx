interface HeroProps {
    title: string;
    subtitle: string;
    image?: string;
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
    
    return (
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
            {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-100">
                </div>
            )}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[88px] text-white title-style text-center">
                    {title.toUpperCase()}
                </h2>
                <h4
                    className="text-lg sm:text-xl md:text-2xl text-white title-style text-center"
                  >
                    {subtitle}
                  </h4>
            </div>
        </section>
    );
}