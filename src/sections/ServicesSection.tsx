import React from 'react';
import { IconType } from 'react-icons';
import Section from '../layout/Section';

export interface Service {
  label: string;
  detail: string;
  Icon: IconType;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <Section className="px-6 md:px-[120px] py-12 md:py-20">
    <div className="mx-auto max-w-container bg-gray-900 rounded-[40px] md:rounded-[80px] px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
          Services
        </h2>
        <div className="w-8 h-px bg-white" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {services.map(({ label, detail, Icon }) => (
          <div
            key={label}
            className="bg-white/10 rounded-3xl p-8 md:p-9 flex flex-col items-start gap-6 min-h-[18rem]"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold capitalize leading-9">
              {label}
            </h3>
            <div className="w-8 h-px bg-white" />
            <p className="text-white text-base md:text-lg font-normal leading-7">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default ServicesSection;
