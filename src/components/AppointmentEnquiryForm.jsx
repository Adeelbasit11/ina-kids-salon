import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SALON_INFO, HAIRSTYLE_OPTIONS } from '../data/salonData';

const INITIAL_FORM = {
  parentName: '',
  contactNumber: '',
  hairstyle: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

const INITIAL_ERRORS = {
  parentName: '',
  contactNumber: '',
  hairstyle: '',
  preferredDate: '',
  preferredTime: '',
};

function validateForm(values) {
  const errors = { ...INITIAL_ERRORS };
  let isValid = true;

  if (!values.parentName.trim()) {
    errors.parentName = 'Please enter your name.';
    isValid = false;
  } else if (values.parentName.trim().length < 2) {
    errors.parentName = 'Name must be at least 2 characters.';
    isValid = false;
  }

  const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;
  if (!values.contactNumber.trim()) {
    errors.contactNumber = 'Please enter your contact number.';
    isValid = false;
  } else if (!phoneRegex.test(values.contactNumber.trim())) {
    errors.contactNumber = 'Please enter a valid phone number.';
    isValid = false;
  }

  if (!values.hairstyle) {
    errors.hairstyle = 'Please select a hairstyle or service.';
    isValid = false;
  }

  if (!values.preferredDate) {
    errors.preferredDate = 'Please select your preferred date.';
    isValid = false;
  } else {
    const selected = new Date(values.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.preferredDate = 'Please select a future date.';
      isValid = false;
    }
  }

  if (!values.preferredTime) {
    errors.preferredTime = 'Please select your preferred time.';
    isValid = false;
  }

  return { errors, isValid };
}

function buildWhatsAppMessage(values) {
  const lines = [
    `Hello INA Kids Salon! 👋`,
    ``,
    `I'd like to make an appointment enquiry:`,
    ``,
    `👤 Name: ${values.parentName}`,
    `💇 Hairstyle: ${values.hairstyle}`,
    `📅 Preferred Date: ${values.preferredDate}`,
    `⏰ Preferred Time: ${values.preferredTime}`,
    values.message ? `📝 Note: ${values.message}` : '',
    ``,
    `Please confirm availability. Thank you!`,
  ].filter((l) => l !== undefined);

  return encodeURIComponent(lines.join('\n'));
}

function FormField({ label, id, error, required = false, children }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-[#E91E63] ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function AppointmentEnquiryForm() {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const minDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field was already touched
    if (touched[name]) {
      const { errors: newErrors } = validateForm({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const { errors: newErrors } = validateForm(values);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Touch all fields
    setTouched(Object.keys(INITIAL_ERRORS).reduce((acc, k) => ({ ...acc, [k]: true }), {}));

    const { errors: validationErrors, isValid } = validateForm(values);
    setErrors(validationErrors);

    if (!isValid) return;

    setStatus('loading');

    // Simulate brief processing, then open WhatsApp
    setTimeout(() => {
      try {
        const msg = buildWhatsAppMessage(values);
        const url = `${SALON_INFO.whatsapp}?text=${msg}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-neutral-dark">Enquiry Sent!</h3>
          <p className="mt-2 text-neutral-secondary text-sm max-w-sm leading-relaxed">
            Your WhatsApp message has been prepared. The salon will review your enquiry and
            get back to you to confirm availability.
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            Note: This is an enquiry, not a confirmed booking. Availability is subject to confirmation by the salon.
          </p>
        </div>
        <button
          onClick={() => { setStatus('idle'); setValues(INITIAL_FORM); setTouched({}); }}
          className="btn-secondary text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Appointment enquiry form"
      className="flex flex-col gap-5"
    >
      {/* Status: error */}
      {status === 'error' && (
        <div role="alert" className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Parent / Guardian Name" id="parentName" error={errors.parentName} required>
          <input
            id="parentName"
            name="parentName"
            type="text"
            value={values.parentName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className={`form-input ${errors.parentName ? 'border-red-400 focus:ring-red-400' : ''}`}
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? 'parentName-error' : undefined}
          />
        </FormField>

        <FormField label="Contact Number" id="contactNumber" error={errors.contactNumber} required>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            value={values.contactNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+254 7XX XXX XXX"
            className={`form-input ${errors.contactNumber ? 'border-red-400 focus:ring-red-400' : ''}`}
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.contactNumber}
            aria-describedby={errors.contactNumber ? 'contactNumber-error' : undefined}
          />
        </FormField>
      </div>

      {/* Hairstyle */}
      <FormField label="Preferred Hairstyle or Service" id="hairstyle" error={errors.hairstyle} required>
        <select
          id="hairstyle"
          name="hairstyle"
          value={values.hairstyle}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.hairstyle ? 'border-red-400 focus:ring-red-400' : ''}`}
          aria-required="true"
          aria-invalid={!!errors.hairstyle}
          aria-describedby={errors.hairstyle ? 'hairstyle-error' : undefined}
        >
          <option value="">Select a hairstyle...</option>
          {HAIRSTYLE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      {/* Row 2: Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Preferred Date" id="preferredDate" error={errors.preferredDate} required>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={handleChange}
            onBlur={handleBlur}
            min={minDate}
            className={`form-input ${errors.preferredDate ? 'border-red-400 focus:ring-red-400' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
          />
        </FormField>

        <FormField label="Preferred Time" id="preferredTime" error={errors.preferredTime} required>
          <select
            id="preferredTime"
            name="preferredTime"
            value={values.preferredTime}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.preferredTime ? 'border-red-400 focus:ring-red-400' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
          >
            <option value="">Select a time...</option>
            <option value="Morning (9am - 12pm)">Morning (9am – 12pm)</option>
            <option value="Midday (12pm - 3pm)">Midday (12pm – 3pm)</option>
            <option value="Afternoon (3pm - 6pm)">Afternoon (3pm – 6pm)</option>
          </select>
        </FormField>
      </div>

      {/* Optional message */}
      <FormField label="Additional Notes (optional)" id="message">
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Any specific details about the style you'd like, your child's age, etc."
          rows={3}
          className="form-input resize-none"
          aria-required="false"
        />
      </FormField>

      {/* Disclaimer */}
      <p className="text-xs text-neutral-400 leading-relaxed">
        <strong>Note:</strong> This form sends an appointment enquiry, not a confirmed booking.
        The salon will contact you to confirm availability and pricing.
      </p>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary flex-1 py-4 text-base justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Preparing Enquiry…
            </>
          ) : (
            <>
              <Send size={17} aria-hidden="true" />
              Send Appointment Enquiry
            </>
          )}
        </button>
      </div>

      {/* Alternative contact actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <a
          href={SALON_INFO.phoneHref}
          className="btn-secondary flex-1 py-3 justify-center text-sm"
          aria-label={`Call INA Kids Salon at ${SALON_INFO.phone}`}
        >
          <Phone size={15} aria-hidden="true" />
          Call the Salon
        </a>
        <a
          href={`${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello INA Kids Salon! I'd like to ask about a hairstyle.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost border border-pink-border flex-1 py-3 justify-center text-sm"
          aria-label="Ask about a hairstyle on WhatsApp"
        >
          <MessageCircle size={15} aria-hidden="true" />
          Ask About a Hairstyle
        </a>
      </div>
    </form>
  );
}
