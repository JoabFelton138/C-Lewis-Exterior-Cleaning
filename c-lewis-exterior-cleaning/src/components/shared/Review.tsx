import { Star } from "lucide-react";
import google from "@/assets/images/GOOGLE.png";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import {useState} from 'react';

interface ReviewProps {
  rating: number;
  comment: string;
  author: string;
  image?: string;
  isLarge?: boolean;
}

export const Review = ({ isLarge = false,...ReviewProps}: ReviewProps) => {
    
  const [isExpanded, setIsExpanded] = useState(false);
  
    const styles = {
      card: isLarge 
        ? "sm:p-5 lg:p-6 w-full max-w-[320px] sm:max-w-none min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] flex flex-col gap-2 mx-auto sm:mx-0 flex-shrink-0 self-start"        
        : "w-[260px] sm:w-[280px] md:w-[300px] lg:w-full h-full gap-1",
      avatar: isLarge 
        ? "w-10 h-10 lg:w-11 lg:h-11" 
        : "w-10 h-10",
      author: isLarge
        ? "text-xs sm:text-sm md:text-base lg:text-base" 
        : "text-xs lg:text-sm",
      stars: isLarge
        ? "w-4 h-4 sm:w-4 sm:h-4"
        : "w-4 h-4",
      starsContainer: isLarge
        ? "mt-0"
        : "",
      googleLogo: isLarge 
        ? "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
        : "w-6 h-6",
      comment: isLarge
        ? "text-xs md:text-[15px]"
        : "text-xs lg:text-sm",
      cardContent: isLarge
          ? "mt-1 flex-1"
          : "mt-0"
    }

    return (
      <Card 
          className={`bg-white cursor-pointer rounded-lg ${styles.card} hover:-translate-y-2 transition-all duration-300 p-4`}>
        <CardHeader className="px-0">
          <CardTitle className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar className={`${styles.avatar} flex-shrink-0`}>
                <AvatarImage 
                  src={ReviewProps.image} 
                  className="object-cover w-full h-full" 
                  alt={`${ReviewProps.author} avatar`}
                />
                <AvatarFallback>
                  {ReviewProps.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className={`font-bold gap-1 ${styles.author}`}>
                    {ReviewProps.author}
                </h3>
                <div className={`flex gap-1 ${styles.starsContainer}`}>
                  {[...Array(ReviewProps.rating)].map((_, i) => (
                    <Star key={i} className={`${styles.stars} fill-yellow-400 text-yellow-400`} />
                  ))}
                </div>
              </div>
            </div>
            <img 
              src={google} 
              alt="Google" 
              className={`${styles.googleLogo}`} 
              loading="lazy"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className={`px-0 ${styles.cardContent}`}>
          {isLarge ? (
            <div className="space-y-2">
              <div className={`overflow-hidden transition-all duration-800 ease-in-out ${!isExpanded ? "max-h-20" : "max-h-96"}`}>
                <p className={`text-gray-500 ${styles.comment}`}>
                  {ReviewProps.comment}
                </p>
              </div>
              {ReviewProps.comment.length > 200 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs font-medium cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More..."}
                </button>
              )}
            </div>
          ) : (
            <p className={`text-gray-500 ${styles.comment}`}>
              {ReviewProps.comment}
            </p>
          )}
        </CardContent>
      </Card>
    );
};
