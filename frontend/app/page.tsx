'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import DemoShowcase from '@/components/DemoShowcase';
import Demo from '@/components/Demo';
import TerminalDemo from '@/components/TerminalDemo';
import Metrics from '@/components/Metrics';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-mvpilot-black dark:via-mvpilot-black dark:to-mvpilot-black transition-colors duration-300">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <TerminalDemo />
      <DemoShowcase />
      <Demo />
      <Metrics />
      <CTA />
    </main>
  );
}
