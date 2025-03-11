
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
          className="border border-gray-100 rounded-xl bg-white shadow-sm px-6"
        >
          <AccordionTrigger className="text-left font-heading text-lg hover:text-halal-blue [&[data-state=open]]:text-halal-blue py-6">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
