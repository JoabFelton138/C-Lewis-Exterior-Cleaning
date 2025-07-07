import { BeforeAfter } from '../shared/BeforeAfter'
import { patioImages } from '@/data/before-after/patioImages';
import { roofImages } from '@/data/before-after/roofImages';

interface BeforeAfterGridProps {
    service: 'patios' | 'roof' | 'gutters' | 'windows' | 'conservatories';
}

export const BeforeAfterGrid = ({service}: BeforeAfterGridProps) => {

    const getBeforeAfterImages = (service: string) => {
        switch (service) {
            case 'patios':
                return patioImages;
            case 'roof':
                return roofImages;
        }
    }

    const images = getBeforeAfterImages(service);

    return (
        <section>
            <div className="w-full bg-gradient-to-r from-white via-gray-200 to-gray-300 p-20 flex items-center justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-800 uppercase tracking-wider drop-shadow-lg">
                    See The Transformation.
                </h2>
            </div>
            <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto py-10 px-4 justify-items-center md:justify-items-start">
                {images?.map((item, index) => (
                    <BeforeAfter 
                        key={index} 
                        beforeImage={item.before} 
                        afterImage={item.after} 
                        beforeAlt={item.beforeAlt}
                        afterAlt={item.afterAlt}
                    />
                ))}
            </div>
        </section>
    );
}