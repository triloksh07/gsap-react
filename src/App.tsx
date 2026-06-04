import React, { useRef } from 'react';
import "./App.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/home/Hero';
import Pricing from './components/home/Pricing';
import SelectedWork from './components/home/SelectedWork';
import Services from './components/home/Services';
import Stats from './components/home/Stats';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Ticker from './components/home/Ticker';

import { useGsapAnimations } from './hooks/useGsapAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useGsapAnimations(appRef);

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
    <div ref={appRef} className="bg-dark text-white selection:bg-brand selection:text-white min-h-screen overflow-x-hidden font-mono">
      <Header />
      
      <main>
        <Hero />
        <Ticker items={tickerItems1} className="border-y border-white/5 bg-darker py-3 text-xs text-brand/70 tracking-widest" />
        <Stats />
        <SelectedWork />
        <Services />
        <Pricing />
        <Ticker items={tickerItems2} className="bg-brand text-dark py-4 border-y border-darker text-sm font-bold tracking-widest" />
      </main>

      <Footer />

      <button className="fixed bottom-6 right-6 bg-brand font-sans text-sm font-medium px-5 py-3 rounded-full hover:bg-orange-500 hover:cursor-pointer z-50  text-center">
        Get Consultation<br />
        <span className="text-[10px] font-normal opacity-80">powered by Calendly</span>
      </button>
    </div>
  );
}