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
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1200 1200">
          <defs>
            <pattern id="gzhel-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                <path d="M 150 100 Q 130 110, 140 130 Q 145 140, 155 135 Q 165 130, 160 120 Q 155 110, 150 100" 
                      fill="#1E40AF" opacity="0.4" />
                <path d="M 140 130 Q 135 145, 145 155 L 155 155 Q 165 145, 160 130" 
                      fill="#3B82F6" opacity="0.3" />
                <circle cx="150" cy="100" r="3" fill="#1E40AF" opacity="0.5" />
                <path d="M 120 150 Q 115 155, 120 160 Q 125 165, 130 160 Q 135 155, 130 150 Q 125 145, 120 150" 
                      fill="#60A5FA" opacity="0.3" />
                <path d="M 180 180 Q 175 185, 180 190 Q 185 195, 190 190 Q 195 185, 190 180 Q 185 175, 180 180" 
                      fill="#3B82F6" opacity="0.3" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="1200" fill="url(#gzhel-pattern)" />
        </svg>
      </div>

      <div className="absolute top-10 left-10 opacity-10 animate-float" style={{ animationDuration: '6s' }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <path d="M 60 20 Q 40 30, 50 50 Q 55 60, 65 55 Q 75 50, 70 40 Q 65 30, 60 20" 
                fill="#1E40AF" />
          <path d="M 50 50 Q 45 65, 55 75 L 65 75 Q 75 65, 70 50" 
                fill="#3B82F6" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 opacity-10 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#3B82F6" strokeWidth="3" />
          <path d="M 30 50 Q 40 30, 50 50 T 70 50" fill="none" stroke="#1E40AF" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-10 relative w-56 h-56 mx-auto animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-blue-50/20 rounded-full blur-2xl animate-pulse" 
               style={{ animationDuration: '3s' }} />
          
          <svg viewBox="0 0 220 220" className="w-full h-full relative z-10">
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <circle
              cx="110"
              cy="110"
              r="90"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="5"
            />
            <circle
              cx="110"
              cy="110"
              r="90"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="5"
              strokeDasharray="565.5"
              strokeDashoffset={565.5 - (565.5 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
              style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
              filter="url(#glow)"
            />
            
            <g className="animate-float" style={{ animationDuration: '3s' }}>
              <circle cx="110" cy="110" r="65" fill="white" opacity="0.9" />
              
              <path
                d="M 110 70 Q 95 75, 100 90 Q 105 100, 115 95 Q 125 90, 120 75 Q 115 70, 110 70"
                fill="#3B82F6"
                opacity="0.85"
              />
              <path
                d="M 100 90 Q 95 105, 105 115 L 115 115 Q 125 105, 120 90"
                fill="#60A5FA"
                opacity="0.7"
              />
              
              <path
                d="M 80 110 Q 75 115, 80 120 Q 85 125, 90 120 Q 95 115, 90 110 Q 85 105, 80 110"
                fill="#1E40AF"
                opacity="0.6"
              />
              <path
                d="M 130 110 Q 125 115, 130 120 Q 135 125, 140 120 Q 145 115, 140 110 Q 135 105, 130 110"
                fill="#1E40AF"
                opacity="0.6"
              />
              
              <path
                d="M 85 135 Q 95 145, 110 140 Q 125 145, 135 135"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              
              <circle cx="95" cy="95" r="2.5" fill="#1E40AF" />
              <circle cx="125" cy="95" r="2.5" fill="#1E40AF" />
            </g>
          </svg>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
            Гжель
          </h1>
          <p className="text-lg text-primary/70 mb-2 font-medium">Традиционный русский промысел</p>
          <p className="text-sm text-muted-foreground mb-8">Загружаем красоту...</p>
          
          <div className="w-80 mx-auto">
            <div className="h-1.5 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-900 to-blue-600 transition-all duration-300 ease-out rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            <p className="text-xs text-primary/60 mt-3 font-medium tracking-wider">{progress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;