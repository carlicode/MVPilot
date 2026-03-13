'use client';

export default function Problem() {
  const problems = [
    {
      icon: '💸',
      title: '$5K-$50K',
      description: 'Average MVP cost with agency'
    },
    {
      icon: '⏰',
      title: '6-12 weeks',
      description: 'Wait time for your first MVP'
    },
    {
      icon: '👨‍💻',
      title: '90%',
      description: 'Entrepreneurs without tech co-founder'
    },
    {
      icon: '❌',
      title: '48%',
      description: 'Startups fail due to execution problems'
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            The Problem is <span className="text-red-600 dark:text-red-500">Huge</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            582 million entrepreneurs worldwide, but 75% have no technical background
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
              "I have a brilliant idea, but..."
            </h3>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>I don't know how to code and learning would take years</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Hiring an agency costs $20,000 and takes 3 months</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Finding a tech co-founder takes 6+ months</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-bold">❌</span>
                <p>Meanwhile, I lose momentum and opportunities</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-red-600 dark:text-red-500">
                Brilliant ideas die from lack of technical execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
