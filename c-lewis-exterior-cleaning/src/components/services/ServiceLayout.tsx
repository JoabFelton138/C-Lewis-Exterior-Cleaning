interface ServiceLayoutProps {
    subtitle1: string;
    description1: string;
    subtitle2?: string;
    description2?: string;
    image: string;
}

export const ServiceLayout = ({ subtitle1, description1, subtitle2, description2, image }: ServiceLayoutProps) => {
    const styleClass = {
        subtitle: "text-3xl font-bold whitespace-nowrap",
        description: "text-center text-gray-600 text-xs text-justify sm:text-base leading-relaxed pt-4",
    }
    return (
        <section className="max-w-7xl mx-auto pt-20 px-4 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-5">
                    <h2 className={`${styleClass.subtitle}`}>{subtitle1}</h2>
                    <p className={`${styleClass.description}`}>
                        {description1}
                    </p>
                    <h2 className={`${styleClass.subtitle} mt-8`}>{subtitle2}</h2>
                    <p className={`${styleClass.description}`}>
                        {description2}
                    </p>
                </div>
                <img src={image} alt={image} className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[450px] w-full rounded-lg overflow-hidden shadow-xl object-cover object-center"/>
            </div>
        </section>
    );
}