import { serviceAreas } from "@/data/service-areas";

interface serviceAreaProps {
    service: string
    reverse?: boolean
}


export const ServiceArea = ({service, reverse = false} : serviceAreaProps) => {

    let areas: string[] = [];
    let map = "";

    const getServiceTitle = (service: string) => {
        switch (service) {
            case "roofs":
                return "Roof Cleaning";
            case "patios":
                return "Patio Cleaning";
        }
    }

    const serviceTitle = getServiceTitle(service);

    if (service === "roofs" || service === "patios") {
        areas = serviceAreas.roofsAndPatios.areas;
        map = serviceAreas.roofsAndPatios.mapSrc;
    }
    
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1' : ''}`}>
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                    <iframe 
                        src={map} 
                        className="object-cover w-full h-full"
                        title="Service Area Map"  
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col text-center order-1 lg:order-2">
                    <h2 className="text-lg text-gray-800 title-style mb-1">
                        Areas We Cover for {serviceTitle}
                    </h2>
                    {areas.map((area, index) => (
                        <p className="text-gray-600 font-sm text-base" key={index}>
                            {area}
                        </p>
                    ))}
                    <h2 className="text-lg text-gray-800 title-style mt-1">
                        … and the surrounding areas too!
                    </h2>
                </div>
            </div>
        </section>
    );
}