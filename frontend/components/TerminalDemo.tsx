'use client';

import { useState, useEffect } from 'react';

export default function TerminalDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const terminalSteps = [
    {
      command: '$ mvpilot init "Tutor Marketplace"',
      output: [
        '🤖 Initializing MVPilot...',
        '✓ Analyzing idea...',
        '✓ Generating architecture...',
        '✓ Creating project structure...',
      ],
      delay: 800,
    },
    {
      command: '$ mvpilot deploy',
      output: [
        '🚀 Starting deployment...',
        '⚡ Agent 1: Generating frontend (React + Next.js)...',
        '⚡ Agent 2: Building backend (Node.js + Express)...',
        '⚡ Agent 3: Setting up database (PostgreSQL)...',
        '⚡ Agent 4: Configuring AWS infrastructure...',
        '⚡ Agent 5: Running tests & quality checks...',
      ],
      delay: 600,
    },
    {
      command: '',
      output: [
        '✓ Frontend deployed to CloudFront',
        '✓ Backend deployed to Lambda',
        '✓ Database provisioned on RDS',
        '✓ CI/CD pipeline configured',
        '✓ Monitoring dashboard active',
        '',
        '🎉 MVP deployed successfully!',
        '🌐 Live URL: https://tutor-market.mvpilot.app',
        '📊 Dashboard: https://dashboard.mvpilot.app',
        '💰 Cost: $0.00 (AWS Free Tier)',
        '⏱️  Time: 2 days',
      ],
      delay: 500,
    },
  ];

  useEffect(() => {
    if (currentStep >= terminalSteps.length) {
      // Reset animation after completion
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setDisplayedText('');
      }, 5000);
      return () => clearTimeout(timer);
    }

    const step = terminalSteps[currentStep];
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = step.command ? `${step.command}\n` : '';
    
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (lineIndex < step.output.length) {
        const currentLine = step.output[lineIndex];
        
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayedText(currentText);
          charIndex++;
        } else {
          currentText += '\n';
          setDisplayedText(currentText);
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
          setDisplayedText('');
        }, step.delay);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentStep]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-mvpilot-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Watch MVPilot in Action
          </h2>
          <p className="text-xl text-gray-400">
            See how 5 AI agents work in parallel to build your MVP
          </p>
        </div>

        {/* Terminal Window */}
        <div className="glass rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          {/* Terminal Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-brand-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">
              mvpilot-terminal
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-mvpilot-black p-6 font-mono text-sm min-h-[400px] relative">
            <pre className="text-brand-400 whitespace-pre-wrap">
              {displayedText}
              {isTyping && <span className="animate-pulse">▊</span>}
            </pre>

            {/* Progress Indicator */}
            {currentStep < terminalSteps.length && (
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i <= currentStep ? 'bg-brand-500' : 'bg-gray-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <span>Step {currentStep + 1}/3</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Below Terminal */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: '⚡', label: '5 AI Agents', value: 'Parallel' },
            { icon: '🚀', label: 'Deployment', value: '2 days' },
            { icon: '💰', label: 'Cost', value: '$0' },
            { icon: '✓', label: 'Success Rate', value: '95%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-lg p-4 text-center hover:border-brand-500 transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-brand-400">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
