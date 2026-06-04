import React from "react";
import "./glow.css";

interface AmbientGlowProps {
    intensity?: "normal" | "high";
    showParticles?: boolean;
}

// Hardcoded static array prevents hydration mismatches and React re-render jumping
const PARTICLES = [
    { id: 1, left: "15%", delay: "0s", duration: "6s", size: "3px" },
    { id: 2, left: "85%", delay: "1s", duration: "8s", size: "2px" },
    { id: 3, left: "45%", delay: "2.5s", duration: "5s", size: "4px" },
    { id: 4, left: "30%", delay: "0.5s", duration: "7s", size: "2px" },
    { id: 5, left: "65%", delay: "4s", duration: "9s", size: "3px" },
    { id: 6, left: "75%", delay: "2s", duration: "6s", size: "4px" },
    { id: 7, left: "20%", delay: "3.5s", duration: "8s", size: "2px" },
    { id: 8, left: "55%", delay: "1.5s", duration: "5.5s", size: "3px" },
];

export default function AmbientGlow({
    intensity = "normal",
    showParticles = false,
}: AmbientGlowProps) {
    return (
        <div className="ambient-container">
            {/* The main glow */}
            <div className={`ambient-glow glow-${intensity}`} />

            {/* Conditionally render particles for the footer */}
            {showParticles && (
                <div className="particles-layer">
                    {PARTICLES.map((p) => (
                        <div
                            key={p.id}
                            className="particle"
                            style={{
                                left: p.left,
                                animationDelay: p.delay,
                                animationDuration: p.duration,
                                width: p.size,
                                height: p.size,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}