import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { initScramble } from '@/lib/scrambleText';

/**
 * A dedicated hook that applies the modular text scramble effect to any 
 * elements matching [data-scramble] inside the target container ref.
 */
export const useScrambleAnimation = (
    containerRef: RefObject<HTMLElement | null>,
    enabled: boolean
): void => {
    useEffect(() => {
        if (!enabled) return;

        // We store the reference out here solely for the cleanup unmount function
        let savedCtx: gsap.Context | null = null;
        let frameId: number;

        const init = () => {
            const container = containerRef.current;

            if (!container) {
                frameId = requestAnimationFrame(init);
                return;
            }

            const ctx = gsap.context();

            initScramble(container, ctx);

            savedCtx = ctx;

        };

        init();

        return () => {
            cancelAnimationFrame(frameId);
            if (savedCtx) savedCtx.revert();
        };
    }, [containerRef, enabled]);
};