export interface TickerProps {
    items: string[];
    className?: string;
}


export interface ProjectCardProps {
    num: string;
    title: string;
    desc: string;
    reverse?: boolean;
    placeholderText?: string;
}

export interface PricingCardProps {
    title: string;
    price: string;
    subtitle?: string;
    desc: string;
    features: string[];
    highlighted?: boolean;
}

