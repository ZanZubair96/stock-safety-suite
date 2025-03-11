
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm">
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-halal-blue/5 blur-2xl rounded-full"></div>
        <div className="relative bg-gradient-to-br from-halal-blue to-halal-blue-dark p-4 rounded-2xl text-white inline-flex items-center justify-center">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-2xl font-heading font-bold mb-3 bg-gradient-to-r from-halal-blue to-halal-blue-dark bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
