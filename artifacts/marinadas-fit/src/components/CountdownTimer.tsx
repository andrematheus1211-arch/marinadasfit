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

  const Block = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-secondary bg-primary-foreground/10 w-12 sm:w-14 md:w-16 py-1.5 sm:py-2 rounded-lg text-center backdrop-blur-sm leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[9px] sm:text-[10px] text-primary-foreground/70 mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 max-w-full">
        <Block value={timeLeft.hours} label="Horas" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary pb-4 leading-none">:</span>
        <Block value={timeLeft.minutes} label="Min" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary pb-4 leading-none">:</span>
        <Block value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}
