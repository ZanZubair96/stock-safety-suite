
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`} 
          className="group border border-gray-100 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 text-left font-heading text-lg hover:text-halal-blue data-[state=open]:text-halal-blue py-6 group-hover:bg-gray-50/50">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 text-gray-600 pb-6 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
