import { serviceAreas } from "@/data/service-areas";

interface serviceAreaProps {
    service: string
    reverse?: boolean
}


export const ServiceArea = ({service, reverse = false} : serviceAreaProps) => {

    let areas: string[] = [];
    let map = "";

    const getServiceTitle = (service: string) => {
        const serviceAreaTitle = "Areas We Cover for";
        switch (service) {
            case "roofs":
                return `${serviceAreaTitle} Roof Cleaning`;
            case "patios":
                return `${serviceAreaTitle} Patio Cleaning`;
            case "gutters":
            case "conservatories":
                return `Service within 25 miles of Wheaton Aston`;
        }
    }

    const getServiceTitle2 = (service: string) => {

        if (service === "roofs" || service === "patios") {
            return `… and the surrounding areas too!`;
        }

        if (service === "gutters" || service === "conservatories") {
            return `Not sure we cover your area? Get in touch!`;
        }

        if (service === "windows") {
            return `Service is only available in Wheaton Aston.`;
        }
    }

    const serviceTitle = getServiceTitle(service);
    const serviceTitle2 = getServiceTitle2(service);

    if (service === "roofs" || service === "patios") {
        areas = serviceAreas.roofsAndPatios.areas;
        map = serviceAreas.roofsAndPatios.mapSrc;
    }

    if (service === "gutters" || service === "conservatories") {
        areas = serviceAreas.guttersAndConservatories.areas;
        map = serviceAreas.guttersAndConservatories.mapSrc;
    }

    if (service === "windows") {
        map = serviceAreas.guttersAndConservatories.windowCleaning.mapSrc;
    }
    
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? '[&>*:first-child]:order-2 [&>*:last-child]:order-1' : ''}`}>
                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                    <iframe 
                        src={map} 
                        className="object-cover w-full h-full"
                        title="Service Area Map"  
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col text-center order-1 lg:order-2">
                    <h2 className="text-base sm:text-lg text-gray-800 title-style mb-2">
                        {serviceTitle}
                    </h2>
                    {areas.map((area, index) => (
                        <p className="text-gray-600 text-sm sm:text-base" key={index}>
                            {area}
                        </p>
                    ))}
                    <h2 className="text-base sm:text-lg text-gray-800 title-style mt-2">
                        {serviceTitle2}
                    </h2>
                </div>
            </div>
        </section>
    );
}