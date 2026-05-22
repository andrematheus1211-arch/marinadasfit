import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

const beforeList = [
  "Dieta sem sabor",
  "Falta de motivação",
  "Delivery frequente",
  "Frustração constante"
];

const afterList = [
  "Refeições saborosas",
  "Consistência real",
  "Mais controle alimentar",
  "Resultados na balança"
];

export default function TransformationSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground">
            Imagine Sua Rotina Daqui a 30 Dias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-muted/30 border-muted p-6">
              <h3 className="text-base font-bold text-muted-foreground mb-5 uppercase tracking-wider text-center">Antes</h3>
              <ul className="space-y-4">
                {beforeList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-primary/5 border-primary/20 p-6 shadow-lg shadow-primary/5">
              <h3 className="text-base font-bold text-primary mb-5 uppercase tracking-wider text-center">Depois</h3>
              <ul className="space-y-4">
                {afterList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
