import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQAccordion = ({ items }: { items: FAQItemProps[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border-b border-border">
          <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};