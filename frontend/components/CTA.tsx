'use client';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mvpilot-black dark:bg-mvpilot-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Ready to Build Your MVP?
        </h2>
        <p className="text-xl text-center text-white/90 mb-8">
          Join thousands of entrepreneurs already building with MVPilot
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
            Start Free →
          </button>
          <button className="border-2 border-brand-500 text-white hover:bg-brand-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Schedule Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">15K+</div>
            <div className="text-white/80">MVPs Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">$0</div>
            <div className="text-white/80">To Start</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
            <div className="mb-4 md:mb-0">
              <span className="font-semibold text-white">MVPilot</span> - Powered by AWS + Kiro AI
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">Docs</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>
          <div className="mt-4 text-white/60 text-xs">
            © 2026 MVPilot. Participant in 10,000 AIdeas Competition.
          </div>
        </div>
      </div>
    </section>
  );
}
