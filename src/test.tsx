import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // Note: Requires Club GreenSock
// import SplitType from 'split-type';

// Register SplitText if you are using the GSAP premium version
gsap.registerPlugin(SplitText);

export default function PremiumHeroText() {
    const containerRef = useRef(null);
    // 'split-type' or 'gsap-splittext'
    // const [libraryType, setLibraryType] = useState('split-type');
    const [libraryType, setLibraryType] = useState('gsap-splittext');

    useLayoutEffect(() => {
        // Create a GSAP context scoped to our container ref
        const ctx = gsap.context(() => {
            // let targets;

            const split = new SplitText(".hero-text", {
                type: "lines, words, chars",
                linesClass: "line"
            });

            const targets = split.words;

            // if (libraryType === 'gsap-splittext') {
            //     // --- GSAP SplitText Implementation ---
            //     const split = new SplitText(".hero-text", {
            //         type: "lines, words, chars",
            //         linesClass: "line"
            //     });
            //     targets = split.words;
            // } else {
            //     // --- SplitType Implementation ---
            //     // const split = new SplitType(".hero-text", {
            //     //     types: "lines, words, chars"
            //     // });
            //     // targets = split.words;
            // }

            // Exact animation configuration from your setup
            gsap.from(targets, {
                y: "100%",
                opacity: 0,
                rotateX: -20,
                transformOrigin: "0% 50% -50",
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.2,
            });

        }, containerRef);

        // Re-run animation and clean up old splits if library type changes
        return () => ctx.revert();
    }, [libraryType]);

    return (
        <div ref={containerRef} style={{ padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>

            {/* Toggle Controls */}
            <div style={{ marginBottom: '2rem' }}>
                <button
                    onClick={() => setLibraryType('split-type')}
                    style={{ marginRight: '10px', padding: '8px 12px', background: libraryType === 'split-type' ? '#fff' : '#333', color: libraryType === 'split-type' ? '#000' : '#fff' }}
                >
                    Use SplitType (Free)
                </button>
                <button
                    onClick={() => setLibraryType('gsap-splittext')}
                    style={{ padding: '8px 12px', background: libraryType === 'gsap-splittext' ? '#fff' : '#333', color: libraryType === 'gsap-splittext' ? '#000' : '#fff' }}
                >
                    Use GSAP SplitText (Premium)
                </button>
            </div>

            {/* Target Text */}
            <h1 className="hero-text" style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1.2 }}>
                Crafting premium digital experiences with flawless motion.
            </h1>
        </div>
    );
}