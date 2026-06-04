import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./cursor-glow.css";

const CursorGlow: React.FC = () => {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glowElement = glowRef.current;
        if (!glowElement) return;

        const parentElement = glowElement.parentElement;
        if (!parentElement) return;

        gsap.set(glowElement, {
            xPercent: -50,
            yPercent: -50,
        });

        const xTo = gsap.quickTo(glowElement, "left", {
            duration: 1,
            ease: "power3.out",
        });

        const yTo = gsap.quickTo(glowElement, "top", {
            duration: 1,
            ease: "power3.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = parentElement.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            xTo(x);
            yTo(y);
        };

        parentElement.addEventListener("mousemove", handleMouseMove);

        return () => {
            parentElement.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className="cursor-glow" ref={glowRef} />;
};

export default CursorGlow;