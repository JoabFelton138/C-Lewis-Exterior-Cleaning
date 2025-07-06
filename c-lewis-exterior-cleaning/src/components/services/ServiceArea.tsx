import { serviceAreas } from "@/data/service-areas";

interface serviceAreaProps {
    service: string
    reverse?: boolean
}


export const ServiceArea = ({service, reverse = false} : serviceAreaProps) => {

    let areas: string[] = [];
    let map = "";

    if (service === "roofsAndPatios") {
        areas = serviceAreas.roofsAndPatios.areas;
        map = serviceAreas.roofsAndPatios.mapSrc;
    }
    
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1' : ''}`}>
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <iframe 
                        src={map} 
                        className="object-cover w-full h-full"
                        title="Service Area Map"  
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col text-center">
                    <h2 className="text-lg font-bold text-gray-800 mb-1">
                        Areas We Cover for Patio & Driveway Cleaning
                    </h2>
                    {areas.map((area, index) => (
                        <p className="text-gray-600 font-sm text-base" key={index}>
                            {area}
                        </p>
                    ))}
                    <h2 className="text-lg font-bold text-gray-800 mt-1">
                        … and the surrounding areas too!
                    </h2>
                </div>
            </div>
        </section>
    );
}