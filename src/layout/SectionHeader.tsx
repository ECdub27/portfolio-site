import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className = '',
  light = false,
}) => (
  <div className={`flex flex-col items-center gap-6 ${className}`}>
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center ${
        light ? 'text-white' : 'text-gray-900'
      }`}
    >
      {title}
    </h2>
    <div className={`w-8 h-px ${light ? 'bg-white' : 'bg-gray-900'}`} />
  </div>
);

export default SectionHeader;
