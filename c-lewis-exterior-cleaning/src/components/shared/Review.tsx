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
}

export const Review = ({ ...ReviewProps }: ReviewProps) => {
  return (
    <Card 
        className="bg-white p-5 h-full w-[320px] md:w-full 
        cursor-pointer rounded-lg gap-1 hover:-translate-y-2 transition-all duration-300"
        onClick={() => window.location.href = ReviewProps.url}>
      <CardHeader className="px-0">
        <CardTitle className="flex justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={ReviewProps.image} className="object-cover" />
              <AvatarFallback>
                {ReviewProps.author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-bold gap-1">{ReviewProps.author}</h3>
              <div className="flex gap-">
                {[...Array(ReviewProps.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <img src={google} alt="Google" className="w-6 h-6 mb-[25px]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-xs lg:text-sm text-gray-500">{ReviewProps.comment}</p>
      </CardContent>
    </Card>
  );
};
