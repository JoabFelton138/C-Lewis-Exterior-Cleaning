import { Star } from "lucide-react";
import google from "@/assets/images/GOOGLE.png";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";

interface ReviewProps {
  rating: number;
  comment: string;
  author: string;
  image?: string;
  url: string;
  isLarge?: boolean;
}

export const Review = ({ isLarge = false,...ReviewProps}: ReviewProps) => {
    
    const styles = {
      card: isLarge 
        ? "p-5 sm:p-6 lg:p-8 w-full max-w-[320px] sm:max-w-none h-auto min-h-[250px] sm:min-h-[275px] md:min-h-[300px] lg:min-h-[300px] gap-2 mx-auto sm:mx-0"        
        : "p-5 w-[320px] md:w-full h-full gap-1",
      avatar: isLarge 
        ? "w-10 h-10 lg:w-12 lg:h-12" 
        : "w-10 h-10",
      author: isLarge
        ? "sm:text-sm md:text-base lg:text-lg" 
        : "text-xs lg:text-sm",
      stars: isLarge
        ? "w-4 h-4 sm:w-5 sm:h-5"
        : "w-4 h-4",
      starsContainer: isLarge
        ? "mt-1"
        : "",
      googleLogo: isLarge 
        ? "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
        : "w-6 h-6",
      comment: isLarge
        ? "text-sm md:text-[15px]"
        : "text-xs lg:text-sm",
      cardContent: isLarge
          ? ""
          : "mt-1"
    }

    return (
      <Card 
          className={`bg-white cursor-pointer rounded-lg ${styles.card} hover:-translate-y-2 transition-all duration-300`}
          onClick={() => window.location.href = ReviewProps.url}>
        <CardHeader className="px-0">
          <CardTitle className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar className={`${styles.avatar} flex-shrink-0`}>
                <AvatarImage src={ReviewProps.image} className="object-cover w-full h-full" />
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
            <img src={google} alt="Google" className={`${styles.googleLogo}`} />
          </CardTitle>
        </CardHeader>
        <CardContent className={`px-0 ${styles.cardContent}`}>
          <p className={`text-gray-500  ${styles.comment}`}>
            {ReviewProps.comment}
          </p>
        </CardContent>
      </Card>
    );
};
