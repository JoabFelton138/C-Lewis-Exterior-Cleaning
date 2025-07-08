import { useState } from 'react'
import { ImageDialog } from './ImageDialog'
import { ResponsiveButton } from './ResponsiveButton'
import { portfolioImages } from '../../data/portfolio-images'

interface GridItem {
    href: string | null;
    image: string;
    title: string;
    description: string;
}

export const MasonryGrid = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
    const items = portfolioImages;

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
                            <div className="absolute flex flex-col inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-y-1">
                                <span className="text-sm sm:text-sm md:text-lg lg:text-base title-style text-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
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