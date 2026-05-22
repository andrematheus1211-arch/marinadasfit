import { motion } from 'framer-motion';
import { Heart, Clock, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: <Heart className="w-7 h-7 text-secondary" />,
    title: "Emagreça Sem Sofrer",
    description: "Comida saborosa reduz a ansiedade e diminui a vontade de pedir delivery."
  },
  {
    icon: <Clock className="w-7 h-7 text-secondary" />,
    title: "Praticidade Total",
    description: "Prepare tudo no final de semana e apenas grelhe durante os dias úteis."
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-secondary" />,
    title: "15 Sabores Diferentes",
    description: "Nunca mais enjoe da dieta com receitas variadas e deliciosas."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground mb-3">
            Por que esse método funciona?
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
            A combinação perfeita entre sabor gourmet e praticidade para o dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 shadow-sm hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
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
