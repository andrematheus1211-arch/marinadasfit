import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import mockupImage from '@assets/mockup.png';

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
    <section className="py-24 bg-[#1B5E20] text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
              <img 
                src={mockupImage} 
                alt="Marinadas Fit eBook" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 text-white">
              O Que Você Vai <span className="text-secondary italic">Receber</span>
            </h2>
            
            <ul className="space-y-6">
              {checklist.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-lg text-primary-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}