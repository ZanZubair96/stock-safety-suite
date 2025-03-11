
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  imgSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  rating,
  imgSrc,
}) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-halal-accent text-halal-accent" : "text-gray-300"}
          />
        ))}
      </div>
      
      <blockquote className="mb-6 text-gray-700">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          {imgSrc ? (
            <img src={imgSrc} alt={author} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-gray-500 font-semibold">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
