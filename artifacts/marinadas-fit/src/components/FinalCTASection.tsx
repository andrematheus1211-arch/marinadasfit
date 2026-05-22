import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

export default function FinalCTASection() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Pare de Sofrer com Comida Sem Graça
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
            Você não precisa escolher entre emagrecer e comer bem.
          </p>

          <Button 
            size="lg"
            onClick={scrollToOffer}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl py-8 px-10 rounded-full font-bold uppercase tracking-wide shadow-xl hover:scale-105 transition-transform duration-300 w-full md:w-auto mb-16"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-center text-primary-foreground/80 uppercase tracking-widest mb-6 font-semibold">
              A oferta expira em breve:
            </p>
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}