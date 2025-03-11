
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
    <div className="bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? "fill-halal-accent text-halal-accent" : "text-gray-200"}`}
          />
        ))}
      </div>
      
      <blockquote className="mb-8 text-gray-700 leading-relaxed text-lg italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-halal-blue to-halal-blue-dark flex items-center justify-center text-white mr-4 shadow-md">
          {imgSrc ? (
            <img src={imgSrc} alt={author} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-xl font-semibold">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <p className="font-heading font-bold text-lg text-gray-900">{author}</p>
          <p className="text-halal-blue">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
