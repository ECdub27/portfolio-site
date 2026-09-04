import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const buttons = [
  {
    label: 'Email',
    href:
      'mailto:contact@parselogic.it.com?subject=Project%20Inquiry%20via%20PLDS&body=Hi%20EC,%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20engagement.%0D%0A%0D%0ARegards,%0D%0A%5BYour%20Name%5D',
    Icon: FaEnvelope,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/',
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ECdub27',
    Icon: FaGithub,
    external: true,
  },
];

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const canSendViaEmailjs =
    !!EMAILJS_SERVICE_ID && !!EMAILJS_TEMPLATE_ID && !!EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!canSendViaEmailjs) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY! }
      );
      setStatus('sent');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      variant="dark"
      className="relative rounded-t-[60px] md:rounded-t-[100px] overflow-hidden py-16 md:py-20"
    >
      <Container className="flex flex-col items-center gap-6">
        <SectionHeader title="Work with me" light />
        <p className="max-w-2xl text-center text-white text-base md:text-lg font-normal leading-7">
          Have a project in mind? I take on contract engagements through Parsec
          Logic Dev Solutions — let&apos;s talk scope and timeline.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 w-full">
          {buttons.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-3 w-full sm:w-72 h-16 bg-stone-300 hover:bg-[#2563EB] rounded-[20px] text-white text-base md:text-lg font-medium transition-colors"
            >
              <Icon className="w-5 h-5" />
              {label}
            </a>
          ))}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-[998px] bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col gap-5 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <label className="flex-1 flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
                Name
              </span>
              <input
                required
                name="user_name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
              />
            </label>
            <label className="flex-1 flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
                Email
              </span>
              <input
                required
                name="user_email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
            />
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start bg-gray-900 hover:bg-blue-600 disabled:opacity-60 text-white text-base md:text-lg font-semibold uppercase tracking-widest px-8 py-4 rounded-[20px] transition-colors"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <span className="text-green-600 text-sm font-medium">
                Thanks — I&apos;ll be in touch soon.
              </span>
            )}
            {status === 'error' && (
              <span className="text-red-600 text-sm font-medium">
                Something went wrong. Email me directly instead.
              </span>
            )}
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default ContactSection;
