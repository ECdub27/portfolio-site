import React from 'react';

type SectionVariant = 'white' | 'dark';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
}

const baseClasses = 'scroll-mt-24 w-full';

const variantClasses: Record<SectionVariant, string> = {
  white: 'bg-white',
  dark: 'bg-zinc-800',
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  variant = 'white',
}) => (
  <section id={id} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
    {children}
  </section>
);

export default Section;
