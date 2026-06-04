import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
// import VerticalGrid from '../ui/VerticalGrid';
import VerticalGrid from '../ui/VerticalGridUpdated';
import AmbientGlow from '../ui/AmbientGlow';
import CursorGlow from '../ui/CursorGlow';

import Text3DFlip from "../ui/text-3d-flip"

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">

            <VerticalGrid />
            <AmbientGlow />
            <CursorGlow />


            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">


                <div className="hero-elem font-mono text-brand text-xs tracfking-[0.2em] uppercase border border-brand/20 px-4 py-1.5 rounded-10 opacity-0">


                    <Text3DFlip
                        className="bg-background"
                        textClassName="bg-background text-foreground"
                        flipTextClassName="bg-background text-foreground"
                        rotateDirection="top"
                        staggerDuration={0.015}
                        // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        transition={{ type: "tween", duration: 0.25 }}

                    >
                        Digital Agency - Dubai, UAE


                    </Text3DFlip>

                </div>

                <h1 className="hero-elem font-mono font-extrabold text-6xl lg:text-[6.5rem] leading-[0.95] uppercase tracking-tighter opacity-0">
                    Full-Service <br />
                    Digital Agency <br />
                    <span className="text-brand">In Dubai</span>
                </h1>

                <p className="hero-elem font-space text-gray-400 text-sm lg:text-md max-w-lg mst-4 leading-relaxed opacity-0">
                    Web design, SEO, branding, and digital marketing for UAE businesses that need clearer growth online.
                </p>

                <div className="hero-elem flex flex-col sm:flex-row gap-4 mt-4 opacity-0">
                    <a href="#" className="bg-brand border border-transparent font-mono text-sm font-bold uppercase tracdking-widest px-8 py-4 hover:bg-transparent hover:border-brand hover:text-brand transition-all duration-300">
                        See Our Work
                    </a>
                    <a href="#" className="border border-white/10 text-white font-mono text-sm font-bold uppercase tradcking-widest px-8 py-4 hover:border-brand  transition-all duration-300 flex items-center justify-center gap-2">
                        Book A Call →
                    </a>
                </div>
            </div>

            <div className="hero-elem opacity-0 absolute bottom-12 font-space text-xs tracking-[0.2em] text-gray-500 uppercase">
                Scroll
            </div>
        </section>
    );
};

export default Hero;
