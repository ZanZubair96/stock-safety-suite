
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-halal-green-dark rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-heading font-bold text-xl">HalalStocks</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-halal-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-halal-blue transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-halal-blue transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-halal-blue transition-colors">FAQ</a>
            <Button variant="outline" className="border-halal-blue text-halal-blue hover:bg-halal-blue hover:text-white">
              Log In
            </Button>
            <Button className="bg-halal-green hover:bg-halal-green-dark">Sign Up</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-halal-blue-dark focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-halal-blue transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-halal-blue transition-colors py-2">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-halal-blue transition-colors py-2">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-halal-blue transition-colors py-2">FAQ</a>
              <div className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" className="border-halal-blue text-halal-blue hover:bg-halal-blue hover:text-white w-full">
                  Log In
                </Button>
                <Button className="bg-halal-green hover:bg-halal-green-dark w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
