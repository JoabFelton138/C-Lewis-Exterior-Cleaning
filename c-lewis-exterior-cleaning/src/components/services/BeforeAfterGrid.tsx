import { BeforeAfter } from '../shared/BeforeAfter';
import { patioImages } from '@/data/before-after/patioImages';
import { roofImages } from '@/data/before-after/roofImages';
import { gutterImages } from '@/data/before-after/gutterImages';
import { windowImages } from '@/data/before-after/windowImages';
import { conservatoryImages } from '@/data/before-after/conservatoryImages';

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
            case 'gutters':
                return gutterImages;
            case 'windows':
                return windowImages;
            case 'conservatories':
                return conservatoryImages;
        }
    }

    const images = getBeforeAfterImages(service);

    return (
        <section>
            <div className="w-full bg-gradient-to-r from-white via-gray-200 to-gray-300 p-20 flex flex-row items-center justify-center">
                <h2 className="text-lg lg:text-2xl title-style text-gray-800 drop-shadow-lg">
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