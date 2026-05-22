import { motion } from 'framer-motion';

export default function PainSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Seu Problema <span className="text-primary italic">Não É</span> Falta de Disciplina
        </motion.h2>

        <motion.div 
          className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Se você já desistiu de uma dieta porque não aguentava mais comer peito de frango seco e sem gosto, saiba que o problema não era sua força de vontade.
          </p>
          <p className="font-semibold text-foreground">
            É impossível manter uma alimentação saudável quando a comida parece um castigo.
          </p>
          <p>
            Dietas fracassam porque são sem prazer. A culpa não é sua. A culpa é do frango sem graça.
          </p>
        </motion.div>
      </div>
    </section>
  );
}