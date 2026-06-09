import type { TickerProps } from "../../lib/types";

const Ticker: React.FC<TickerProps> = ({
    items,
    className = "",
}) => {
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`marquee-text ${className}`}>
            <div className="marquee-text-track">
                {duplicatedItems.map((item, index) => (
                    <span
                        key={index}
                        aria-hidden={index >= items.length}
                        className="ticker-item"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Ticker;