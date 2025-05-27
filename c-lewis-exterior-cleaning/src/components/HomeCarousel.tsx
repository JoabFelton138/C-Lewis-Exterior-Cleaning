import { Carousel, 
        CarouselContent,    
        CarouselItem, 
        CarouselNext, 
        CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import van5 from '../assets/images/carousel/van5-min.jpg';
import cc from '../assets/images/carousel/cc-min.jpg';
import pw3 from '../assets/images/carousel/pw3-min.jpg';
import gc3 from '../assets/images/carousel/gc3.jpg';


export const HomeCarousel = () => {

    const slides = [
        {
            src: van5,
            alt: 'Van',
            title: 'PROFESSIONAL EXTERIOR CLEANING',
            subtitle: 'COVERING PERTON, SHIFNAL, WHEATON ASTON & MORE'
        },
        {
            src: cc,
            alt: 'Conservatory Cleaning',
            title: 'LET ME LIGHT UP YOUR HOME',
            subtitle: 'CONSERVATORY & SOLAR PANEL CLEANING'
        },
        {
            src: pw3,
            alt: 'Pressue Washing',
            title: 'LEAVE THE PRESSURE TO ME',
            subtitle: 'PRESSURE WASHING SERVICES',
        },
        {
            src: gc3,
            alt: 'Gutter Cleaning',
            title: 'CLEAN GUTTERS, CLEAN MIND',
            subtitle: 'GUTTERS & FASCIA CLEANING',
        }
    ];
    
    return (
        <div className='w-screen overflow-hidden'>
            <Carousel opts={{ loop: true, 
                            dragFree: true}} 
                        plugins={[Autoplay({ delay: 4000 }), Fade()]}>
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className='w-full h-[800px]'>
                                <img src={slide.src} alt={slide.alt} 
                                    className='w-screen h-full object-cover'/>
                                <div className='absolute inset-0 bg-black/40'></div>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <h2 className='text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center'>
                                        {slide.title}
                                    </h2>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant="ghost" />
                <CarouselNext variant="ghost"/>
            </Carousel>
        </div>
    );
}