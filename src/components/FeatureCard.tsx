
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px]">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90 rounded-2xl shadow-lg border border-gray-100/50 z-0"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-halal-blue/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-full transition-opacity duration-300 z-0"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <div className="bg-gradient-to-br from-halal-blue to-halal-blue-dark p-4 rounded-2xl text-white inline-flex items-center justify-center shadow-md">
            <Icon size={24} strokeWidth={1.5} />
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-bold mb-3 bg-gradient-to-r from-halal-blue to-halal-blue-dark bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
