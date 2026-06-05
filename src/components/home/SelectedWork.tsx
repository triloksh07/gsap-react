import React from "react";
import ProjectCard from "./ProjectCard";

const SelectedWork: React.FC = () => (
    <section className="py-32 overflow-hidden bg-dark">
        <div className="max-w-7xl mx-auto px-6">
            <div className="reveal-up opacity-0 text-center mb-24">
                <h2 className="font-mono font-extrabold text-5xl md:text-[5.5rem] lg-text-[6.5rem] leading-[0.85] uppercase tracking-tighter">
                    Selected<br />
                    <span className="text-transparent w-full" style={{ WebkitTextStroke: '1px white' }}>Work</span>
                </h2>
            </div>
            <div className="flex flex-col gap-32">
                <ProjectCard
                    num="01"
                    title="MWT - Solar Engineering"
                    desc="Solar power systems built for real operating conditions. MWT Group studies, supplies, installs, commissions, and maintains renewable power systems."
                    image="/solar-power-system.webp"
                />
                <ProjectCard
                    num="02"
                    title="Domo Mark"
                    reverse={true}
                    desc="DomoMark is a focused Dubai property advisory platform built for buyers and investors who need clarity, not clutter."
                    image="/image-75-1024x691.webp"
                />
                <ProjectCard
                    num="03"
                    title="TARS Protocol"
                    desc="The leading AI architecture protocol on Solana - deploy and tokenise AI agents, discover and trade top AT tokens."
                    image="/tars.webp"
                />
            </div>
        </div>
    </section>
);

export default SelectedWork;