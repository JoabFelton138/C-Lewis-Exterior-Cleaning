import mike from '../assets/images/reviews/m.png';
import rich from '../assets/images/reviews/r.png';
import cherie from '../assets/images/reviews/c.png';
import bia from '../assets/images/reviews/b.png';
import tom from '../assets/images/reviews/t.png';
import raees from '../assets/images/reviews/ra.png';
import julie from '../assets/images/reviews/jc.png';
import a from '../assets/images/reviews/a.png';
import lee from '../assets/images/reviews/lm.png';
import michelle from '../assets/images/reviews/michelle.png';
import kristina from '../assets/images/reviews/k.png';
import thar from '../assets/images/reviews/thar.png';

export interface Review {
    rating: number;
    comment: string;
    author: string;
    image: string;
}

export const reviews: Review[] = [
    {
        rating: 5, 
        comment: `Chad came to jet wash and resand our driveway which was starting to look overgrown and shabby. He was very professional throughout, and did a great job. We were very pleased with the results and certainly won't hesitate to use his services again, and to recommend him to others!`,
        author: 'Mike Denley', 
        image: mike
    },
    {
        rating: 5, 
        comment: `Chad turned up on time, worked hard and completed the job satisfactorily. I’m very happy with my clean gutters, fascias and soffits.`,
        author: 'Rich C', 
        image: rich
    },
    {
        rating: 5, 
        comment: `Amazing job done by Chad, my roof looks perfectly clean with no moss, gutters and downpipes also cleaned and all with smile such a lovely guy. I'm absolutely thrilled with the results. Thanks Chad!`,
        author: 'Cherie Allport', 
        image: cherie
    },
    {
        rating: 5, 
        comment: `Chad recently cleaned my roof which was covered in moss. My roof is now unrecognisable.  Free of moss and looking like new. I'm very happy with Chad's work and can highly recommend him . He is reliable, great communication and his price was very competitive. Thank you, Chad.`,
        author: 'Bia', 
        image: bia
    },
    {
        rating: 5, 
        comment: `Chad came to clean my two driveways last week he did an amazing job the price was amazing so was his work he never stopped from the minute he arrived. The end result was just what i wanted I'd highly recommend.`,
        author: `Tom Gittins`,
        image: tom
    },
    {
        rating: 5, 
        comment: `Friendly and reliable. Did a fantastic job cleaning our gutters and windows. He took his time unlike others who do a rushed job.`,
        author: 'Raees Azad', 
        image: raees
    },
    {
        rating: 5, 
        comment: `Fantastic job done to our roof. Chad cleaned  up afterwards. Even cleaned windows and sills. Highly recommend`,
        author: 'Julie Clarke', 
        image: julie
    },
    {
        rating: 5, 
        comment: `Would highly recommend Chad for any pressure washing services. Had our patio and pavers pressure washed and treated and they came up beautifully. He paid close attention to detail and would recommend to anyone!`,
        author: 'A', 
        image: a
    },
    {
        rating: 5, 
        comment: `Chad cleaned our driveway and rear patio, really happy with the result. Top tradesman in my eyes, will use again!`,
        author: 'Lee Murphy', 
        image: lee
    },
    {
        rating: 5, 
        comment: `Chad provides an excellent, reliable and friendly service. Guttering, fascia, window frames and windows all sparkling!! More than pleased with the work, will definitely be booking Chad again.`,
        author: 'Michelle Clines', 
        image: michelle
    },
    {
        rating: 5, 
        comment: `We move into our property which was empty and hadn't been looked after so the windows, gutters and facia's were really dirty, chad has done an amazing job it looks amazing and look forward to a consistent window clean every six weeks now thank you so much`,
        author: 'Kristina Scorgie', 
        image: kristina
    },
    {
        rating: 5, 
        comment: `Chad cleaned my block paving and did a really great job. The difference when he'd finished was amazing. He charged a fair price. I'd definitely recommend.`,
        author: 'T Har', 
        image: thar
    }
]; 

