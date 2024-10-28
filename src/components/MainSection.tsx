import React from 'react';

interface MainSectionProps {
    title: string;
    gap?: number;
    paddingTop?: number;
    altBackground?: boolean;
    paddingBottom?: number;
    children: React.ReactNode;
};

const MainSection: React.FC<MainSectionProps> = ({ title, altBackground = false, gap = 8, paddingTop = 8, paddingBottom = 8, children }) => {
    return (
        <section className={`${altBackground ? 'bg-primary' : ''} text-center py-10`}>
            <h2 className='w-full text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-8 animate-fadeIn'>
                {title}
            </h2>
            <div className={`flex w-full flex-wrap justify-center gap-[${gap}px] pt-[${paddingTop}px] pb-[${paddingBottom}px]`}>
                {children}
            </div>
        </section>
    );
}

export default MainSection;