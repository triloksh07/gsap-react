import React from 'react';
import type { WorkCardProps } from '@/lib/types';

const WorkCard: React.FC<WorkCardProps> = ({ num, title, desc }) => {
    return (
        <div className="work-card p-8 border border-white/5 hover:border-brand/50 hover:bg-brand/8 transition-all flex flex-col gap-4">
            <span className="font-mono text-brand text-xs">{num}</span>
            <h3 className="font-heading text-md uppercase tracking-wide text-text-primary">
                {title}
            </h3>
            <p className="font-mono text-text-dim text-xs leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

export const WhoWeWorkWith: React.FC = () => {
    const cards = [
        {
            num: "01",
            title: "Startups",
            desc: "Launch faster with a website, brand, and search strategy built for UAE buyers, investors, and early customers."
        },
        {
            num: "02",
            title: "Product & Tech Teams",
            desc: "Add senior design, development, and SEO support without slowing your roadmap or bloating your internal team."
        },
        {
            num: "03",
            title: "Nonprofits & Organizations",
            desc: "Build trust with clear messaging, fast pages, bilingual readiness, and practical content your audience can act on."
        }
    ];

    return (
        <section className="work-section py-24  border-white/5 bg-dark mx-auto max-w-275 flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="reveal-up font-extrabold text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[0.85] uppercase tracking-tighter mb-16 opacity-0 text-text-primary flex flex-col items-center justify-center">

                    <span
                        className="w-full"
                    >
                        Who We
                    </span>
                    <span
                        className="text-transparent"
                        style={{ WebkitTextStroke: '1px white' }}
                    >
                        Work With
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left place-items-center max-w-fit">
                    {cards.map((card) => (
                        <WorkCard
                            key={card.num}
                            num={card.num}
                            title={card.title}
                            desc={card.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWith;