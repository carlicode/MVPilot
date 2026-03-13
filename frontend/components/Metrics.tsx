'use client';

import { useState } from 'react';

export default function Metrics() {
  const [activeTab, setActiveTab] = useState<'user' | 'mvpilot'>('user');

  const userMetrics = [
    { icon: '⏱️', value: '2 days', label: 'Tiempo de generación', color: 'text-brand-500' },
    { icon: '💰', value: '$15,000', label: 'Ahorro vs agencia', color: 'text-brand-500' },
    { icon: '📝', value: '3,547', label: 'Líneas de código', color: 'text-brand-500' },
    { icon: '🌐', value: '100%', label: 'Uptime garantizado', color: 'text-brand-500' },
    { icon: '📋', value: '12', label: 'Tasks en Jira', color: 'text-brand-500' },
    { icon: '💬', value: '24/7', label: 'Notificaciones Slack', color: 'text-brand-500' },
  ];

  const mvpilotMetrics = [
    { icon: '⚡', value: '10x', label: 'Más rápido', color: 'text-brand-500' },
    { icon: '💰', value: '$9.3B', label: 'Valor creado (3 años)', color: 'text-brand-500' },
    { icon: '🚀', value: '97%', label: 'Profit margin', color: 'text-brand-500' },
    { icon: '👥', value: '465K', label: 'MVPs generados', color: 'text-brand-500' },
    { icon: '🌍', value: '436M', label: 'Emprendedores empoderados', color: 'text-brand-500' },
    { icon: '💼', value: '1.4M', label: 'Empleos creados', color: 'text-brand-500' },
  ];

  return (
    <section id="metrics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Métricas que <span className="text-brand-500">Importan</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Impacto real y medible para usuarios y el ecosistema
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('user')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'user'
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Para el Usuario
            </button>
            <button
              onClick={() => setActiveTab('mvpilot')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'mvpilot'
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Impacto MVPilot
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeTab === 'user' ? userMetrics : mvpilotMetrics).map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        {activeTab === 'user' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Dashboard del Usuario (Vista Previa)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Real-time Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">📊 Métricas en Tiempo Real</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visitantes (24h)</span>
                    <span className="font-bold text-blue-600">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conversiones</span>
                    <span className="font-bold text-green-600">23 (18.1%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bounce rate</span>
                    <span className="font-bold text-orange-600">42%</span>
                  </div>
                </div>
              </div>

              {/* AWS Costs */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">💰 Costos AWS</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Este mes</span>
                    <span className="font-bold text-green-600">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Free Tier usado</span>
                    <span className="font-bold text-blue-600">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>

              {/* Jira Tasks */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">📋 Tareas en Jira</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completadas</span>
                    <span className="font-bold text-green-600">8/12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">En progreso</span>
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>

              {/* Slack Notifications */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">💬 Slack Activo</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600">MVP desplegado exitosamente</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500">ℹ️</span>
                    <span className="text-gray-600">10 nuevos usuarios hoy</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600">Error rate: 0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Impact */}
        {activeTab === 'mvpilot' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Impacto en el Mercado (Proyección 3 años)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$29.5M</div>
                <div className="text-gray-600">Profit acumulado</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">200K</div>
                <div className="text-gray-600">Usuarios (Year 3)</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <div className="text-3xl font-bold text-green-600 mb-2">301%</div>
                <div className="text-gray-600">Más emprendedores</div>
              </div>
            </div>

            {/* Growth Chart Placeholder */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Crecimiento Proyectado</h4>
              <div className="h-64 flex items-end justify-around space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 bg-blue-500 rounded-t" style={{ height: '30%' }}></div>
                  <span className="mt-2 text-sm text-gray-600">Year 1</span>
                  <span className="text-xs text-gray-500">$906K</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 bg-purple-500 rounded-t" style={{ height: '60%' }}></div>
                  <span className="mt-2 text-sm text-gray-600">Year 2</span>
                  <span className="text-xs text-gray-500">$6.2M</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 bg-pink-500 rounded-t" style={{ height: '100%' }}></div>
                  <span className="mt-2 text-sm text-gray-600">Year 3</span>
                  <span className="text-xs text-gray-500">$24.6M</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
