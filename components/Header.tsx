"use client";

import React from 'react';
import { MinimalTabs } from '@/components/ui/expandable-tabs';
import { Home, Bell, Settings, HelpCircle, Shield, MessageCircle } from 'lucide-react';

const Header = () => {
  const navigationTabs = [
    { 
      icon: Home,
      onClick: () => {
        const element = document.getElementById('hero');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: Bell,
      onClick: () => {
        const element = document.getElementById('pacotes');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: Settings,
      onClick: () => {
        const element = document.getElementById('depoimentos');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: HelpCircle,
      onClick: () => {
        const element = document.getElementById('contato');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: Shield,
      onClick: () => {
        // Pode abrir um modal ou ir para uma página de segurança
        alert('Políticas de Segurança');
      }
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold text-white font-serif drop-shadow-lg">
                Patagonia Premium
              </h1>
            </div>

            {/* Botões CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-6 py-2 text-white bg-white/20 backdrop-blur hover:bg-white/30 rounded-full font-medium transition-colors border border-white/30">
                Consultoria Grátis
              </button>
              <button className="px-6 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full font-medium transition-all transform hover:-translate-y-0.5">
                Reservar Agora
              </button>
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <button className="p-2 text-white hover:text-orange-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Minimalista Flutuante - Como na imagem */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <MinimalTabs 
          tabs={navigationTabs}
          className="shadow-xl"
        />
      </div>

      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os pacotes premium para Bariloche"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-pulse hover:animate-none"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </>
  );
};

export default Header;
