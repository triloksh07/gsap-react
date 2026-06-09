const Services: React.FC = () => {
    const services = [
        {
            num: "01",
            title: "Brand Identity Design",
            desc: "Brand identity design in Dubai for UAE businesses that need strategy, logo."
        },
        {
            num: "02",
            title: "Logo Design",
            desc: "Logo design in Dubai for startups, SMEs, and growing UAE brands."
        },
        {
            num: "03",
            title: "Web Design",
            desc: "Web design company in Dubai creating fast, SEO-ready websites."
        },
        {
            num: "04",
            title: "Web Development",
            desc: "Website development company in Dubai building fast WordPress, Shopify, custom."
        },
        {
            num: "05",
            title: "BLOCKCHAIN DEVELOPMENT",
            desc: "Blockchain and Web3 development in Dubai for smart contracts, Defi products, token..."
        },
    ];

    return (
        <section className="services-section py-24 border-t border-white/5 overflow-hidden bg-dark mt-78 md:mt-8">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="reveal-up font-mono font-extrabold text-5xl md:text-[4.5rem] lg:text-[6.5rem] leading-none uppercase tracking-tighter text-center mb-16">
                    Our Digital
                    <br />
                    <span
                        className="text-transparent"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        Services
                    </span>
                </h2>

                <div className="services-list flex flex-col border-t border-white/10">
                    {services.map((srv, i) => (
                        <div
                            key={i}
                            className="
                        service-row
                        py-4
                        border-b border-white/10
                        flex items-center gap-8
                        px-0
                        transition-all duration-300
                        hover:px-4
                        hover:bg-brand/8
                        group
                    "
                        >
                            <span className="w-10 text-text-dim font-space text-sm">
                                {srv.num}
                            </span>

                            <h3 data-scramble  className="font-mono font-extrabold uppercase tracking-wide md:w-1/3">
                                {srv.title}
                            </h3>

                            <p className="hidden md:block md:w-1/2 text-sm text-text-dim">
                                {srv.desc}
                            </p>

                            <span
                                className="
                            ml-auto
                            opacity-0
                            -translate-x-2
                            transition-all duration-300
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            group-hover:text-brand
                        "
                            >
                                →
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;