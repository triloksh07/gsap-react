const Stats: React.FC = () => {
    const stats = [
        { num: "30", label: "Projects Delivered" },
        { num: "6", label: "Skilled Team" },
        { num: "6", label: "Years Experience" },
        { num: "100", label: "% Client-Focused" }
    ];

    return (
        <section className="stats-section bg-brand text-dark py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-block flex flex-col items-center opacity-0">
                        <span className="text-5xl md:text-7xl font-bold">{stat.num}</span>
                        <span className="font-space text-xs tracking-widest uppercase mt-2 font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;