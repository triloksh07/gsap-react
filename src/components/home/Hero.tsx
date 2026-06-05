
import VerticalGrid from '../ui/VerticalGrid';
import AmbientGlow from '../ui/AmbientGlow';
import CursorGlow from '../ui/CursorGlow';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[96vh] flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">

            <VerticalGrid />
            <AmbientGlow />
            <CursorGlow />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">

                <div className="hero-head font-mono text-brand text-xs tracfking-[0.2em] uppercase border border-brand/20 px-4 py-1.5 rounded-10 opacity-0">
                    Digital Agency - Dubai, UAE
                </div>

                <h1 className="hero-title font-mono font-extrabold text-4xl md:text-6xl lg:text-[6.5rem] leading-[0.95] uppercase tracking-tighter">
                    Full-Service <br />
                    Digital Agency <br />
                    <span className="text-brand">In Dubai</span>
                </h1>

                <p className="hero-desc font-space text-text-dim text-sm lg:text-md max-w-110 leading-relaxed opacity-0">
                    Web design, SEO, branding, and digital marketing for UAE businesses that need clearer growth online.
                </p>

                <div className="hero-actions flex flex-col sm:flex-row gap-4 mt-2 opacity-0 w-full md:w-normal items-center justify-center">
                    <a href="#" className="bg-brand border border-transparent font-mono text-xs md:text-sm font-bold uppercase px-4 md:px-4 py-3 hover:bg-transparent hover:border-brand hover:text-brand transition-all duration-300 w-full md:w-40">
                        See Our Work
                    </a>
                    <a href="#" className="border border-white/10 text-white font-mono text-xs md:text-sm font-bold uppercase px-4 md:px-6- py-3 hover:border-brand  transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-40">
                        Book A Call →
                    </a>
                </div>
            </div>

            <div className="hero-scroll opacity-0 absolute bottom-12 font-space text-xs tracking-[0.2em] text-text-dim uppercase">
                Scroll
            </div>
        </section>
    );
};

export default Hero;
