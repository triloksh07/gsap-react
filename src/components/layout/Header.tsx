

const Header: React.FC = () => {
    return (
        <header className="header fixed top-0 w-full border-b border-white/5 bg-dark/80 backdrop-blur-md z-50">
            <div className="max-w-screen mx-auto px-8 h-15 flex items-center justify-between">
                <div className="text-brand font-mono font-bold text-2xl tracking-wider">
                    <span className="text-white">D</span>K<span className="text-brand">+</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 font-space text-xs uppercase text-gray-400">
                    {['Home', 'Work', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (

                        <a key={item} href="#" className=" transition-colors duration-300 ">{item}</a>


                    ))}
                </nav>

                <div className="flex items-center gap-4 font-space text-xs">
                    <div className="hidden sm:flex items-center border border-white/10 rounded">
                        <button className="px-3 py-1.5 hover:bg-white/5 transition-colors duration-300">AR</button>
                        <button className="px-3 py-1.5 bg-brand/10 text-brand">EN</button>
                    </div>
                    <button className="flex items-center gap-2 border border-white/10 px-4 py-2 bg-white/5 hover:bg-brand/10 hover:text-brand transition-all duration-300 uppercase tracking-widest group">
                        <span className="w-1.5 h-1.5 bg-brand group-hover:text-brand rounded-full transition-colors duration-300"></span>
                        Get Consultation
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;