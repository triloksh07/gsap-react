import type { PricingCardProps } from '@/lib/types';
import { Check } from 'lucide-react';

const PricingCard: React.FC<PricingCardProps> = ({ title, price, subtitle, desc, features, highlighted }) => (
    <div className={`pricing-card opacity-0 bg-dark p-8 md:p-8 border relative flex flex-col h-60vh w-[20rem] transition-all duration-500
      ${highlighted ? 'border-brand z-10'
            : 'border-white/5 hover:border-brand/30 '}`}
    >
        {highlighted && (
            <div className="absolute top-0 right-3 bg-brand  font-space text-[10px] font-bold uppercase px-3 py-1">
                Popular
            </div>
        )}
        <h3 className="font-space font-bold text-sm mb-6 text-white">{title}</h3>
        <div className="mb-4">
            {subtitle && <span className="text-gray-400 font-space text-md block mb-2">{subtitle}</span>}
            <div className="flex items-baseline gap-2 text-brand mt-2">
                <span className={`font-mono font-bold tracking-tighter ${typeof price === 'string' && price.includes("Discuss") ? "text-3xl leading-tight" : "text-4xl"}`} dangerouslySetInnerHTML={{ __html: price }}></span>
            </div>
        </div>
        <p className="font-space text-gray-400 text-xs leading-relaxed pb-6 mt-2">{desc}</p>
        <ul className="font-space text-xs text-gray-300 space-y-4 mb-10 grow">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" /> {feat}
                </li>
            ))}
        </ul>
        <button className={`w-full font-space text-sm font-bold uppercase tracking-widest py-4 transition-all duration-300
      ${highlighted || title.includes("Subscription")
                ? 'bg-brand border border-transparent hover:border-brand hover:bg-transparent'
                : 'border border-white/10 text-white hover:bg-transparent hover:border-brand'}`}
        >
            {title.includes("Enterprise") ? "Let's Discuss" : "Get Started"}
        </button>
    </div>
);


const Pricing: React.FC = () => (
    <section className="pricing-section py-24 border-t border-white/5 bg-darker">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="reveal-up opacity-0 font-mono font-extrabold text-5xl md:text-[5.5rem] lg:text-[6.5rem] uppercase tracking-tighter text-center mb-16">
                Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center place-items-center">
                <PricingCard
                    title="Monthly Subscription" subtitle="Starts from" price="3,500 <span class='text-xs uppercase font-bold font-space'>AED/mo</span>"
                    desc="Ongoing web, SEO, content, and design support for teams that need steady improvements every month."
                    features={["Unlimited design & dev requests", "2-4 business day turnaround", "Unlimited revisions", "Pause or cancel anytime"]}
                />
                <PricingCard
                    title="Fixed Price" subtitle="Starts from" price="10,000 <span class='text-xs uppercase font-bold font-space'>AED+</span>" highlighted={true}
                    desc="A clear scope, timeline, and launch plan for websites, SEO pages, brand systems, or campaign builds."
                    features={["Custom scope assessment", "Web, mobile, or design projects", "Fixed timeline & deliverables", "Unlimited revisions included", "Post-launch support"]}
                />
                <PricingCard
                    title="Custom Enterprise" price="Let's<br/>Discuss"
                    desc="Custom digital growth programs for larger websites, multilingual SEO, ecommerce, and platform builds."
                    features={["Dedicated development teams", "Web, mobile, AI & blockchain", "SaaS & E-commerce platforms", "Priority & ongoing support"]}
                />
            </div>
        </div>
    </section>
);

export default Pricing;