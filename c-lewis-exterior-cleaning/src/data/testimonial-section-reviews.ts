import mike from '../assets/images/reviews/m.png';
import rich from '../assets/images/reviews/r.png';
import cherie from '../assets/images/reviews/c.png';
import bia from '../assets/images/reviews/b.png';
import tom from '../assets/images/reviews/t.png';
import raees from '../assets/images/reviews/ra.png';
import julie from '../assets/images/reviews/jc.png';
import a from '../assets/images/reviews/a.png';
import lee from '../assets/images/reviews/lm.png';

export interface Review {
    rating: number;
    comment: string;
    author: string;
    url: string;
    image: string;
}

export const reviews: Review[] = [
    {
        rating: 5, 
        comment: `Chad came to jet wash and resand our driveway which was starting to look overgrown and shabby. He was very professional throughout, and did a great job. We were very pleased with the results and certainly won't hesitate to use his services again, and to recommend him to others!`,
        author: 'Mike Denley', 
        url:'https://www.google.com/maps/contrib/114618193736813129691/reviews?hl=en',
        image: mike
    },
    {
        rating: 5, 
        comment: `Chad turned up on time, worked hard and completed the job satisfactorily. I’m very happy with my clean gutters, fascias and soffits.`,
        author: 'Rich C', 
        url:'https://www.google.com/maps/contrib/105085479513381911147/reviews?hl=en',
        image: rich
    },
    {
        rating: 5, 
        comment: `Amazing job done by Chad, my roof looks perfectly clean with no moss, gutters and downpipes also cleaned and all with smile such a lovely guy. I'm absolutely thrilled with the results. Thanks Chad!`,
        author: 'Cherie Allport', 
        url:'https://www.google.com/maps/contrib/108545701651043990614/reviews?hl=en',
        image: cherie
    },
    {
        rating: 5, 
        comment: `Chad recently cleaned my roof which was covered in moss. My roof is now unrecognisable.  Free of moss and looking like new. I'm very happy with Chad's work and can highly recommend him . He is reliable, great communication and his price was very competitive. Thank you, Chad.`,
        author: 'Bia', 
        url:'https://www.google.com',
        image: bia
    },
    {
        rating: 5, 
        comment: `Chad came to clean my two driveways last week he did an amazing job the price was amazing so was his work he never stopped from the minute he arrived. The end result was just what i wanted I'd highly recommend.`,
        author: `Tom Gittins`,
        url: `https://www.google.com/maps/contrib/110235371852526809468/reviews/@51.421233,-0.1769472,14z/data=!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D`,
        image: tom
    },
    {
        rating: 5, 
        comment: `Friendly and reliable. Did a fantastic job cleaning our gutters and windows. He took his time unlike others who do a rushed job.`,
        author: 'Raees Azad', 
        url:'https://www.google.com',
        image: raees
    },
    {
        rating: 5, 
        comment: `Fantastic job done to our roof. Chad cleaned  up afterwards. Even cleaned windows and sills. Highly recommend`,
        author: 'Julie Clarke', 
        url:'https://www.google.com/maps/contrib/115746620897695973016/reviews?hl=en',
        image: julie
    },
    {
        rating: 5, 
        comment: `Would highly recommend Chad for any pressure washing services. Had our patio and pavers pressure washed and treated and they came up beautifully. He paid close attention to detail and would recommend to anyone!`,
        author: 'A', 
        url:'https://www.google.com/maps/contrib/108197281584241577752/reviews?hl=en',
        image: a
    },
    {
        rating: 5, 
        comment: `Chad cleaned our driveway and rear patio, really happy with the result. Top tradesman in my eyes, will use again!`,
        author: 'Lee Murphy', 
        url:'https://www.google.com/maps/contrib/114484415203886904918/reviews?hl=en',
        image: lee
    },
    
]; 

