import { motion } from 'framer-motion';
import discoveryImage from '@assets/discovery.png';

export default function DiscoverySection() {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 aspect-square max-w-sm mx-auto md:max-w-none">
              <img
                src={discoveryImage}
                alt="Frango marinado de perto"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground">
              O Segredo Está na Marinada
            </h2>
            <div className="w-12 h-1 bg-secondary rounded-full" />

            <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
              Uma simples marinada pode transformar uma proteína comum em uma refeição extremamente saborosa, mantendo a suculência, aumentando a saciedade e tornando sua alimentação muito mais prazerosa.
            </p>

            <div className="bg-background border border-primary/20 p-5 rounded-xl shadow-sm">
              <p className="text-sm sm:text-base font-medium text-foreground">
                <span className="text-primary mr-2">✦</span>
                Inclusive, preparar tudo leva menos de{' '}
                <span className="font-bold text-secondary-foreground">30 minutos por semana.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
