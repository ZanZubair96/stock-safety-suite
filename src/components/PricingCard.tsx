
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
    <div className={`pricing-card ${isPopular ? 'border-halal-green-dark border-2 relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-halal-green text-white text-xs font-semibold py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-600 ml-1">/mo</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-1 ${feature.included ? 'text-halal-green' : 'text-gray-400'}`}>
                <Check size={16} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={isPopular ? 'bg-halal-green hover:bg-halal-green-dark w-full' : 'bg-halal-blue hover:bg-halal-blue-dark w-full'}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
