import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('I look forward to hearing from you soon!');

    if (form.current) {
      emailjs.sendForm('service_vtsq4ae', 'template_gb7nefs', form.current, 'Hn5eUyliW-q9VSNSb')
        .then(() => {
          console.log("Success!");
        }, (error) => {
          console.log('Failed...', error.text);
        });
    }
  };

  return (
    <section id="contact" className="mt-12 contact py-20 bg-[#1AB7FF]-100 flex-col justify-center items-center flex">
      <div className="bg-[#1AB7FF] h-[300px] rounded-lg w-full max-w-md mx-auto px-5">
        <h2 className='text-4xl font-bold mb-8 text-center text-white'>Contact</h2>
        <form className='space-y-6' ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input onChange={e => setName(e.target.value)} className='bg-[#212121] mt-1 block w-full text-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" id="name" name="name" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input onChange={e => setEmail(e.target.value)} className='bg-[#212121] mt-1 block w-full text-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="email" id="email" name="email" />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea onChange={e => setMessage(e.target.value)} className='bg-[#212121] mt-1 block w-full text-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="message" name="message"></textarea>
            </li>
        
          </ul>
          <button className='bg-[#2CF000] mx-auto my-auto w-full h-3/4 rounded-md hover:shadow-lg hover:shadow-[#1AB7FF] ' type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;