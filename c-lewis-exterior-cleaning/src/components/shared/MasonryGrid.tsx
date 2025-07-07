import gutter1 from '../../assets/images/gallery/gutter1.jpeg'
import pw1 from '../../assets/images/gallery/pw12.jpg'
import pw2 from '../../assets/images/pw/pw6.jpg'
import pw3 from '../../assets/images/pw/pw2.jpg'
import wc1 from '../../assets/images/wc/wc1.jpg'
import wc from '../../assets/images/gallery/bwc.jpg'
import wc2 from '../../assets/images/wc/wc7.jpg'
import wc3 from '../../assets/images/wc/wc2fin.jpg'
import { useState } from 'react'
import { ImageDialog } from './ImageDialog'
import { ResponsiveButton } from './ResponsiveButton'

interface GridItem {
    href: string | null;
    image: string;
    title: string;
    description: string;
}

export const MasonryGrid = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
    
    const items = [
        {
            href: "/",
            image: wc,
            title: "Window Cleaning",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: pw3,
            title: "Pressure Washing",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: pw2,
            title: "Conservatory Cleaning",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: pw1,
            title: "Pressure Washing",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: wc3,
            title: "Window Cleaning",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: gutter1,
            title: "Gutter Cleaning",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: wc1,
            title: "Conservatory Cleaning",
            description: `We'll put a description of the job here`
        },
        {
            href: "/",
            image: wc2,
            title: "Window Cleaning",
            description: `We'll put a description of the job here`
        }
    ];

    const handleClick = (selectedItem: GridItem) => {
        setSelectedItem(selectedItem);
        setOpen(true)
    };
    
    return (
        <section className="pb-14 bg-slate-50 overflow-hidden">
            <div className={`w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                {
                    items.map((item, index) => (
                        <div key={index} 
                             className="aspect-[4/3] w-full relative overflow-hidden group cursor-pointer"
                             onClick={() => handleClick(item)}
                            >
                            <img src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute flex flex-col inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-sm sm:text-sm md:text-lg lg:text-base font-semibold text-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
                                    {item.title}
                                </span>
                                <span className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
                                    {item.description}
                                </span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex justify-center mt-16">
                <ResponsiveButton 
                    text="PORTFOLIO" 
                    onClick={() => {}} 
                />
            </div>
            <ImageDialog 
                open={open} 
                imageUrl={selectedItem?.image || ""} 
                onOpenChange={setOpen} 
                altText={selectedItem?.title || ""}
                title={selectedItem?.title || ""}
                description={selectedItem?.description || ""}
            />
        </section>
    )
}