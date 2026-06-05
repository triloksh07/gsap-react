import { type RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const useGsapAnimations = (containerRef: RefObject<HTMLElement | null>): void => {

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        // --- 1. SMOOTH SCROLL SETUP ---
        const lenis = new Lenis({
            duration: 1.5, // Slightly lengthened for a premium, heavy feel
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            syncTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        const onScroll = () => ScrollTrigger.update();
        lenis.on('scroll', onScroll);

        const onTicker = (time: number): void => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(onTicker);
        gsap.ticker.lagSmoothing(0);

        // --- 2. PREMIUM ANIMATIONS ---

        // Hero Typography: The new line-by-line masked logic
        // const splitTextElements = document.querySelectorAll(".split");
        // if (splitTextElements.length) {
        //     // const split = new SplitType(".split", { type: "lines, words, chars" });
        //     gsap.from(split.words, {
        //         y: "100%",
        //         opacity: 0,
        //         rotateX: -20,
        //         transformOrigin: "0% 50% -50",
        //         duration: 1.4,
        //         stagger: 0.04, // Ultra-tight wave
        //         ease: "power4.out",
        //         delay: 0.1,
        //     });
        // }

        // Hero standard elements entry
        gsap.from(".hero-elem", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.2,
        });

        // Combined Parallax logic for Backgrounds & Projects
 
        // .parallax-bg, 

        // gsap.utils.toArray<HTMLElement>('.project-img-bg').forEach((bg) => {
        //     const triggerEl = bg.closest('.project-card') || bg.parentElement;
        //     if (triggerEl) {
        //         gsap.to(bg, {
        //             yPercent: 15, // Unified to 15% for consistent depth
        //             ease: "none",
        //             scrollTrigger: {
        //                 trigger: triggerEl,
        //                 start: "top bottom",
        //                 end: "bottom top",
        //                 scrub: true,
        //             },
        //         });
        //     }
        // });

        // Standard Image Wipes (Cinematic ease)
        gsap.utils.toArray<HTMLElement>(".reveal-img").forEach((elem) => {
            gsap.fromTo(elem,
                { clipPath: "inset(0 100% 0 0)" },
                {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.6,
                    ease: "power4.inOut", // inOut makes the wipe start slow, speed up, and end slow
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        // Individual element scroll reveals
        gsap.utils.toArray<HTMLElement>('.reveal-up, .project-card').forEach((elem) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            });
        });

        // Grouped Section Staggers (Stats, Work, Pricing, Footer)
        const staggerSections = [
            { trigger: ".stats-section", targets: ".stat-block" },
            { trigger: ".work-section", targets: ".work-card" },
            { trigger: ".pricing-section", targets: ".pricing-card" },
            { trigger: "footer", targets: ".footer-reveal" }
        ];

        staggerSections.forEach(({ trigger, targets }) => {
            gsap.from(targets, {
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: "power4.out",
            });
        });

        // Service row listings slide-in
        gsap.from('.service-row', {
            scrollTrigger: {
                trigger: ".services-section",
                start: "top 80%",
            },
            x: -60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
        });

        // --- 3. CUSTOM CLEANUP ---
        // useGSAP handles all the animation/scrollTrigger cleanup natively.
        // We only need to return a cleanup function for Lenis and our custom ticker.
        return () => {
            gsap.ticker.remove(onTicker);
            lenis.off('scroll', onScroll);
            lenis.destroy();
        };

    }, { scope: containerRef });
};