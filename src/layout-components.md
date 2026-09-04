# main section 
import React from 'react';

interface MainSectionProps {
    title?: string;
    children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ title, children }) => {
    return (
        <section className="w-full">
            {title && (
                <div className="w-full py-6 px-4 text-3xl font-bold font-pops text-center text-gray-800">
                    {title}
                </div>
            )}
            {children}
        </section>
    );
};

export default MainSection;


interface Props {
    label: string;
    count?: number;
}

const SectionSkeleton: React.FC<Props> = ({ label, count = 6 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" aria-busy="true" aria-label={label}>
        <span className="sr-only">{label}</span>
        {Array.from({ length: count }).map((_, i) => (
            <div
                key={i}
                className="bg-[#2e2e2e] rounded-lg overflow-hidden shadow-md border border-[#E0607E]/10 flex flex-col"
            >
                <div className="vrn-shimmer w-full h-48" />
                <div className="p-4 flex flex-col flex-grow gap-2">
                    <div className="vrn-shimmer h-4 w-3/4 rounded" />
                    <div className="vrn-shimmer h-3 w-full rounded" />
                    <div className="vrn-shimmer h-3 w-5/6 rounded" />
                </div>
            </div>
        ))}
    </div>
);

export default SectionSkeleton;


import { NewsItem } from '../../types/type-definitions';

type Size = 'sm' | 'md' | 'lg' | 'wide' | 'tall';

interface BentoTileProps {
    article: NewsItem;
    category: string;
    size?: Size;
}

const sizeClasses: Record<Size, string> = {
    sm: 'aspect-[4/3]',
    md: 'aspect-[4/3] md:aspect-[5/4]',
    lg: 'aspect-[4/5] md:aspect-auto md:h-full md:min-h-[480px]',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[3/4]',
};

const titleSizeClasses: Record<Size, string> = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-4xl',
    wide: 'text-xl md:text-2xl',
    tall: 'text-lg md:text-xl',
};

const formatTime = (ts: number) => {
    if (!ts) return '';
    const diff = Date.now() - ts * 1000;
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${Math.max(1, mins)}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
};

const BentoTile: React.FC<BentoTileProps> = ({ article, category, size = 'md' }) => {
    return (
        <a
            href={article.newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`group relative block w-full ${sizeClasses[size]} overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] shadow-lg transition-all duration-300 hover:border-[#E0607E]/60 hover:shadow-[0_0_30px_-5px_rgba(224,96,126,0.35)]`}
        >
            <img
                src={article.images.thumbnailProxied}
                alt={article.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

            <div className="absolute left-4 top-4">
                <span className="inline-block rounded-full bg-[#E0607E] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                    {category}
                </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className={`${titleSizeClasses[size]} font-extrabold leading-tight text-white drop-shadow-md line-clamp-3`}>
                    {article.title}
                </h3>
                {size === 'lg' && article.snippet && (
                    <p className="mt-3 hidden text-sm text-gray-200/90 line-clamp-2 md:block">
                        {article.snippet}
                    </p>
                )}
                <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-300/80">
                    <span className="truncate">{article.publisher}</span>
                    {article.timestamp ? (
                        <>
                            <span className="text-[#E0607E]">•</span>
                            <span>{formatTime(article.timestamp)}</span>
                        </>
                    ) : null}
                </div>
            </div>
        </a>
    );
};

export default BentoTile;

import { NewsItem } from '../../types/type-definitions';
import BentoTile from './BentoTile';

type Variant = 'feature-left' | 'feature-right' | 'split';

interface CategoryBentoProps {
    items: NewsItem[];
    category: string;
    variant?: Variant;
}

const SectionHeader: React.FC<{ kicker: string; title: string }> = ({ kicker, title }) => (
    <div className="mb-6 flex items-end justify-between">
        <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#E0607E]">{kicker}</p>
            <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-white tracking-tight">{title}</h2>
        </div>
        <div className="h-px flex-1 ml-6 mb-2 bg-gradient-to-r from-[#E0607E]/40 to-transparent" />
    </div>
);

export const CategorySectionHeader = SectionHeader;

const CategoryBento: React.FC<CategoryBentoProps> = ({ items, category, variant = 'feature-left' }) => {
    if (!items.length) return null;

    if (variant === 'split') {
        const left = items.slice(0, 2);
        const right = items.slice(2, 6);
        return (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                <div className="grid gap-4 lg:col-span-3 lg:grid-cols-2">
                    {left.map((a, i) => (
                        <BentoTile key={i} article={a} category={category} size="md" />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-2">
                    {right.map((a, i) => (
                        <BentoTile key={i} article={a} category={category} size="sm" />
                    ))}
                </div>
            </div>
        );
    }

    const featured = items[0];
    const rail = items.slice(1, 3);
    const tail = items.slice(3, 7);
    const featureFirst = variant === 'feature-left';

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {featureFirst && (
                    <div className="lg:col-span-2">
                        <BentoTile article={featured} category={category} size="lg" />
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    {rail.map((a, i) => (
                        <BentoTile key={i} article={a} category={category} size="md" />
                    ))}
                </div>
                {!featureFirst && (
                    <div className="lg:col-span-2">
                        <BentoTile article={featured} category={category} size="lg" />
                    </div>
                )}
            </div>
            {tail.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {tail.map((a, i) => (
                        <BentoTile key={i} article={a} category={category} size="sm" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryBento;
