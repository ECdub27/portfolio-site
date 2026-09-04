import React from 'react';
import Section from '../layout/Section';

const paragraphs = [
  "I&rsquo;m Elijah-Christian Wiegand, a Full-Stack Developer from New York, now living in Chicago.",
  "By day, I configure and extend Guidewire for complex policy workflows in enterprise insurance. By night, I build clean, scalable apps with .NET, Next.js, with friends.",
  "My sweet spot is bridging legacy enterprise systems with modern engineering practices — untangling brittle logic, improving reliability, and shipping user-friendly features.",
  "I believe &ldquo;haste makes waste,&rdquo; and that less can be more. This portfolio is a living document — check back for what I&rsquo;m shipping next. I&rsquo;m available for contract engagements through Parsec Logic Development Solutions.",
];

const AboutSection: React.FC = () => (
  <Section id="about" className="px-6 md:px-[240px] py-16 md:py-20">
    <div className="mx-auto max-w-container flex flex-col items-center gap-6">
      <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
        About Me
      </h2>
      <div className="w-8 h-px bg-gray-900" />
      <div className="flex flex-col items-start gap-4 w-full">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="w-full text-center text-zinc-600 text-base md:text-lg font-normal leading-7"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default AboutSection;
