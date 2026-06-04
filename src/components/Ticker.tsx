const Ticker = ({ items, className = "" }) => (
    <div className={`w-full overflow-hidden flex relative z-10 ${className}`}>
        <div className="whitespace-nowrap flex font-space uppercase animate-ticker">
            {[...items, ...items].map((item, i) => (
                <span key={i} className="px-4">{item}</span>
            ))}
        </div>
    </div>
);

export default Ticker;