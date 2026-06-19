import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, backgroundImage, breadcrumb }: PageHeroProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <>
      <Helmet>
        <title>{title} | Chamundi Hill Palace</title>
      </Helmet>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-dark/55" />
        </div>
        <div
          ref={ref}
          className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-white/60 font-body text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ArrowRight size={12} />
            <span className="text-accent">{breadcrumb}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-heading text-lg sm:text-xl italic text-white/80">{subtitle}</p>
          )}
        </div>

      </section>
    </>
  );
}
