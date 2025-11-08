import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="gzhel-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.3" />
              <path d="M 80 100 Q 90 80, 100 100 T 120 100" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.3" />
              <circle cx="60" cy="60" r="5" fill="#3B82F6" opacity="0.3" />
              <circle cx="140" cy="140" r="5" fill="#3B82F6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#gzhel-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8 relative w-48 h-48 mx-auto">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="4"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#1E40AF"
              strokeWidth="4"
              strokeDasharray="502.4"
              strokeDashoffset={502.4 - (502.4 * progress) / 100}
              className="transition-all duration-300 ease-out"
              style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
            />
            
            <g className="animate-float">
              <path
                d="M 100 60 Q 80 80, 100 100 T 100 140"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="90" cy="75" r="4" fill="#1E40AF" />
              <circle cx="110" cy="75" r="4" fill="#1E40AF" />
              <path
                d="M 70 100 Q 75 95, 80 100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 120 100 Q 125 95, 130 100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Гжель
        </h1>
        <p className="text-muted-foreground mb-6">Загрузка приложения</p>
        
        <div className="w-64 mx-auto">
          <div className="h-2 bg-accent rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
