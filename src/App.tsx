import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/home/Hero';
import Pricing from './components/home/Pricing';
import SelectedWork from './components/home/SelectedWork';
import Services from './components/home/Services';
import Stats from './components/home/Stats';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Ticker from './components/Ticker';

import { useGsapAnimations } from './hooks/useGsapAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useGsapAnimations(appRef);

  // useEffect(() => {
  //   // Initialize standard Lenis smooth scrolling
  //   const lenis = new Lenis({
  //     duration: 2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Elegant, slow deceleration
  //     direction: 'vertical',
  //     gestureDirection: 'vertical',
  //     smooth: true,
  //     mouseMultiplier: 1,
  //     smoothTouch: false,  // Let native touch bounce handle mobile gestures
  //     touchMultiplier: 2,
  //     infinite: false,
  //   });

  //   lenis.on('scroll', ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });
  //   gsap.ticker.lagSmoothing(0);

  //   // 2. Setup GSAP Animations Context
  //   const ctx = gsap.context(() => {

  //     // Hero sequence
  //     gsap.fromTo(".hero-elem",
  //       { y: 50, opacity: 0 },
  //       {
  //         y: 0, opacity: 1,
  //         duration: 1.2,
  //         stagger: 0.2,
  //         ease: "power3.out",
  //         delay: 0.2,
  //         // clearProps: "all"
  //       }
  //     );

  //     // Hero Parallax
  //     gsap.utils.toArray('.parallax-bg').forEach(bg => {
  //       gsap.to(bg, {
  //         yPercent: 20,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: bg.parentElement,
  //           start: "top bottom",
  //           end: "bottom top", scrub: true
  //         }
  //       });
  //     });

  //     // Scroll reveals
  //     gsap.utils.toArray('.reveal-up').forEach(elem => {
  //       gsap.fromTo(elem,
  //         { y: 50, opacity: 0 },
  //         {
  //           scrollTrigger: {
  //             trigger: elem,
  //             start: "top 85%",
  //             toggleActions: "play none none reverse"
  //           },
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           ease: "power3.out",
  //           // clearProps: "all"
  //         }
  //       );
  //     });

  //     // Section staggers
  //     gsap.fromTo('.stat-block', {
  //       y: 40,
  //       opacity: 0
  //     }, {
  //       scrollTrigger: {
  //         trigger: ".stats-section",
  //         start: "top 85%"
  //       },
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.8, stagger: 0.15, ease: "power3.out", clearProps: "all"
  //     });

  //     gsap.utils.toArray('.project-card').forEach(card => {
  //       gsap.fromTo(card, {
  //         y: 80,
  //         opacity: 0
  //       }, {
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 80%"
  //         },
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         // clearProps: "transform"
  //       });
  //     });
  //     gsap.utils.toArray('.project-img-bg').forEach(bg => {
  //       gsap.to(bg, {
  //         yPercent: 15,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: bg.closest('.project-card'),
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true
  //         }
  //       });
  //     });
  //     gsap.fromTo('.service-row', {
  //       x: -40,
  //       opacity: 0
  //     }, {
  //       scrollTrigger: {
  //         trigger: ".services-section",
  //         start: "top 80%"
  //       },
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       // clearProps: "transform"
  //     });
  //     gsap.fromTo('.pricing-card', {
  //       y: 60,
  //       opacity: 0
  //     }, {
  //       scrollTrigger: {
  //         trigger: ".pricing-section",
  //         start: "top 75%"
  //       },
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       // clearProps: "transform"
  //     });
  //     gsap.fromTo('.footer-reveal', {
  //       y: 30,
  //       opacity: 0
  //     }, {
  //       scrollTrigger: {
  //         trigger: "footer",
  //         start: "top 90%"
  //       }, y: 0,
  //       opacity: 1,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: "power3.out",
  //       // clearProps: "transform"
  //     });
  //   }, appRef);

  //   return () => {
  //     ctx.revert();
  //     lenis.destroy();
  //   };
  // }, []);

  const tickerItems1 = ["+ Web Development", "+ Mobile Apps", "+ AI Solutions", "+ Brand Identity", "+ UI/UX Design", "+ Crypto", "+ SaaS", "+ E-Commerce"];
  const tickerItems2 = ["✦ SaaS", "✦ E-Commerce", "✦ Web Development", "✦ Mobile Apps", "✦ AI Solutions", "✦ Brand Identity", "✦ UI/UX Design", "✦ Crypto"];

  return (
    <div ref={appRef} className="bg-dark text-white selection:bg-brand selection:text-white min-h-screen overflow-x-hidden font-mono">
      {/* <GlobalStyles /> */}
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

      <button className="fixed bottom-6 right-6 bg-brand text-dark font-sans text-sm font-medium px-5 py-3 rounded-full hover:bg-orange-500 hover:scale-105 hover:shadow-[0_10px_20px_rgba(250,90,42,0.4)] transition-all duration-300 shadow-lg z-50 transform hover:-translate-y-1 text-center font-space">
        Get Consultation<br />
        <span className="text-[10px] font-normal opacity-80">powered by Calendly</span>
      </button>
    </div>
  );
}