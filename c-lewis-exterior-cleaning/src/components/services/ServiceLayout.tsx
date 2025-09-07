interface ServiceLayoutProps {
    subtitle1: string;
    description1: string;
    subtitle2?: string;
    description2?: string;
    image: string;
    reverse?: boolean;
}

export const ServiceLayout = ({ subtitle1, description1, subtitle2, description2, image, reverse = false}: ServiceLayoutProps) => {
    const styleClass = {
        subtitle: "text-lg sm:text-xl md:text-2xl lg:text-3xl title-style text-gray-800",
        description: "text-gray-600 text-sm sm:text-base leading-relaxed",
    }
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${ 
                reverse ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1' : ''
            }`}>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className={`${styleClass.subtitle}`}>{subtitle1}</h2>
                        <p className={`${styleClass.description}`}>
                            {description1}
                        </p>
                    </div>
                    {subtitle2 && description2 && (
                        <div className="space-y-4 pt-6 border-t border-gray-200">
                            <h2 className={`${styleClass.subtitle}`}>{subtitle2}</h2>
                            <p className={`${styleClass.description}`}>
                                {description2}
                            </p>
                        </div>
                    )}
                </div>
                <img 
                    src={image} 
                    alt="service image" 
                    className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[450px] w-full rounded-lg overflow-hidden shadow-xl object-cover object-center"
                    loading="lazy"
                />
            </div>
        </section>
    );
}