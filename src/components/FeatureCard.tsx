
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card group">
      <div className="mb-4 p-3 rounded-full bg-halal-blue-light/10 inline-block text-halal-blue group-hover:bg-halal-blue group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
