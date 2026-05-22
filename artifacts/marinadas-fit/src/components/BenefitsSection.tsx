import { motion } from 'framer-motion';
import { Heart, Clock, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: "Emagreça Sem Sofrer",
    description: "Comida saborosa reduz a ansiedade e diminui a vontade de pedir delivery."
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary" />,
    title: "Praticidade Total",
    description: "Prepare tudo no final de semana e apenas grelhe durante os dias úteis."
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-secondary" />,
    title: "15 Sabores Diferentes",
    description: "Nunca mais enjoe da dieta com receitas variadas e deliciosas."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Por que esse método funciona?
          </h2>
          <p className="text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
            A combinação perfeita entre sabor gourmet e praticidade para o dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-primary/10 shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}