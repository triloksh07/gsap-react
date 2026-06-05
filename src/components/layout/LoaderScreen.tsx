import { useRef } from "react";
import Loader from "./Loader";
import { useLoader } from "../../hooks/useLoader";

interface LoaderScreenProps {
    onComplete: () => void;
}

const LoaderScreen = ({
    onComplete,
}: LoaderScreenProps) => {
    const percentRef = useRef<HTMLSpanElement>(null);

    useLoader({
        percentRef,
        onComplete,
    });

    return <Loader percentRef={percentRef} />;
};

export default LoaderScreen;