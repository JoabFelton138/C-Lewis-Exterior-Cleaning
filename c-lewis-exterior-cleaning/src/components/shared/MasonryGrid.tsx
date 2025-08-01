import { useState } from 'react'
import { ImageDialog } from './ImageDialog'
import { ResponsiveButton } from './ResponsiveButton'
import { portfolioImages } from '../../data/portfolio-images'
import { usePortfolioNavigation } from '../utils/navigation';

interface MasonryGridProps {
    isPage?: boolean;
}

interface GridItem {
    image: string;
    title: string;
    description: string;
}

export const MasonryGrid = ({ isPage = false}: MasonryGridProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const [buttonCount, setButtonCount] = useState<number>(0);
    const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
    const [displayCount, setDisplayCount] = useState<number>(8);
    const imagesToShow = portfolioImages.slice(0, displayCount);
    const handlePortfolioClick = usePortfolioNavigation();

    const loadMore = () => {
        setButtonCount(prev => prev + 1);
        setDisplayCount(prev => prev + 8);
    }

    const loadLess = () => {
        setButtonCount(prev => prev - 1);
        setDisplayCount(prev => prev - 8);
    }

    const handleClick = (selectedItem: GridItem) => {
        setSelectedItem(selectedItem);
        setOpen(true)
    };
    
    return (
        <section className={`pb-14 ${isPage ? '' : 'bg-slate-50'} overflow-hidden`}>
            <div className={`w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                {
                    imagesToShow.map((item, index) => (
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
                            </div>
                        </div>

                    ))
                }
            </div>

            {isPage ? (
                <div className="flex justify-center gap-4 mt-16">
                    {buttonCount < 2 &&(
                    <ResponsiveButton text="Load More" onClick={() => loadMore()} />
                    )}
                    {buttonCount > 0 && (
                        <ResponsiveButton text="See Less" onClick={() => loadLess()} />
                    )}
                </div>
                ) 
            : (
                <div className="flex justify-center mt-16">
                    <ResponsiveButton
                        text="PORTFOLIO"
                        onClick={() => handlePortfolioClick()}
                    />
                </div>
            )}

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