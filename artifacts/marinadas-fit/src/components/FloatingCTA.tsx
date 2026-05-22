import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-foreground/95 backdrop-blur-md border-t border-primary/20 z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <Button 
        onClick={scrollToOffer}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full shadow-[0_0_20px_rgba(76,175,80,0.3)]"
      >
        QUERO COMEÇAR AGORA
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}