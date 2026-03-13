'use client';

export default function Problem() {
  const problems = [
    {
      icon: '💸',
      title: '$5K-$50K',
      description: 'Costo promedio de un MVP con agencia'
    },
    {
      icon: '⏰',
      title: '6-12 semanas',
      description: 'Tiempo de espera para tu primer MVP'
    },
    {
      icon: '👨‍💻',
      title: '90%',
      description: 'De emprendedores sin tech co-founder'
    },
    {
      icon: '❌',
      title: '48%',
      description: 'De startups fallan por problemas de ejecución'
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            El Problema es <span className="text-red-600 dark:text-red-500">Enorme</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            582 millones de emprendedores en el mundo, pero el 75% no tienen background técnico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-red-100 dark:border-red-900"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">{problem.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{problem.description}</div>
            </div>
          ))}
        </div>

        {/* Pain Point Story */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-red-200 dark:border-red-900">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6 text-center">😰</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              "Tengo una idea brillante, pero..."
            </h3>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>No sé programar y aprender me tomaría años</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Contratar una agencia cuesta $20,000 y toma 3 meses</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Encontrar un tech co-founder toma 6+ meses</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Mientras tanto, pierdo momentum y oportunidades</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-red-600 dark:text-red-500">
                Ideas brillantes mueren por falta de ejecución técnica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
