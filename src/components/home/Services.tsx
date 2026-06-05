const Services: React.FC = () => {
    const services = [
        { num: "01", title: "Brand Identity Design", desc: "Brand identity design in Dubai for UAE businesses that need strategy, logo." },
        { num: "02", title: "Logo Design", desc: "Logo design in Dubai for startups, SMEs, and growing UAE brands." },
        { num: "03", title: "Web Design", desc: "Web design company in Dubai creating fast, SEO-ready websites." },
        { num: "04", title: "Web Development", desc: "Website development company in Dubai building fast WordPress, Shopify, custom." }
    ];

    return (
        <section className="services-section py-24 border-t border-white/5 overflow-hidden bg-dark">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="reveal-up opacity-0 font-mono font-extrabold text-4xl md:text-[4.5rem] lg:text-[6.5rem] leading-none uppercase tracking-tighter text-center mb-16">
                    Our Digital<br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Services</span>
                </h2>
                <div className="flex flex-col border-t border-white/10">
                    {services.map((srv, i) => (
                        <div key={i} className="service-row opacity-0 py-8 border-b border-white/10 flex flex-col md:flex-row gap-6 md:gap-12 md:items-center hover:bg-white/3 hover:pl-6 transition-all duration-300 px-4 group">
                            <span className="font-space text-gray-500 w-8 group-hover:text-brand transition-colors">{srv.num}</span>
                            <h3 className="font-mono font-bold text-xl uppercase tracking-wide md:w-1/3 group-hover:text-brand transition-colors">{srv.title}</h3>
                            <p className="font-space text-gray-400 text-sm md:w-1/2">{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;