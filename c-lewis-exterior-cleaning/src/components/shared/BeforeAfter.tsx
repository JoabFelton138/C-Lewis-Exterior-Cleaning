interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt: string;
    afterAlt: string;
}

export const BeforeAfter = ({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterProps) => {
    return (
        <div className="flex flex-row gap-1 sm:gap-2 justify-center">
            <figure className="relative">
                <img 
                    src={beforeImage} 
                    className="w-[225px] h-[225px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg" 
                    alt={beforeAlt} 
                    loading="lazy"
                />
                <figcaption className="absolute top-1 sm:top-2 md:top-4 left-1 sm:left-2 md:left-4 bg-black/70 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                    BEFORE
                </figcaption>
            </figure>
            <figure className="relative">
                <img 
                    src={afterImage} 
                    className="w-[225px] h-[225px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg" 
                    alt={afterAlt} 
                    loading="lazy"
                />
                <figcaption className="absolute top-1 sm:top-2 md:top-4 left-1 sm:left-2 md:left-4 bg-sky-500 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                    AFTER
                </figcaption>
            </figure>
        </div>
    )
}