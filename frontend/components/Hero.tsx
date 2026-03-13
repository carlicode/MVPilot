'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass border border-brand-500/30 dark:border-brand-500/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-700 dark:text-brand-400 font-medium">
              Powered by AWS + Kiro AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center gradient-text animate-scale-in">
            From Idea to MVP
            <br />
            in 2 Days
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your AI copilot that transforms ideas into MVPs deployed on AWS,
            <span className="font-semibold text-gray-900 dark:text-white"> without writing a single line of code</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in">
            {[
              { value: '2 days', label: 'Average time', color: 'text-brand-500 dark:text-brand-400' },
              { value: '$0', label: 'Initial cost', color: 'text-brand-500 dark:text-brand-400' },
              { value: '10x', label: 'Faster', color: 'text-brand-500 dark:text-brand-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center interactive-card p-4 rounded-xl glass">
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-center text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-200 hover:scale-105">
              Generate Your MVP Free →
            </button>
            <button className="glass border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-200">
              Watch Demo (3 min)
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400 text-sm animate-fade-in">
            {[
              '100% AWS Free Tier',
              'No credit card required',
              'Automatic deployment'
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Workflow Diagram */}
        <div className="mt-20 relative animate-fade-in">
          <div className="glass rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {['💡 Idea', '🤖 AI Agents', '⚡ Deploy', '🚀 MVP Live'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-brand-500 hover:bg-brand-600 rounded-xl flex items-center justify-center text-3xl mb-2 pulse-slow group-hover:scale-110 transition-all shadow-lg">
                      {step.split(' ')[0]}
                    </div>
                    <div className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{step.split(' ').slice(1).join(' ')}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block mx-4 text-gray-400 dark:text-gray-600 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
