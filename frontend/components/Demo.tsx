'use client';

import { useState } from 'react';

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInput, setUserInput] = useState('');

  const steps = [
    {
      title: 'User enters their idea',
      description: 'Describe your idea in natural language',
      icon: '💡',
      demo: 'I want to create a delivery app for local restaurants'
    },
    {
      title: 'Pitch Agent refines the idea',
      description: 'AI asks strategic questions and defines features',
      icon: '💬',
      demo: '✓ Problem identified\n✓ Ideal user defined\n✓ Features prioritized\n✓ Template selected: CRUD App'
    },
    {
      title: 'Code Agent generates code',
      description: 'Generates frontend, backend, tests and documentation',
      icon: '💻',
      demo: '✓ 3,547 lines of code generated\n✓ React + Next.js frontend\n✓ AWS Lambda backend\n✓ DynamoDB schema\n✓ Tests included'
    },
    {
      title: 'GitHub MCP creates repository',
      description: 'Repo created automatically with code',
      icon: '📦',
      demo: '✓ Repo created: delivery-app-mvp\n✓ Code pushed\n✓ README generated\n✓ GitHub Actions configured'
    },
    {
      title: 'Jira MCP creates project',
      description: 'Automatic project management',
      icon: '📋',
      demo: '✓ Project created: DELIVERY\n✓ 12 tasks generated\n✓ Sprint 1 configured\n✓ Backlog organized'
    },
    {
      title: 'Slack MCP configures channel',
      description: 'Team communication ready',
      icon: '💬',
      demo: '✓ Channel created: #delivery-app-mvp\n✓ Bot configured\n✓ Notifications active\n✓ First message sent'
    },
    {
      title: 'Deploy Agent deploys',
      description: 'Live MVP on AWS',
      icon: '🚀',
      demo: '✓ Amplify app created\n✓ API Gateway configured\n✓ Lambda functions deployed\n✓ DynamoDB table active\n✓ SSL configured'
    },
    {
      title: 'MVP Live!',
      description: 'Your application is in production',
      icon: '🎉',
      demo: '✓ URL: delivery-app-mvp.mvpilot.app\n✓ Dashboard active\n✓ Monitoring 24/7\n✓ Cost: $0 (Free Tier)'
    }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Interactive <span className="text-brand-500">Demo</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            See how MVPilot transforms an idea into a complete MVP
          </p>
          <button
            onClick={playDemo}
            disabled={isPlaying}
            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? '▶️ Playing...' : '▶️ Play Demo'}
          </button>
        </div>

        {/* Demo Visualization */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  index === currentStep
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105'
                    : index < currentStep
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                }`}
              >
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{step.title}</div>
                {index === currentStep && (
                  <div className="mt-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                )}
                {index < currentStep && (
                  <div className="mt-2 text-green-600 text-xl">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* Current Step Detail */}
          <div className="bg-gray-900 rounded-xl p-6 text-white font-mono">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400">MVPilot Terminal</span>
            </div>
            <div className="space-y-2">
              <div className="text-green-400">$ mvpilot generate</div>
              <div className="text-gray-400">
                {steps[currentStep].description}
              </div>
              <div className="mt-4 whitespace-pre-line text-sm">
                {steps[currentStep].demo}
              </div>
              {currentStep === steps.length - 1 && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded">
                  <div className="text-green-400 font-bold mb-2">🎉 MVP Generated Successfully!</div>
                  <div className="text-sm text-gray-300">
                    Total time: 2 days | Cost: $0 | Lines of code: 3,547
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Manual Navigation */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0 || isPlaying}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1 || isPlaying}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
          <div className="text-white mb-4">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">Full Video Demo</h3>
            <p className="text-gray-400 mb-6">Watch the complete workflow in action (3 minutes)</p>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-400">Video demo coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
