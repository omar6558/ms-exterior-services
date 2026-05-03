'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  message: string;
}

export default function QuoteForm({ preselectedService = '' }: { preselectedService?: string }) {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!BUSINESS.formspreeId) {
      // Dev mode: just show success so the UI is testable
      setTimeout(() => setStatus('success'), 800);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${BUSINESS.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent!</h3>
        <p className="text-green-700">
          Thanks! We&apos;ll reach out within a few hours to schedule your free estimate.
        </p>
        <p className="mt-4 text-green-700 font-semibold">
          Or call us now:{' '}
          <a href={BUSINESS.phoneHref} className="underline">
            {BUSINESS.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please call us directly at{' '}
          <a href={BUSINESS.phoneHref} className="underline font-semibold">
            {BUSINESS.phone}
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(865) 000-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Multiple Services">Multiple Services</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Property Address *
        </label>
        <input
          type="text"
          name="address"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main St, Knoxville, TN"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us anything else about the job (size, special concerns, etc.)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-[#38BDF8] text-[#1B2A4A] font-bold text-lg py-4 rounded-lg hover:bg-[#0EA5E9] transition-colors shadow-lg disabled:opacity-60"
      >
        {status === 'loading' ? (
          'Sending...'
        ) : (
          <>
            Send My Free Quote Request <Send size={18} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        No spam, ever. We typically respond within 2 hours.
      </p>
    </form>
  );
}
