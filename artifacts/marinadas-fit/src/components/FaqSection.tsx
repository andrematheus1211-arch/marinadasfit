import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O eBook é para iniciantes?",
    answer: "Sim! As receitas são simples e feitas para quem não tem nenhuma experiência culinária. Tudo é explicado passo a passo."
  },
  {
    question: "Preciso de ingredientes caros?",
    answer: "Não! Todos os ingredientes são comuns e encontrados em qualquer mercado do seu bairro. O foco é comida de verdade, acessível."
  },
  {
    question: "Quanto tempo leva para preparar?",
    answer: "Menos de 30 minutos por semana para preparar todas as marinadas. Você faz tudo de uma vez e deixa na geladeira."
  },
  {
    question: "Como recebo o eBook?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe o link de acesso direto no seu email cadastrado."
  }
];

export default function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/50 border border-border px-5 rounded-lg data-[state=open]:bg-primary/5 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
