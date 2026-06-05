import AmbientGlow from "../ui/AmbientGlow";
import VerticalGrid from "../ui/VerticalGrid";

const Footer: React.FC = () => (
    <footer className="bg-darker pt-24 pb-12 relative overflow-hidden">

        <VerticalGrid direction="up" showPulse={false} />
        <AmbientGlow intensity="high" showParticles={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

            <h2 className="footer-reveal opacity-0 font-mono font-extrabold text-5xl md:text-[9rem] leading-[0.9] w-max uppercase tracking-tighter mb-8">
                Let's Build<br /> Together
            </h2>
            <a href="mailto:" className="footer-reveal opacity-0 font-space text-brand text-md md:text-xl tracking-wider hover:text-white transition-colors duration-300 mb-8">
                hello@k3studios.ae
            </a>
            <div className="footer-reveal opacity-0 flex flex-col md:flex-row gap-4 md:gap-32 font-space text-xs uppercase tracking-widest text-center mb-16">
                <div><span className="text-gray-500 block mb-2 text-[10px]">Location</span>Dubai, UAE</div>
                <div>
                    <span className="text-gray-500 block mb-2 text-[10px]">Social</span>
                    <a href="#" className="block hover:text-brand transition-colors duration-300 mb-1">Instagram</a>
                    <a href="#" className="block hover:text-brand transition-colors duration-300">Dribbble</a>
                </div>
            </div>
            <div className="footer-reveal opacity-0 flex flex-col items-center gap-4 text-gray-500 font-space text-[10px] uppercase tracking-widest text-center max-w-sm pb-12 md:pb-8">
                <div className="text-brand font-mono font-bold text-2xl tracking-wider mb-2">
                    <span className="text-white">D</span>K<span className="text-brand">+</span>
                </div>
                <p>A Dubai digital agency for web design, SEO, branding, and growth-focused marketing.</p>
                <p className="mt-0 opacity-50">&copy; {new Date().getFullYear()} DK Studios. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;