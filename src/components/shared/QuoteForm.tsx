'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';

const FORMSPREE_ID = 'mvzlkoyj';

export default function QuoteForm({ preselectedService = '' }: { preselectedService?: string }) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
          <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-600 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="(865) 000-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
          />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-red-600 text-xs mt-1" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={preselectedService}
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
        <ValidationError field="service" prefix="Service" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
          Property Address *
        </label>
        <input
          id="address"
          type="text"
          name="address"
          required
          placeholder="123 Main St, Knoxville, TN"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
        />
        <ValidationError field="address" prefix="Address" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us anything else about the job (size, special concerns, etc.)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent resize-none"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Form-level errors (e.g. network/Formspree errors) */}
      <ValidationError errors={state.errors} className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 bg-[#38BDF8] text-[#1B2A4A] font-bold text-lg py-4 rounded-lg hover:bg-[#0EA5E9] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
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
