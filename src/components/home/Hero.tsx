import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
            <div
                className="parallax-bg absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBMMjAgNjBMMjAgMEwwIDBaIi8+PHBhdGggZD0iTTYwIDBMMCAwTDAgMjBMNjAgMjBaIi8+PC9nPjwvc3ZnPg==')] opacity-20 z-0 h-[150%] -top-[20%]"
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
                <div className="hero-elem font-space text-brand text-xs md:text-sm tracking-[0.2em] uppercase border border-brand/20 px-4 py-1.5 rounded-full opacity-0">
                    Digital Agency - Dubai, UAE
                </div>

                <h1 className="hero-elem font-mono font-extrabold text-6xl md:text-[6.5rem] leading-[0.95] uppercase tracking-tighter opacity-0">
                    Full-Service <br />
                    Digital Agency <br />
                    <span className="text-brand">In Dubai</span>
                </h1>

                <p className="hero-elem font-space text-gray-400 text-sm md:text-base max-w-lg mt-4 leading-relaxed opacity-0">
                    Web design, SEO, branding, and digital marketing for UAE businesses that need clearer growth online.
                </p>

                <div className="hero-elem flex flex-col sm:flex-row gap-4 mt-8 opacity-0">
                    <a href="#" className="bg-brand text-dark font-space text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-orange-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,90,42,0.4)] transition-all duration-300">
                        See Our Work
                    </a>
                    <a href="#" className="border border-white/20 text-white font-space text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                        Book A Call <ArrowUpRight className="text-brand w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="hero-elem opacity-0 absolute bottom-12 font-space text-xs tracking-[0.2em] text-gray-500 uppercase animate-pulse">
                Scroll
            </div>
        </section>
    );
};

export default Hero;
