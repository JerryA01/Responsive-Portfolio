'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Add/update hidden "time" input for the {{time}} variable
    let timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement | null;
    if (!timeInput) {
      timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      form.current.appendChild(timeInput);
    }
    timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        'service_0wmj40y',
        'template_nfp0amm',
        form.current,
        'q5laHzPHv8_V-W0fY'
      )
      .then(() => {
        setSuccess(true);
        setError(false);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Get In Touch</h1>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded-lg p-8 space-y-6"
        noValidate
      >
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Write your message here..."
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold rounded py-3 hover:bg-blue-700 transition-colors duration-200"
          aria-label="Send message"
        >
          Send Message
        </button>

        {success && (
          <p className="mt-4 text-green-600 font-medium" role="alert">
            🎉 Your message was sent successfully! I'll get back to you soon.
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 font-medium" role="alert">
            ❌ Oops, something went wrong. Please try again later.
          </p>
        )}
      </form>
    </main>
  );
}
