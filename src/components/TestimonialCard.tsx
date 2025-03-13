
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
    <div className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px]">
      {/* Card background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/90 opacity-90 rounded-2xl shadow-lg border border-gray-100/50 z-0"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-halal-blue/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-full transition-opacity duration-300 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              strokeWidth={1.5}
              className={`${i < rating ? "fill-halal-accent text-halal-accent" : "text-gray-200"}`}
            />
          ))}
        </div>
        
        <blockquote className="mb-8 text-gray-700 leading-relaxed text-lg italic">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="relative w-14 h-14 mr-4 shadow-md rounded-full overflow-hidden">
            {/* Background gradient for avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-halal-blue to-halal-blue-dark"></div>
            
            {imgSrc ? (
              <img src={imgSrc} alt={author} className="absolute inset-0 w-full h-full object-cover rounded-full" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-heading font-bold text-lg text-gray-900">{author}</p>
            <p className="text-halal-blue">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
