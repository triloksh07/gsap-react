import React from "react";
import type { ProjectCardProps } from "@/lib/types";

const ProjectCard: React.FC<ProjectCardProps> = ({ num, title, desc, reverse, image }) => {
    return (
        <div className={`project-card opacity-0 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group `}>
            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-video rounded-none flex items-center justify-center relative overflow-hidden">
                <div className="reveal-img absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover duration-700"
                    />
                </div>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="font-space text-brand text-3xl md:text-4xl font-bold">{num}</span>
                <h3 data-scramble className="font-mono font-bold text-1xl md:text-4xl tracking-wide uppercase transition-colors duration-300 ">{title}</h3>
                <p className="font-space text-text-dim text-sm leading-relaxed max-w-md">{desc}</p>
                <button
                    data-scramble
                    className="items-center gap-2 w-fit font-mono text-xs uppercase tracking-wider text-brand transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                >
                    <span>View Case Study →</span>
                </button>

            </div>
        </div>
    );
};

export default ProjectCard;