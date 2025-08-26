"use client";

import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full object-cover"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/85 to-emerald-700/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-serif font-semibold mb-6 text-shadow-lg leading-tight tracking-tight">
          Bariloche Premium
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-95 font-light tracking-wide">
          Experiências exclusivas na Patagônia Argentina
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl min-w-[250px]">
            Descobrir Experiências
          </button>
          <button className="px-8 py-4 bg-neutral-200/90 hover:bg-neutral-200 text-slate-800 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 hover:shadow-xl min-w-[250px]">
            Consultoria Personalizada
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={20} 
                  className="text-orange-400 fill-current" 
                />
              ))}
            </div>
            <span className="text-lg font-medium">4.9/5</span>
          </div>
          <p className="text-neutral-200 text-lg">
            847+ experiências premium realizadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
