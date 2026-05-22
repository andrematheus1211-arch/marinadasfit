import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import avatar1 from '@assets/avatar1.png';
import avatar2 from '@assets/avatar2.png';
import avatar3 from '@assets/avatar3.png';

const testimonials = [
  {
    name: "Mariana",
    age: "34 anos",
    avatar: avatar1,
    text: "Finalmente consegui seguir minha dieta por mais de um mês. As marinadas fizeram toda a diferença na minha rotina."
  },
  {
    name: "Carla",
    age: "28 anos",
    avatar: avatar2,
    text: "Nunca pensei que comer saudável pudesse ser tão gostoso! Perdi 5 kg sem sofrer absolutamente nada."
  },
  {
    name: "Rafael",
    age: "41 anos",
    avatar: avatar3,
    text: "A marinada de limão com ervas virou minha favorita. Faço toda semana sem falta, não fico mais sem."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground">
            O que dizem sobre nossas marinadas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="h-full border-border/50 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 text-sm sm:text-base leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                      <p className="text-xs text-foreground/60">{t.age}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
