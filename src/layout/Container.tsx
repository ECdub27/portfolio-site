import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-container px-6 md:px-[120px] ${className}`}>
    {children}
  </div>
);

export default Container;
