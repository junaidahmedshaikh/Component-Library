import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-md transition"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
            id={`accordion-header-${index}`}
          >
            <span className="text-gray-800 font-medium">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            id={`accordion-content-${index}`}
            role="region"
            aria-labelledby={`accordion-header-${index}`}
            className={`overflow-hidden px-4 text-sm text-gray-500 transition-all ease-in-out duration-300 ${
              openIndex === index
                ? "max-h-40 py-2 opacity-100"
                : "max-h-0 py-0 opacity-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
