'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/types';

interface InquiryType {
  value: ContactFormData['inquiryType'];
  label: string;
}

interface ContactFormProps {
  inquiryTypes: InquiryType[];
}

export default function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'kakaobohnen',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simuliere API-Aufruf
    // In Produktion hier den echten API-Endpunkt aufrufen
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: 'kakaobohnen',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-green-700 mb-6">
          Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Ihr vollständiger Name"
          />
        </div>

        {/* Firma */}
        <div>
          <label htmlFor="company" className="label">
            Firma <span className="text-cocoa-400">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-field"
            placeholder="Name Ihrer Firma"
          />
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="label">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="ihre@email.de"
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="label">
            Telefon <span className="text-cocoa-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+49 221 0000000"
          />
        </div>
      </div>

      {/* Art der Anfrage */}
      <div>
        <label htmlFor="inquiryType" className="label">
          Art der Anfrage <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="input-field"
        >
          {inquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="message" className="label">
          Ihre Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="input-field resize-none"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
      </div>

      {/* Hinweis */}
      <p className="text-sm text-cocoa-500">
        Mit dem Absenden dieses Formulars stimmen Sie unserer{' '}
        <a href="/datenschutz" className="link">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Wird gesendet...
          </span>
        ) : (
          'Anfrage absenden'
        )}
      </button>
    </form>
  );
}
