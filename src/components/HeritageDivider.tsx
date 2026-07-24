import DayAtChamundi from "./DayAtChamundi";

export default function HeritageDivider() {
  return (
    <>
    <div className="w-full flex justify-center py-6 sm:py-8 overflow-hidden pointer-events-none select-none relative z-10">
      <svg 
        className="w-full max-w-xl h-8 opacity-65" 
        viewBox="0 0 400 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left gold fading line */}
        <path d="M 10 16 H 175" stroke="url(#fade-gold-left)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Right gold fading line */}
        <path d="M 225 16 H 390" stroke="url(#fade-gold-right)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Central Lotus Mandala Motif */}
        <g transform="translate(200, 16)" stroke="#C4873B" strokeWidth="1.2" fill="none">
          {/* Inner core */}
          <circle cx="0" cy="0" r="3.5" fill="#C4873B" />
          <circle cx="0" cy="0" r="8" strokeDasharray="2 2" />
          
          {/* Core diamond nodes */}
          <path d="M -12 0 L 0 -12 L 12 0 L 0 12 Z" strokeWidth="0.8" opacity="0.5" />
          
          {/* Detailed petal curls */}
          <path d="M -8 -8 C -12 -4 -12 4 -8 8 C -4 12 4 12 8 8 C 12 4 12 -4 8 -8 C 4 -12 -4 -12 -8 -8 Z" />
          <path d="M 0 -10 C 3 -10 6 -7 6 -2 C 6 3 3 6 0 6 C -3 6 -6 3 -6 -2 C -6 -7 -3 -10 0 -10 Z" transform="rotate(45)" />
          <path d="M 0 -10 C 3 -10 6 -7 6 -2 C 6 3 3 6 0 6 C -3 6 -6 3 -6 -2 C -6 -7 -3 -10 0 -10 Z" transform="rotate(-45)" />
        </g>
        
        <defs>
          <linearGradient id="fade-gold-left" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C4873B" />
            <stop offset="100%" stopColor="#C4873B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fade-gold-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C4873B" />
            <stop offset="100%" stopColor="#C4873B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
   </> 
  );
}
