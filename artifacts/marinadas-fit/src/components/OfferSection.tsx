import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const guarantees = [
  "Acesso imediato",
  "Material digital",
  "Pagamento seguro",
  "Garantia de 7 dias"
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground z-0" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-background/5 border-primary/30 backdrop-blur-md overflow-hidden">
            <div className="bg-secondary text-secondary-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
              Oferta por tempo limitado
            </div>
            
            <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-5xl font-bold font-serif text-white mb-8">
                Comece Sua Transformação
              </h2>
              
              <div className="mb-10 flex flex-col items-center">
                <span className="text-primary-foreground/60 line-through text-lg md:text-2xl mb-2">
                  De R$ 47,00
                </span>
                <div className="flex items-start justify-center text-white">
                  <span className="text-lg md:text-2xl mt-2 mr-2 font-bold">Por apenas</span>
                  <span className="text-5xl md:text-7xl font-black text-secondary drop-shadow-[0_0_15px_rgba(249,168,37,0.5)]">
                    R$ 19,90
                  </span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-2xl py-6 md:py-8 px-8 md:px-10 rounded-full font-bold uppercase tracking-wide shadow-[0_0_50px_rgba(76,175,80,0.5)] border border-primary-foreground/20 hover:scale-105 transition-transform duration-300 w-full md:w-auto mb-10"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl border-t border-primary-foreground/10 pt-8">
                {guarantees.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-primary-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 bg-background/10 py-4 px-8 rounded-full border border-primary-foreground/10">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                <span className="text-white font-medium">Garantia incondicional de 7 dias</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}