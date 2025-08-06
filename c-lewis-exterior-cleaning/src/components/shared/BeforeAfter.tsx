interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt: string;
    afterAlt: string;
}

export const BeforeAfter = ({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <div className="relative">
                <img 
                    src={beforeImage} 
                    className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] aspect-square object-cover rounded-lg shadow-lg" 
                    alt={beforeAlt} 
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    BEFORE
                </div>
            </div>
            <div className="relative">
                <img 
                    src={afterImage} 
                    className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] aspect-square object-cover rounded-lg shadow-lg" 
                    alt={afterAlt} 
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-sky-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    AFTER
                </div>
            </div>
        </div>
    )
}