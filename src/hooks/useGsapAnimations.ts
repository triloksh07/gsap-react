import { useEffect } from 'react';
import { type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * @param containerRef React ref pointing to the outer page wrapper/layout container.
 */
export const useGsapAnimations = (containerRef: RefObject<HTMLElement | null>, enabled: boolean): void => {
    useEffect(() => {

        if (!enabled) return;

        const container = containerRef.current;
        if (!container) return;

        const lenis = new Lenis({
            duration: 1.2,
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

        // Sync GSAP's tick with Lenis frames
        const onTicker = (time: number): void => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(onTicker);
        gsap.ticker.lagSmoothing(0);

        const tl = gsap.timeline();


        // GSAP Animations Context
        const ctx = gsap.context(() => {

            // ========== hero text reveal ==============

            const split = new SplitText(".hero-title", {
                type: "lines, words, chars",
                linesClass: "line"
            });
            const targets = split.chars;

            tl.fromTo(
                targets,
                {
                    yPercent: 120,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.02,
                    ease: "expo.out",
                    delay: 0.5,
                }
            )
                .fromTo(
                    ".hero-desc",
                    { y: 18, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.95,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .fromTo(
                    ".hero-actions",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.7"
                )
                .fromTo(
                    ".hero-scroll",
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .fromTo(
                    ".header",
                    { y: -40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.7"
                )
                .fromTo("#heroLoader",
                    { width: "0%" },
                    {
                        width: "100%",
                        duration: 2.5,
                        ease: "power2.inOut"
                    }, 0);

            gsap.fromTo(
                ".hero-head",
                { y: -5, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power1.out",
                    delay: 0.3,
                }
            );

            // =================================


            // ── DATA METRIC SCROLL ENGINE ────────────────────────

            document.querySelectorAll<HTMLElement>(".ag-stat__num").forEach((el) => {
                const target = parseInt(el.getAttribute("data-count") || "0", 10);
                const c = { v: 0 };
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    once: true,
                    onEnter: () => {
                        gsap.to(c, {
                            v: target,
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                el.textContent = String(Math.floor(c.v));
                            },
                        });
                    },
                });
            });

            gsap.fromTo(
                ".ag-stat",
                { opacity: 0.7, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: { trigger: ".ag-stats", start: "top 90%", once: true },
                }
            );

            // Page Grid Parallax effect
            gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((bg) => {
                if (bg.parentElement) {
                    gsap.to(bg, {
                        yPercent: 20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: bg.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                }
            });

            // Individual element scroll reveals
            gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((elem) => {
                gsap.fromTo(
                    elem,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.08,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%",
                        },
                    }
                );
            });

            gsap.fromTo(
                ".reveal-up",
                {
                    opacity: 0,
                    y: 18,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".reveal-up",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // image clip-path reveal
            gsap.utils.toArray<HTMLElement>(".reveal-img").forEach((elem) => {
                gsap.fromTo(
                    elem,
                    {
                        clipPath: "inset(0 100% 0 0)",
                    },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1.2,
                        // ease: "power3.out",
                        ease: "expo.inOut",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                            once: true,
                        },
                    }
                );
            });

            // Stats Section stagger fade-up
            gsap.fromTo(
                '.stat-block',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".stats-section",
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );

            // Project Cards transition
            gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
                gsap.fromTo(
                    card,
                    { y: 80, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
            });

            // Project Image Parallaxes
            gsap.utils.toArray<HTMLElement>('.project-img-bg').forEach((bg) => {
                const parentCard = bg.closest('.project-card');
                if (parentCard) {
                    gsap.to(bg, {
                        yPercent: 15,
                        ease: "none",
                        scrollTrigger: {
                            trigger: parentCard,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                }
            });

            // Work Section
            gsap.fromTo(
                '.work-card',
                { y: 18, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".work-section",
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );

            // Service row listings slide-in
            gsap.fromTo(
                '.service-row',
                { x: -12, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".services-section",
                        start: "top 80%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );

            // Pricing layout cards entry
            gsap.fromTo(
                '.pricing-card',
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".pricing-section",
                        start: "top 75%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                '.footer-reveal',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top 80%",
                        once: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.08,
                    ease: "power3.out",
                }
            );

        }, container);

        return () => {
            ctx.revert();
            gsap.ticker.remove(onTicker);
            lenis.off('scroll', onScroll);
            lenis.destroy();
        };
    }, [containerRef, enabled]);
};