'use client';

export default function Solution() {
  const agents = [
    {
      icon: '💬',
      name: 'Pitch Agent',
      description: 'Refines your idea with AI conversation',
      time: '3-5 min',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💻',
      name: 'Code Agent',
      description: 'Generates 3,500+ lines of code',
      time: '10-15 min',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🚀',
      name: 'Deploy Agent',
      description: 'Deploys to AWS automatically',
      time: '5-8 min',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '📊',
      name: 'Monitoring Agent',
      description: 'Dashboards and alerts 24/7',
      time: '2-3 min',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔄',
      name: 'Workflow Agent',
      description: 'Jira + Slack + Calendar',
      time: '3-5 min',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            The Solution: <span className="text-brand-500">5 AI Agents</span>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your complete technical team working in parallel
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                {agent.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{agent.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{agent.description}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {agent.time}
              </div>
            </div>
          ))}
          
          {/* Total Time Card */}
          <div className="bg-brand-500 hover:bg-brand-600 rounded-xl p-6 shadow-lg text-white flex flex-col justify-center items-center transition-all">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-4xl font-bold mb-2">2 days</div>
            <div className="text-lg opacity-90">Total time</div>
            <div className="mt-4 text-sm opacity-75">vs. 6-12 weeks traditional</div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-green-200 dark:border-green-800">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            What you get in 2 days
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🌐', text: 'Live MVP in production with public URL' },
              { icon: '💾', text: 'Complete code on GitHub (3,500+ lines)' },
              { icon: '📋', text: 'Jira project with 12 organized tasks' },
              { icon: '💬', text: 'Slack channel with active notifications' },
              { icon: '📊', text: 'Dashboard with 13 real-time metrics' },
              { icon: '☁️', text: '12 AWS services configured and running' },
              { icon: '🔒', text: 'SSL certificate and custom domain' },
              { icon: '📧', text: 'Automatic weekly reports via email' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
