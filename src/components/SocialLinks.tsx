export const FacebookLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const InstagramLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <radialGradient id="ig-grad-bg-shared" cx="30%" cy="107%" r="150%">
      <stop offset="0%" stopColor="#fdf497" />
      <stop offset="5%" stopColor="#fdf497" />
      <stop offset="45%" stopColor="#fd5949" />
      <stop offset="60%" stopColor="#d6249f" />
      <stop offset="90%" stopColor="#285AEB" />
    </radialGradient>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad-bg-shared)" />
    <path
      d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.2c-1.765 0-3.2-1.435-3.2-3.2s1.435-3.2 3.2-3.2 3.2 1.435 3.2 3.2-1.435 3.2-3.2 3.2zm5.25-9.15c-.635 0-1.15.515-1.15 1.15s.515 1.15 1.15 1.15 1.15-.515 1.15-1.15-.515-1.15-1.15-1.15z"
      fill="#ffffff"
    />
  </svg>
);

export const YoutubeLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="#FF0000"
    />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#ffffff" />
  </svg>
);

interface SocialLinksProps {
  title?: string;
  dark?: boolean;
}

export default function SocialLinks({ title = "Stay Connected with Chamundi", dark = true }: SocialLinksProps) {
  return (
    <div className="space-y-3">
      {title && (
        <p className={`font-body text-xs font-bold uppercase tracking-widest ${dark ? 'text-accent' : 'text-primary'}`}>
          {title}
        </p>
      )}
      <div className="flex items-center gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${
            dark 
              ? 'bg-white/5 border border-white/10 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/60 hover:shadow-[#1877F2]/20'
              : 'bg-white border border-border hover:bg-[#1877F2]/10 hover:border-[#1877F2]/60 hover:shadow-[#1877F2]/20'
          }`}
          aria-label="Facebook"
        >
          <FacebookLogo />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${
            dark 
              ? 'bg-white/5 border border-white/10 hover:bg-gradient-to-tr hover:from-[#fdf497]/20 hover:to-[#d6249f]/20 hover:border-[#E4405F]/60 hover:shadow-[#E4405F]/20'
              : 'bg-white border border-border hover:bg-gradient-to-tr hover:from-[#fdf497]/20 hover:to-[#d6249f]/20 hover:border-[#E4405F]/60 hover:shadow-[#E4405F]/20'
          }`}
          aria-label="Instagram"
        >
          <InstagramLogo />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${
            dark 
              ? 'bg-white/5 border border-white/10 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/60 hover:shadow-[#FF0000]/20'
              : 'bg-white border border-border hover:bg-[#FF0000]/10 hover:border-[#FF0000]/60 hover:shadow-[#FF0000]/20'
          }`}
          aria-label="YouTube"
        >
          <YoutubeLogo />
        </a>
      </div>
    </div>
  );
}
