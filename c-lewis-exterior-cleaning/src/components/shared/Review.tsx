import { Star } from "lucide-react";
import google from "@/assets/images/GOOGLE.png";

interface ReviewProps {
  rating: number;
  comment: string;
  author: string;
  authorTitle: string;
  image?: string;
  url: string;
}

export const Review = ({ ...ReviewProps }: ReviewProps) => {
  return (
    <div 
        className="bg-white p-5 cursor-pointer rounded-lg hover:-translate-y-2 transition-all duration-300"
        onClick={() => window.location.href = ReviewProps.url}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-full">
            <img 
                src={ReviewProps.image} 
                alt={ReviewProps.author} 
                className="w-full h-full object-cover rounded-full" 
            />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 text-sm">
                {ReviewProps.author}
            </h4>
            <div className="flex gap-1">
                {[...Array(ReviewProps.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
        </div>
        <div className="flex-1 flex justify-end pb-6">
          <img src={google} alt="Google" className="w-6 h-6" />
        </div>
      </div>
      <p className="text-gray-600 mb-3 italic text-sm">
          {ReviewProps.comment}
      </p>
      <p className="text-xs text-gray-500">
          {ReviewProps.authorTitle}
      </p>
    </div>
  );
};
