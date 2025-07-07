interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt: string;
    afterAlt: string;
}

export const BeforeAfter = ({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterProps) => {
    return (
            <div className="flex flex-row gap-2 justify-center">
                <div className="relative">
                    <img 
                        src={beforeImage} 
                        className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg" 
                        alt={beforeAlt} 
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        BEFORE
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src={afterImage} 
                        className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg" 
                        alt={afterAlt} 
                    />
                    <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        AFTER
                    </div>
                </div>
            </div>
    )
}