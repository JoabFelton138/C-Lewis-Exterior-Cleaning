import gutter1 from '../../assets/images/gallery/gutter1.jpeg'
import pw1 from '../../assets/images/gallery/pw12.jpg'
import pw2 from '../../assets/images/pw/pw6.jpg'
import pw3 from '../../assets/images/pw/pw2.jpg'
import wc1 from '../../assets/images/wc/wc1.jpg'
import wc from '../../assets/images/gallery/bwc.jpg'
import wc2 from '../../assets/images/wc/wc7.jpg'
import wc3 from '../../assets/images/wc/wc2fin.jpg'
import { Button } from '../ui/button'

export const MasonryGrid = () => {
    const items = [
        {
            href: "/",
            image: wc,
            title: "Window Cleaning",
        },
        {
            href: "/",
            image: pw3,
            title: "Pressure Washing",
        },
        {
            href: "/",
            image: pw2,
            title: "Conservatory Cleaning",
        },
        {
            href: "/",
            image: pw1,
            title: "Pressure Washing",
        },
        {
            href: "/",
            image: wc3,
            title: "Window Cleaning",
        },
        {
            href: "/",
            image: gutter1,
            title: "Gutter Cleaning",
        },
        {
            href: "/",
            image: wc1,
            title: "Conservatory Cleaning",
        },
        {
            href: "/",
            image: wc2,
            title: "Window Cleaning",
        }
        ,
    ];

    return (
        <section className="pb-14 bg-slate-50 overflow-hidden">
            <div className={`w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4`}>
                {
                    items.map((item, index) => (
                        <div key={index} className="aspect-[4/3] w-full relative overflow-hidden group cursor-pointer">
                            <img src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-16">
                <Button size="lg" className="px-12 hover:bg-primary/90 hover:scale-105 text-lg">
                    PORTFOLIO
                </Button>
            </div>
        </section>
    )
}