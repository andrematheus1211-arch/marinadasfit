import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-center font-mono">
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-secondary bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-xs text-primary-foreground/80 mt-1 uppercase tracking-widest">Horas</span>
      </div>
      <span className="text-3xl font-bold text-secondary pb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-secondary bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-xs text-primary-foreground/80 mt-1 uppercase tracking-widest">Min</span>
      </div>
      <span className="text-3xl font-bold text-secondary pb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-bold text-secondary bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="text-xs text-primary-foreground/80 mt-1 uppercase tracking-widest">Seg</span>
      </div>
    </div>
  );
}