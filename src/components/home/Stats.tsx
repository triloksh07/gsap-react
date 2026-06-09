const Stats: React.FC = () => {
    const stats = [
        { count: "30", label: "Projects Delivered" },
        { count: "6", label: "Skilled Team" },
        { count: "6", label: "Years Experience" },
        { count: "100", label: "% Client-Focused" }
    ];

    return (
        <section className="astats-section ag-stats bg-brand text-dark py-10">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
                {stats.map((stat, i) => (
                    <div key={i} className="dstat-block ag-stat flex flex-col items-center opacity-0">
                        <span data-count={stat.count} className="ag-stat__num text-3xl md:text-[3.2rem] font-extrabold">0</span>
                        <span className="font-space text-xs tracking-wide uppercase mt-2 font-medium text-bg-dark/80">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;