import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function FinalCTASection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Pare de Sofrer com Comida Sem Graça
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-8">
            Você não precisa escolher entre emagrecer e comer bem.
          </p>

          <button
            onClick={scrollToOffer}
            data-testid="button-final-cta"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base font-bold uppercase tracking-wide px-8 py-3.5 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto mb-10"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-xs text-primary-foreground/80 uppercase tracking-widest mb-4 font-semibold">
              A oferta expira em breve:
            </p>
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
