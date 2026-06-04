import "./vertical-grid.css";

const LINES = [
    { id: 1, left: "3%" },
    { id: 2, left: "26%" },
    { id: 3, left: "50%", center: true },
    { id: 4, left: "74%" },
    { id: 5, left: "97%" },
];

export default function VerticalGrid() {
    return (
        <div className="grid-overlay">

            {LINES.map((line) => (
                <div
                    key={line.id}
                    className={`grid-line ${line.center ? "center-line" : ""}`}
                    style={{ left: line.left }}
                >
                    <span className="travel-dot" />
                </div>
            ))}

            <div className="center-pulse" />

        </div>
    );
}