import { useEffect, type RefObject } from "react";
import gsap from "gsap";

interface UseLoaderProps {
    percentRef: RefObject<HTMLSpanElement | null>;
    onComplete?: () => void;
}

export const useLoader = ({
    percentRef,
    onComplete,
}: UseLoaderProps) => {
    useEffect(() => {
        const counter = { value: 0 };

        const tl = gsap.timeline({
            onComplete,
        });

        tl.to(".loader-fill", {
            scaleX: 1,
            duration: 2,
            ease: "power2.inOut",
        });

        tl.to(
            counter,
            {
                value: 100,
                duration: 2,
                ease: "none",
                onUpdate: () => {
                    if (percentRef.current) {
                        percentRef.current.textContent = Math.round(
                            counter.value
                        ).toString();
                    }
                },
            },
            0
        );

        return () => {
            tl.kill();
        };
    }, [percentRef, onComplete]);
};