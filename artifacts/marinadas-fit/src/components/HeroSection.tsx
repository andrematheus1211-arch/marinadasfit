import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import heroImage from '@assets/hero.png';

export default function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-foreground text-primary-foreground">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent z-10" />
        <img src={heroImage} alt="Gourmet grilled chicken" className="w-full h-full object-cover object-right opacity-60" />
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">+1.200 pessoas já baixaram</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Emagreça Sem <br />
            <span className="text-secondary italic">Abrir Mão</span> do Sabor
          </motion.h1>

          <motion.p 
            className="text-sm md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Descubra as 15 marinadas que transformam qualquer proteína simples em uma refeição digna de restaurante, ajudando você a manter a dieta sem sofrimento.
          </motion.p>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToOffer}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-8 px-8 rounded-full font-bold uppercase tracking-wide shadow-[0_0_40px_rgba(76,175,80,0.4)] border border-primary-foreground/20 hover:scale-105 transition-transform duration-300 w-full md:w-auto"
            >
              Quero Minhas Marinadas Fit
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <div className="pt-6 border-t border-primary-foreground/10">
              <p className="text-sm text-center text-primary-foreground/60 uppercase tracking-widest mb-4 font-semibold">Oferta Especial Termina Em:</p>
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}