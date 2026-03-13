'use client';

import { useState, useEffect } from 'react';

export default function DemoShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('demo-showcase');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="demo-showcase" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-mvpilot-black dark:to-mvpilot-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            See MVPilot in <span className="text-brand-500">Action</span>
          </h2>
          <p className="text-xl text-center text-mvpilot-gray-text dark:text-mvpilot-gray-text max-w-3xl mx-auto">
            Real dashboard showing your MVP metrics, project management, and deployment status
          </p>
        </div>

        {/* Main Demo Image */}
        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl"></div>
          
          {/* Demo container */}
          <div className="relative bg-white/50 dark:bg-mvpilot-gray-panel/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-200 dark:border-brand-500/30 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-200 dark:border-brand-500/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-brand-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-mvpilot-gray-panel/30 dark:bg-mvpilot-gray-panel rounded-lg px-4 py-1 text-sm text-mvpilot-gray-text text-center">
                  https://your-mvp.mvpilot.app
                </div>
              </div>
            </div>

            {/* Demo image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/landing.png" 
                alt="MVPilot Dashboard Demo" 
                className="w-full h-auto"
              />
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-mvpilot-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-mvpilot-gray-panel/90 border border-brand-500/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-brand-500">2 days</div>
                    <div className="text-xs text-center text-mvpilot-gray-text">Generation Time</div>
                  </div>
                  <div className="bg-mvpilot-gray-panel/90 border border-brand-500/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-brand-500">3,547</div>
                    <div className="text-xs text-center text-mvpilot-gray-text">Lines of Code</div>
                  </div>
                  <div className="bg-mvpilot-gray-panel/90 border border-brand-500/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-brand-500">$0</div>
                    <div className="text-xs text-center text-mvpilot-gray-text">Cost</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start space-x-3 p-4 bg-mvpilot-gray-panel/50 dark:bg-mvpilot-gray-panel border border-brand-500/20 rounded-lg hover:border-brand-500/50 transition-all">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-semibold text-center text-gray-900 dark:text-white mb-1">Real-time Metrics</h3>
                  <p className="text-sm text-center text-mvpilot-gray-text">13 metrics tracking your MVP performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-mvpilot-gray-panel/50 dark:bg-mvpilot-gray-panel border border-brand-500/20 rounded-lg hover:border-brand-500/50 transition-all">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="font-semibold text-center text-gray-900 dark:text-white mb-1">Jira Integration</h3>
                  <p className="text-sm text-center text-mvpilot-gray-text">Auto-created tasks and project management</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-mvpilot-gray-panel/50 dark:bg-mvpilot-gray-panel border border-brand-500/20 rounded-lg hover:border-brand-500/50 transition-all">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-semibold text-center text-gray-900 dark:text-white mb-1">Slack Notifications</h3>
                  <p className="text-sm text-center text-mvpilot-gray-text">Real-time updates in your workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            Try It Now - It's Free →
          </button>
        </div>
      </div>
    </section>
  );
}
