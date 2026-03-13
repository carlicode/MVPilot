'use client';

import { useState } from 'react';

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInput, setUserInput] = useState('');

  const steps = [
    {
      title: 'Usuario ingresa su idea',
      description: 'Describe tu idea en lenguaje natural',
      icon: '💡',
      demo: 'Quiero crear una app de delivery para restaurantes locales'
    },
    {
      title: 'Pitch Agent refina la idea',
      description: 'AI hace preguntas estratégicas y define features',
      icon: '💬',
      demo: '✓ Problema identificado\n✓ Usuario ideal definido\n✓ Features priorizadas\n✓ Template seleccionado: CRUD App'
    },
    {
      title: 'Code Agent genera código',
      description: 'Genera frontend, backend, tests y documentación',
      icon: '💻',
      demo: '✓ 3,547 líneas de código generadas\n✓ React + Next.js frontend\n✓ AWS Lambda backend\n✓ DynamoDB schema\n✓ Tests incluidos'
    },
    {
      title: 'GitHub MCP crea repositorio',
      description: 'Repo creado automáticamente con código',
      icon: '📦',
      demo: '✓ Repo creado: delivery-app-mvp\n✓ Código pushed\n✓ README generado\n✓ GitHub Actions configurado'
    },
    {
      title: 'Jira MCP crea proyecto',
      description: 'Project management automático',
      icon: '📋',
      demo: '✓ Proyecto creado: DELIVERY\n✓ 12 tasks generadas\n✓ Sprint 1 configurado\n✓ Backlog organizado'
    },
    {
      title: 'Slack MCP configura canal',
      description: 'Comunicación del equipo lista',
      icon: '💬',
      demo: '✓ Canal creado: #delivery-app-mvp\n✓ Bot configurado\n✓ Notificaciones activas\n✓ Primer mensaje enviado'
    },
    {
      title: 'Deploy Agent despliega',
      description: 'MVP live en AWS',
      icon: '🚀',
      demo: '✓ Amplify app creada\n✓ API Gateway configurado\n✓ Lambda functions desplegadas\n✓ DynamoDB table activa\n✓ SSL configurado'
    },
    {
      title: 'MVP Live!',
      description: 'Tu aplicación está en producción',
      icon: '🎉',
      demo: '✓ URL: delivery-app-mvp.mvpilot.app\n✓ Dashboard activo\n✓ Monitoring 24/7\n✓ Costo: $0 (Free Tier)'
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
            Demo <span className="text-brand-500">Interactivo</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Mira cómo MVPilot transforma una idea en un MVP completo
          </p>
          <button
            onClick={playDemo}
            disabled={isPlaying}
            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? '▶️ Reproduciendo...' : '▶️ Reproducir Demo'}
          </button>
        </div>

        {/* Demo Visualization */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progreso</span>
              <span className="text-sm font-medium text-gray-700">
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
                    ? 'border-blue-500 bg-blue-50 scale-105'
                    : index < currentStep
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{step.title}</div>
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
                  <div className="text-green-400 font-bold mb-2">🎉 ¡MVP Generado Exitosamente!</div>
                  <div className="text-sm text-gray-300">
                    Tiempo total: 24 minutos | Costo: $0 | Líneas de código: 3,547
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
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>
            <div className="text-sm text-gray-600">
              Paso {currentStep + 1} de {steps.length}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1 || isPlaying}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
          <div className="text-white mb-4">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">Video Demo Completo</h3>
            <p className="text-gray-400 mb-6">Mira el workflow completo en acción (3 minutos)</p>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-400">Video demo próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
