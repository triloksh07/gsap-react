import AmbientGlow from "../ui/BgGlow";
import VerticalGrid from "../ui/VerticalGridUpdated";

const Footer = () => (
    <footer className="bg-darker pt-24 pb-12 relative overflow-hidden">

        <VerticalGrid direction="up" showPulse={false} />
        <AmbientGlow intensity="high" showParticles={true} />

        {/* <div className="absolute inset-x-0 bottom-0 top-[35%] pointer-events-none z-0">
            <AmbientGlow intensity="high" showParticles={true} />
        </div> */}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

            <h2 className="footer-reveal opacity-0 font-mono font-extrabold text-5xl md:text-[9rem] leading-[0.9] w-max uppercase tracking-tighter mb-8">
                Let's Build<br /> Together
            </h2>
            <a href="mailto:" className="footer-reveal opacity-0 font-space text-brand text-lg md:text-xl tracking-wider hover:text-white transition-colors duration-300 mb-16">
                hello@k3studios.ae
            </a>
            <div className="footer-reveal opacity-0 flex flex-col md:flex-row gap-16 md:gap-32 font-space text-xs uppercase tracking-widest text-left mb-16">
                <div><span className="text-gray-500 block mb-2 text-[10px]">Location</span>Dubai, UAE</div>
                <div>
                    <span className="text-gray-500 block mb-2 text-[10px]">Social</span>
                    <a href="#" className="block hover:text-brand transition-colors duration-300 mb-1">Instagram</a>
                    <a href="#" className="block hover:text-brand transition-colors duration-300">Dribbble</a>
                </div>
            </div>
            <div className="footer-reveal opacity-0 flex flex-col items-center gap-4 text-gray-500 font-space text-[10px] uppercase tracking-widest text-center max-w-sm">
                <div className="text-brand font-mono font-bold text-2xl tracking-wider mb-2">
                    <span className="text-white">D</span>K<span className="text-brand">+</span>
                </div>
                <p>A Dubai digital agency for web design, SEO, branding, and growth-focused marketing.</p>
                <p className="mt-4 opacity-50">&copy; {new Date().getFullYear()} DK Studios. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;