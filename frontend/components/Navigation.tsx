'use client';

import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-mvpilot-black/95 backdrop-blur-md border-b border-gray-200 dark:border-mvpilot-gray-panel z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="MVPilot Logo" className="w-10 h-10 rounded-lg shadow-lg" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              MVPilot
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
              {t('nav.problem')}
            </a>
            <a href="#solution" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
              {t('nav.solution')}
            </a>
            <a href="#demo" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
              {t('nav.demo')}
            </a>
            <a href="#metrics" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
              {t('nav.metrics')}
            </a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-mvpilot-gray-panel rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-mvpilot-black text-gray-900 dark:text-white shadow-sm'
                    : 'text-mvpilot-gray-text dark:text-mvpilot-gray-text'
                }`}
              >
                🇺🇸 EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'es'
                    ? 'bg-white dark:bg-mvpilot-black text-gray-900 dark:text-white shadow-sm'
                    : 'text-mvpilot-gray-text dark:text-mvpilot-gray-text'
                }`}
              >
                🇪🇸 ES
              </button>
            </div>
            
            <ThemeToggle />
            
            <button className="hidden md:block bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
              {t('nav.getStarted')}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-mvpilot-gray-panel transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <a href="#problem" className="block px-4 py-2 text-mvpilot-gray-text dark:text-mvpilot-gray-text hover:bg-gray-100 dark:hover:bg-mvpilot-gray-panel rounded-lg transition-colors">
              {t('nav.problem')}
            </a>
            <a href="#solution" className="block px-4 py-2 text-mvpilot-gray-text dark:text-mvpilot-gray-text hover:bg-gray-100 dark:hover:bg-mvpilot-gray-panel rounded-lg transition-colors">
              {t('nav.solution')}
            </a>
            <a href="#demo" className="block px-4 py-2 text-mvpilot-gray-text dark:text-mvpilot-gray-text hover:bg-gray-100 dark:hover:bg-mvpilot-gray-panel rounded-lg transition-colors">
              {t('nav.demo')}
            </a>
            <a href="#metrics" className="block px-4 py-2 text-mvpilot-gray-text dark:text-mvpilot-gray-text hover:bg-gray-100 dark:hover:bg-mvpilot-gray-panel rounded-lg transition-colors">
              {t('nav.metrics')}
            </a>
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              {t('nav.getStarted')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
