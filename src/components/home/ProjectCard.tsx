import React from "react";
import type { ProjectCardProps } from "@/lib/types";

const ProjectCard: React.FC<ProjectCardProps> = ({ num, title, desc, reverse, image }) => {
    return (
        <div className={`project-card opacity-0 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group cursor-pointer`}>
            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-video bg-panel rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden">


                <div className="reveal-img absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover scale-125 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="font-space text-brand text-4xl font-bold">{num}</span>
                <h3 className="font-mono font-bold text-4xl tracking-wide uppercase transition-colors duration-300 group-hover:text-brand">{title}</h3>
                <p className="font-space text-gray-400 text-sm leading-relaxed max-w-md">{desc}</p>
            </div>
        </div>
    );
};

export default ProjectCard;