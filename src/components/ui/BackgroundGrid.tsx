export default function BackgroundGrid() {
    return (
        <div className="background-grid">
            {[...Array(4)].map((_, i) => (
                <span key={i} className="v-line" />
            ))}

            {[...Array(8)].map((_, i) => (
                <span key={i} className="h-line" />
            ))}
        </div>
    );
}