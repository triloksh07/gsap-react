import React from "react";

type PricingCardProps = {
    title: string;
    subtitle?: string;
    price: string;
    suffix?: string;
    description: string;
    features: string[];
    buttonText: string;
    featured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    subtitle,
    price,
    suffix,
    description,
    features,
    featured,
}) => {
    return (
        <div
            className={`
                relative border p-6 md:p-8 h-full
                flex flex-col
                ${featured ? "border-brand" : "border-white/5"}
            `}
        >
            {featured && (
                <span className="absolute -top-px right-4 bg-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Popular
                </span>
            )}

            <h3 className="font-heading text-base  font-bold text-text-primary">
                {title}
            </h3>

            {subtitle && (
                <span className="font-heading text-md md:text-2xl font-medium text-text-primary/35 leading-none mt-2">
                    {subtitle}
                </span>
            )}

            <div className="leading-none mt-2">
                <span className="font-heading text-brand text-2xl md:text-[2.4rem] font-extrabold">
                    {price}
                </span>

                {suffix && (
                    <span className="ml-2 font-mono text-xs text-text-dim">
                        {suffix}
                    </span>
                )}
            </div>

            <p className="font-mono text-xs leading-relaxed text-text-dim mt-2">
                {description}
            </p>


            <ul className="flex flex-col gap-2 my-4 min-h-32.5">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className="font-mono text-xs text-text-dim flex items-start gap-2"
                    >
                        <span className="text-brand font-bold">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                <button
                    data-scramble
                    className={`w-full font-space text-sm font-bold uppercase tracking-wide py-4 transition-all duration-300 hover:text-brand
                    ${title.includes("Subscription") || featured
                            ? "bg-brand border border-transparent hover:border-brand hover:bg-transparent"
                            : "border border-white/10 text-white hover:bg-transparent hover:border-brand"
                        }`}
                >
                    {title.includes("Enterprise")
                        ? "Let's Discuss"
                        : "Get Started"}
                </button>
            </div>
        </div>
    );
};

export const Pricing: React.FC = () => {
    const plans = [
        {
            title: "Monthly Subscription",
            subtitle: "Starts from",
            price: "3,500",
            suffix: "AED/mo",
            description:
                "Ongoing web, SEO, content, and design support for teams that need steady improvements every month.",
            features: [
                "Unlimited design & dev requests",
                "2-4 business day turnaround",
                "Unlimited revisions",
                "Pause or cancel anytime",
            ],
            buttonText: "Get Started",
        },
        {
            title: "Fixed Price",
            subtitle: "Starts from",
            price: "10,000",
            suffix: "AED+",
            description:
                "A clear scope, timeline, and launch plan for websites, SEO pages, brand systems, or campaign builds.",
            features: [
                "Custom scope assessment",
                "Web, mobile, or design projects",
                "Fixed timeline & deliverables",
                "Unlimited revisions included",
                "Post-launch support",
            ],
            buttonText: "Get Started",
            featured: true,
        },
        {
            title: "Custom Enterprise",
            price: "Let's Discuss",
            description:
                "Custom digital growth programs for larger websites, multilingual SEO, ecommerce, and platform builds.",
            features: [
                "Dedicated development teams",
                "Web, mobile, AI & blockchain",
                "SaaS & E-commerce platforms",
                "Priority & ongoing support",
            ],
            buttonText: "Let's Discuss",
        },
    ];

    return (
        <section className="pricinsg-section py-24">
            <div className="max-w-250 mx-auto px-4">
                <h2 className=" reveal-up font-extrabold text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[0.85] uppercase tracking-tighter mb-16 text-center text-text-primary">
                    Pricing
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 items-stretch">
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.title}
                            {...plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;