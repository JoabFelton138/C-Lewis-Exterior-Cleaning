import helen from '../assets/images/reviews/h.png';
import gary from '../assets/images/reviews/g.png';
import raees from '../assets/images/reviews/r.png';
import caroline from '../assets/images/reviews/c.png';
import mark from '../assets/images/reviews/m.png';
import sue from '../assets/images/reviews/s.png';

export interface Review {
    rating: number;
    comment: string;
    author: string;
    date: string;
    url: string;
    image: string;
}

export const reviews: Review[] = [
    {
        rating: 5, 
        comment: `Cannot rate this Guy enough always does an outstanding job from widows to patios driveways and roofs, We use him all the time very efficient and very professional.`,
        author: 'Gary Withington', 
        date: '3 weeks ago', 
        url:'https://www.google.com',
        image: gary
    },
    {
        rating: 5, 
        comment: `Chad worked diligently, was punctual, polite & trustworthy being left alone with the property whilst the work was completed. Totally recommend his services & you too will be delighted with the result.`,
        author: 'Helen Roberts', 
        date: 'a month ago', 
        url:'https://www.google.com',
        image: helen
    },
    {
        rating: 5, 
        comment: `Friendly and reliable. Did a fantastic job cleaning our gutters and windows. He took his time unlike others who do a rushed job.`,
        author: 'Raees Azad', 
        date: '4 months ago', 
        url:'https://www.google.com',
        image: raees
    },
    {
        rating: 5, 
        comment: `Chad is great at cleaning windows, polite,
                Considerate & a great guy. Hard working & an all round top bloke. 🤩`,
        author: 'Caroline Donoghue', 
        date: '5 months ago', 
        url:'https://www.google.com',
        image: caroline
    },
    {
        rating: 5, 
        comment: `Always happy with chads window cleaning . Very efficient and always lets me know when he’s coming to clean the windows the day before ⭐️`,
        author: `Sue Boydon`,
        date: `5 months ago`,
        url: `https://www.google.com/maps/contrib/101134375924887887096/reviews/@52.5790465,-2.1108483,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D`,
        image: sue
    },
    {
        rating: 5, 
        comment: `Had roof cleaned by Chad. Did and excellent job. Always kept informed of progress and what the processes were. Would highly recommend to anybody who wants the roof cleaning and moss free.`,
        author: `Mark Burchill`,
        date: `9 months ago`,
        url: `https://www.google.com/maps/contrib/117030674439484368722/reviews/@52.6878366,-2.4674304,11z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D`,
        image: mark
    }
]; 