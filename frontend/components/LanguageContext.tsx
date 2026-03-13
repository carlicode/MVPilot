'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.problem': 'Problem',
    'nav.solution': 'Solution',
    'nav.demo': 'Demo',
    'nav.metrics': 'Metrics',
    'nav.getStarted': 'Get Started Free',
    'hero.badge': 'Powered by AWS + Kiro AI',
    'hero.title': 'From Idea to MVP\nin 2 Days',
    'hero.subtitle': 'Your AI copilot that transforms ideas into MVPs deployed on AWS, without writing a single line of code',
    'hero.cta.primary': 'Generate Your MVP Free →',
    'hero.cta.secondary': 'Watch Demo (3 min)',
    'hero.trust.freeTier': '100% AWS Free Tier',
    'hero.trust.noCard': 'No credit card required',
    'hero.trust.autoDeploy': 'Automatic deployment',
    'problem.title': 'The Problem is Huge',
    'problem.subtitle': '582 million entrepreneurs worldwide, but 75% have no technical background',
    'solution.title': 'The Solution: 5 AI Agents',
    'solution.subtitle': 'Your complete technical team working in parallel',
    'demo.title': 'Interactive Demo',
    'demo.subtitle': 'See how MVPilot transforms an idea into a complete MVP',
    'demo.play': 'Play Demo',
    'demo.playing': 'Playing...',
    'metrics.title': 'Metrics that Matter',
    'metrics.subtitle': 'Real and measurable impact for users and the ecosystem',
    'metrics.tab.user': 'For the User',
    'metrics.tab.mvpilot': 'MVPilot Impact',
    'cta.title': 'Ready to Build Your MVP?',
    'cta.subtitle': 'Join thousands of entrepreneurs already building with MVPilot',
    'cta.start': 'Start Free',
    'cta.demo': 'Schedule Demo',
  },
  es: {
    'nav.problem': 'Problema',
    'nav.solution': 'Solución',
    'nav.demo': 'Demo',
    'nav.metrics': 'Métricas',
    'nav.getStarted': 'Empezar Gratis',
    'hero.badge': 'Powered by AWS + Kiro AI',
    'hero.title': 'De Idea a MVP\nen 2 Días',
    'hero.subtitle': 'Tu copiloto AI que transforma ideas en MVPs desplegados en AWS, sin escribir una sola línea de código',
    'hero.cta.primary': 'Genera tu MVP Gratis →',
    'hero.cta.secondary': 'Ver Demo (3 min)',
    'hero.trust.freeTier': '100% AWS Free Tier',
    'hero.trust.noCard': 'Sin tarjeta de crédito',
    'hero.trust.autoDeploy': 'Despliegue automático',
    'problem.title': 'El Problema es Enorme',
    'problem.subtitle': '582 millones de emprendedores en el mundo, pero el 75% no tienen background técnico',
    'solution.title': 'La Solución: 5 AI Agents',
    'solution.subtitle': 'Tu equipo técnico completo trabajando en paralelo',
    'demo.title': 'Demo Interactivo',
    'demo.subtitle': 'Mira cómo MVPilot transforma una idea en un MVP completo',
    'demo.play': 'Reproducir Demo',
    'demo.playing': 'Reproduciendo...',
    'metrics.title': 'Métricas que Importan',
    'metrics.subtitle': 'Impacto real y medible para usuarios y el ecosistema',
    'metrics.tab.user': 'Para el Usuario',
    'metrics.tab.mvpilot': 'Impacto MVPilot',
    'cta.title': '¿Listo para Construir tu MVP?',
    'cta.subtitle': 'Únete a miles de emprendedores que ya están construyendo con MVPilot',
    'cta.start': 'Empezar Gratis',
    'cta.demo': 'Agendar Demo',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
