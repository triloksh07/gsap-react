import React, { useRef, useState } from 'react';
import "./App.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { useScrambleAnimation } from './hooks/useScramble';

import Hero from './components/home/Hero';
import Pricing from './components/home/Pricing';
import SelectedWork from './components/home/SelectedWork';
import Services from './components/home/Services';
import Stats from './components/home/Stats';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Ticker from './components/home/Ticker';
import WhoWeWorkWith from './components/home/WhoWeWorkWith';
import LoaderScreen from './components/layout/LoaderScreen';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  // useTextRevealAnimations(appRef, !loading)
  useScrambleAnimation(appRef, !loading);
  useGsapAnimations(appRef, !loading);

  const tickerItems1 = [
    "✦ Web Development",
    "✦ Mobile Apps",
    "✦ AI Solutions",
    "✦ Brand Identity",
    "✦ UI/UX Design",
    "✦ Crypto",
    "✦ SaaS",
    "✦ E-Commerce"
  ];

  const tickerItems2 = [
    "✦ SaaS",
    "✦ E-Commerce",
    "✦ Web Development",
    "✦ Mobile Apps",
    "✦ AI Solutions",
    "✦ Brand Identity",
    "✦ UI/UX Design",
    "✦ Crypto"
  ];

  return (
    <div ref={appRef} className="bg-dark text-white min-h-screen overflow-x-hidden font-mono">

      {loading && (
        <LoaderScreen
          onComplete={() => setLoading(false)}
        />
      )}

      {!loading && (
        <>
          <Header />

          <main>
            <Hero />
            <Ticker items={tickerItems1} className="border-y border-white/5 bg-gb-dark py-2 text-xs text-brand/70 tracking-widest font-light" />
            {/* Continuous Linear Loader Simulation */}
            <div id="heroLoader" className="relative bottom-0 left-0 h-0.5 bg-brand w-0" />
            <Stats />
            <SelectedWork />
            <WhoWeWorkWith />
            <Services />
            <Pricing />
            <Ticker items={tickerItems2} className="bg-brand text-dark py-4 border-y border-darker text-md font-bold tracking-widest" />
          </main>

          <Footer />

          <button className="fixed bottom-6 right-6 bg-brand font-sans text-sm font-medium px-6 py-1.5 rounded-full hover:bg-orange-500 hover:cursor-pointer z-50  text-center">
            Get Consultation<br />
            <span className="text-text-primary font-normal">powered by Calendly</span>
          </button>
        </>
      )}
    </div>
  );
}