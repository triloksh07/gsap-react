import React from 'react';
import type { WorkCardProps } from '@/lib/types';

const WorkCard: React.FC<WorkCardProps> = ({ num, title, desc }) => {
    return (
        <div className="work-card max-w-[20rem] bg-panel p-6 border border-white/5 hover:border-brand/50 hover:bg-brand/10 transition-all duration-300 flex flex-col gap-4 opacity-0 ">
            <span className="font-mono text-brand text-xs">{num}</span>
            <h3 className="font-heading text-md uppercase tracking-wide text-white">
                {title}
            </h3>
            <p className="font-mono text-gray-400 text-xs leading-relaxed">
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
        <section className="work-section h-[70vh] py-24  border-t border-white/5 bg-dark mx-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="reveal-up font-heading text-5xl md:text-[5rem] lg:text-[6.5rem] leading-[0.85] uppercase tracking-tighter mb-16 opacity-0 text-white">
                    Who We<br />
                    <span
                        className="text-transparent"
                        style={{ WebkitTextStroke: '1px white' }}
                    >
                        Work With
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left place-items-center">
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