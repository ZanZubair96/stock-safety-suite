
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
}) => {
  return (
    <div className={`relative group transition-all duration-300 hover:translate-y-[-8px] ${
      isPopular 
        ? 'z-10' 
        : 'z-0'
    }`}>
      {/* Card background with subtle gradient */}
      <div className={`h-full p-8 rounded-2xl backdrop-blur-sm ${
        isPopular 
          ? 'bg-gradient-to-br from-halal-blue-dark to-halal-blue text-white shadow-lg shadow-halal-blue/20' 
          : 'bg-gradient-to-br from-white to-gray-50/90 text-gray-900 shadow-lg'
      } border border-gray-100/50`}>
        
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-halal-accent text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg">
            Most Popular
          </div>
        )}
        
        <h3 className="font-heading font-bold text-2xl mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Free' && <span className={`${isPopular ? 'text-white/80' : 'text-gray-600'} ml-1`}>/mo</span>}
        </div>
        <p className={`${isPopular ? 'text-white/80' : 'text-gray-600'} mb-8`}>{description}</p>
        
        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`mt-1 ${
                  feature.included 
                    ? isPopular ? 'text-halal-accent' : 'text-halal-green' 
                    : isPopular ? 'text-white/40' : 'text-gray-400'
                }`}>
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className={`${
                  feature.included 
                    ? isPopular ? 'text-white' : 'text-gray-700' 
                    : isPopular ? 'text-white/40' : 'text-gray-400'
                }`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className={`w-full py-6 ${
            isPopular 
              ? 'bg-halal-accent hover:bg-halal-accent/90 text-white' 
              : 'bg-halal-blue hover:bg-halal-blue-dark text-white'
          } shadow-md transition-all duration-300 hover:shadow-lg`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
