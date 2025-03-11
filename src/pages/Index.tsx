
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Search,
  CheckCircle,
  Heart,
  BarChart3,
  AlertTriangle,
  LineChart,
  Smartphone,
  Shield,
  Globe,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';

const Index = () => {
  // Feature cards data
  const features = [
    {
      icon: Search,
      title: "Stock Search",
      description: "Search thousands of global stocks with comprehensive financial data and metrics",
    },
    {
      icon: CheckCircle,
      title: "Halal Screening",
      description: "Screen stocks according to Islamic principles including financial ratios and business activities",
    },
    {
      icon: Heart,
      title: "Watchlist",
      description: "Save and monitor your favorite halal-compliant stocks in a personalized watchlist",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Access detailed financial analysis and performance metrics for informed decisions",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Alerts",
      description: "Receive notifications when a stock's compliance status changes",
    },
    {
      icon: LineChart,
      title: "Market Trends",
      description: "Stay updated with market trends and analysis of halal investment opportunities",
    }
  ];
  
  // Pricing plans data
  const pricingPlans = [
    {
      title: "Free",
      price: "Free",
      description: "Basic halal screening for casual investors",
      features: [
        { text: "Basic stock screening", included: true },
        { text: "Limited search (10/day)", included: true },
        { text: "Basic compliance filters", included: true },
        { text: "Single watchlist (up to 5 stocks)", included: true },
        { text: "Community forum access", included: true },
        { text: "Advanced filtering", included: false },
        { text: "Detailed financial analysis", included: false },
        { text: "Email alerts", included: false },
      ],
      buttonText: "Sign Up Free",
    },
    {
      title: "Basic",
      price: "$9.99",
      description: "Enhanced features for serious investors",
      features: [
        { text: "Everything in Free plan", included: true },
        { text: "Unlimited stock screening", included: true },
        { text: "Advanced compliance filters", included: true },
        { text: "Multiple watchlists", included: true },
        { text: "Email alerts for compliance changes", included: true },
        { text: "Portfolio analysis", included: true },
        { text: "Priority customer support", included: false },
        { text: "API access", included: false },
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      title: "Premium",
      price: "$19.99",
      description: "Complete solution for professional investors",
      features: [
        { text: "Everything in Basic plan", included: true },
        { text: "Advanced portfolio analysis", included: true },
        { text: "Custom screening criteria", included: true },
        { text: "Real-time compliance alerts", included: true },
        { text: "Export data to Excel/PDF", included: true },
        { text: "Priority customer support", included: true },
        { text: "API access for integration", included: true },
        { text: "Personalized investment advice", included: true },
      ],
      buttonText: "Get Premium",
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "This platform has transformed how I approach investing. Now I can easily ensure my investments are halal without spending hours on research.",
      author: "Ahmed Rahman",
      role: "Individual Investor",
      rating: 5,
    },
    {
      quote: "As a financial advisor, HalalStocks has become an essential tool for serving my Muslim clients. The screening process is thorough and reliable.",
      author: "Sarah Johnson",
      role: "Financial Advisor",
      rating: 5,
    },
    {
      quote: "I was always hesitant about investing in stocks due to Sharia compliance concerns. This platform has given me confidence to start building my portfolio.",
      author: "Mohammed Al-Faisal",
      role: "New Investor",
      rating: 4,
    }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: "What makes a stock halal or Sharia-compliant?",
      answer: "Halal stocks must pass several screening criteria: the company's primary business must not be in prohibited industries (alcohol, gambling, pork, etc.), and it must pass financial ratio screens related to debt, interest income, and impermissible income sources.",
    },
    {
      question: "How often is the compliance data updated?",
      answer: "Our compliance data is updated quarterly based on company financial reports. Premium subscribers receive alerts when a stock's compliance status changes.",
    },
    {
      question: "Can I use this platform for my retirement investments?",
      answer: "Yes! Many users utilize our platform to ensure their retirement portfolios are Sharia-compliant. You can screen individual stocks or use our tools to analyze mutual funds and ETFs.",
    },
    {
      question: "What financial ratios do you use for screening?",
      answer: "We use several key ratios including: debt to market capitalization (must be less than 33%), accounts receivable to market cap (less than 33%), and income from non-compliant activities (less than 5% of total revenue).",
    },
    {
      question: "Do you offer purification calculations?",
      answer: "Yes, our premium plan includes purification calculations to determine the portion of dividends that should be donated to charity due to impermissible income sources.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ethical Investing Made <span className="text-halal-accent">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Screen stocks according to Islamic principles and build a halal investment portfolio with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-halal-green hover:bg-halal-green-dark text-white px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-halal-blue-dark px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for <span className="text-halal-blue">Halal Investing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and manage a Sharia-compliant investment portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-halal-green">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to find and monitor halal-compliant stocks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-halal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-heading font-semibold text-xl mb-2">Search</h3>
              <p className="text-gray-600">Enter a company name or ticker symbol to find stocks that interest you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-halal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-heading font-semibold text-xl mb-2">Screen</h3>
              <p className="text-gray-600">View detailed compliance reports and financial metrics to assess halal status</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-halal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-heading font-semibold text-xl mb-2">Monitor</h3>
              <p className="text-gray-600">Add compliant stocks to your watchlist and receive alerts on status changes</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-halal-blue hover:bg-halal-blue-dark">
              Try It Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section bg-halal-blue-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-halal-accent">HalalStocks</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Our platform is designed specifically for Muslim investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 text-halal-accent flex justify-center">
                <Shield size={48} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Thorough Screening</h3>
              <p className="text-gray-300">Comprehensive screening methodology based on established Islamic finance principles</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-halal-accent flex justify-center">
                <Globe size={48} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Global Coverage</h3>
              <p className="text-gray-300">Access stocks from markets worldwide, not just limited to Islamic indexes</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-halal-accent flex justify-center">
                <Smartphone size={48} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Easy to Use</h3>
              <p className="text-gray-300">Intuitive interface designed for investors of all experience levels</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent <span className="text-halal-green">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your investment journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-halal-blue">Users Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of Muslim investors worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-halal-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Build Your Halal Portfolio?
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of Muslim investors using HalalStocks to align their investments with their values.
          </p>
          <Button className="bg-white text-halal-green-dark hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Free
          </Button>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-halal-blue">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about halal investing and our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
