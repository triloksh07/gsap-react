// import { useRef } from "react";

interface LoaderProps {
    percentRef: React.RefObject<HTMLSpanElement | null>;
    //  const percentRef = useRef<HTMLSpanElement>(null);
}

const Loader = ({ percentRef }: LoaderProps) => {
    return (
        <div className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-background">
            <div className="w-52 text-center">

                {/* Logo */}
                <div className="mb-6 text-3xl font-bold text-white">
                    DK
                </div>

                {/* Track */}
                <div className="h-px bg-white/10 overflow-hidden">
                    <div className="loader-fill h-full w-full bg-brand origin-left scale-x-0" />
                </div>

                {/* Counter */}
                <span
                    ref={percentRef}
                    className="mt-4 block text-[10px] tracking-[0.25em] font-mono text-text-dim"
                >
                    0
                </span>

            </div>
        </div>
    );
};

export default Loader;