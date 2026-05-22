import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroImage from '@assets/hero.png';

export default function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden bg-foreground text-primary-foreground text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/95 via-foreground/85 to-foreground/95 z-10" />
        <img
          src={heroImage}
          alt="Frango grelhado suculento"
          loading="lazy"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span className="text-xs font-medium">+1.200 pessoas já baixaram</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Emagreça Sem <br />
          <span className="text-secondary italic">Abrir Mão</span> do Sabor
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubra as 15 marinadas que transformam qualquer proteína simples em uma refeição digna de restaurante, ajudando você a manter a dieta sem sofrimento.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={scrollToOffer}
            data-testid="button-hero-cta"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-wide px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(76,175,80,0.35)] border border-primary-foreground/20 hover:scale-105 transition-transform duration-300"
          >
            Quero Minhas Marinadas Fit
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="border-t border-primary-foreground/10 pt-4 w-full">
            <p className="text-xs text-primary-foreground/60 uppercase tracking-widest mb-3 font-semibold">Oferta Especial Termina Em:</p>
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
