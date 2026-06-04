const ProjectCard = ({ num, title, desc, reverse }) => {
    return (
        <div className={`project-card opacity-0 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group cursor-pointer`}>
            <div className="w-full md:w-1/2 aspect-video bg-panel rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="project-img-bg absolute inset-0 bg-gray-800 opacity-50 scale-125 transform transition-transform duration-700 group-hover:scale-110"></div>
                <span className="font-space text-gray-500 relative z-10 transition-transform duration-500 group-hover:scale-110">Project Image Placeholder</span>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="font-space text-brand text-4xl font-bold">{num}</span>
                <h3 className="font-mono font-bold text-4xl tracking-wide uppercase transition-colors duration-300 group-hover:text-brand">{title}</h3>
                <p className="font-space text-gray-400 text-sm leading-relaxed max-w-md">{desc}</p>
            </div>
        </div>
    );
};

export default ProjectCard;