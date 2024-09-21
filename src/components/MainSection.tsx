import React from 'react';

interface MainSectionProps {    
title : string;
gap?: number;
paddingTop?: number;
altBackground?: boolean;
paddingBottom?: number;
children: React.ReactNode;
};

const MainSection: React.FC<MainSectionProps> = ({ title, altBackground = false, gap = 8, paddingTop = 8, paddingBottom = 8, children }) => { 
    return (
        <section className={`${altBackground ? 'bg-primary' : ''} text-center`}>
            <div className='w-full py-sections text-3xl font-bold font-mono'>
            {title}
            <div className={`flex w-full flex-wrap Justify-center gap-[${gap || 30}px] pt-[${paddingTop || 50}px pb-[${paddingBottom || 'padding'}`}>
                {children}
            </div>
            </div>
        </section>
    );
}

export default MainSection;