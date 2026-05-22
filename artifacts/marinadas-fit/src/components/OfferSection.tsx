import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CHECKOUT_URL = 'https://pay.cakto.com.br/7mswjip_896258';

const guarantees = [
  "Acesso imediato",
  "Material digital",
  "Pagamento seguro",
  "Garantia de 7 dias"
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-12 md:py-20 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground z-0" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-background/5 border-primary/30 backdrop-blur-md overflow-hidden">
            <div className="bg-secondary text-secondary-foreground text-center py-2.5 font-bold uppercase tracking-widest text-xs">
              Oferta por tempo limitado
            </div>

            <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                Comece Sua Transformação
              </h2>

              <div className="mb-8 flex flex-col items-center">
                <span className="text-primary-foreground/60 line-through text-base sm:text-lg mb-1">
                  De R$ 47,00
                </span>
                <div className="flex items-baseline justify-center gap-2 text-white">
                  <span className="text-sm sm:text-base font-medium">Por apenas</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary drop-shadow-[0_0_15px_rgba(249,168,37,0.5)]">
                    R$ 19,90
                  </span>
                </div>
              </div>

              <a
                href={CHECKOUT_URL}
                data-testid="button-offer-cta"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-wide px-8 py-3.5 rounded-full shadow-[0_0_40px_rgba(76,175,80,0.4)] border border-primary-foreground/20 hover:scale-105 transition-transform duration-300 w-full sm:w-auto mb-8"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-4 w-full max-w-sm border-t border-primary-foreground/10 pt-6">
                {guarantees.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-primary-foreground/80 font-medium text-left">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 bg-background/10 py-3 px-6 rounded-full border border-primary-foreground/10">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-sm text-white font-medium">Garantia incondicional de 7 dias</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
