import { Star } from "lucide-react";

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
        className="bg-white p-8 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300"
        onClick={() => window.location.href = ReviewProps.url}>
      <div className="flex gap-1 mb-4">
        {[...Array(ReviewProps.rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-500" />
        ))}
      </div>
        <p className="text-gray-600 mb-6 italic">
            {ReviewProps.comment}
        </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full">
            <img src={ReviewProps.image} alt={ReviewProps.author} className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900">
                {ReviewProps.author}
            </h4>
            <p className="text-sm text-gray-500">
                {ReviewProps.authorTitle}
            </p>
        </div>
      </div>
    </div>
  );
};
