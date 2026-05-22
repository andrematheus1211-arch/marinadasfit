import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ebookCover from '@assets/ebook_cover.png';

const checklist = [
  "15 receitas exclusivas de marinadas fit",
  "Receitas rápidas e fáceis",
  "Ingredientes simples",
  "Passo a passo completo",
  "Combinações para frango, peixe e carne",
  "Método para preparar tudo em apenas 30 minutos"
];

export default function WhatYouGetSection() {
  return (
    <section className="py-12 md:py-20 bg-[#1B5E20] text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-xs mx-auto">
              <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full" />
              <img
                src={ebookCover}
                alt="Marinadas Fit eBook"
                loading="lazy"
                className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
              O Que Você Vai <span className="text-secondary italic">Receber</span>
            </h2>

            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
