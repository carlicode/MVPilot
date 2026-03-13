'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    // Detect language from pathname or browser
    const lang = pathname?.startsWith('/en') ? 'en' : 'es';
    setCurrentLang(lang);
  }, [pathname]);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
    // Reload with new language
    if (lang === 'en' && !pathname?.startsWith('/en')) {
      router.push('/en');
    } else if (lang === 'es' && pathname?.startsWith('/en')) {
      router.push('/');
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          currentLang === 'es'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        🇪🇸 ES
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          currentLang === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
