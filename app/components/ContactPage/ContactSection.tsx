"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  CheckCircle2,
  Loader2,
  Send,
  MessageCircle,
} from "lucide-react";

import Button from "../Button";

interface ContactSectionProps {
  isSuccess: boolean;
  isSubmitting: boolean;
  formData: {
    parentName: string;
    email: string;
    phone: string;
    childAge: string;
    message: string;
  };
  errors: Record<string, string>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactSection({
  isSuccess,
  isSubmitting,
  formData,
  errors,
  handleChange,
  handleSubmit,
}: ContactSectionProps) {
  return (
    <section className="relative z-20 bg-white py-10">
      <div className="container-custom">
        <div className="relative rounded-3xl">
          {/* Top-right decorative corner accent — outside overflow-hidden so it's not clipped */}
          <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-[3px] rounded-tr-3xl bg-[var(--color-primary)] z-10" style={{ height: "50%" }} />
          <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 h-[3px] rounded-tr-3xl bg-[var(--color-primary)] z-10" style={{ width: "12%" }} />
        <div className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* ── LEFT PANEL ── */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 sm:p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col gap-6">
            <div>
              <h2 className="text-[#2E2E2E] font-[var(--text-primary)] leading-none text-[18px] font-['Baloo_2']"></h2>
            </div>

            {/* Contact cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone */}
              <ContactCard
                icon={<Phone size={18} />}
                iconBg="bg-blue-100"
                iconColor="text-blue-700"
                label="Phone"
                content={
                  <>
                    96428 05126<br />
                    80994 22344
                  </>
                }
              />
              {/* WhatsApp */}
              <ContactCard
                icon={<MessageCircle size={18} />}
                iconBg="bg-green-100"
                iconColor="text-green-700"
                label="WhatsApp"
                content="96428 05126"
              />
              {/* Email */}
              <ContactCard
                icon={<Mail size={18} />}
                iconBg="bg-orange-100"
                iconColor="text-orange-700"
                label="Email"
                content={
                  <a
                    href="mailto:info@smallwondersplayschool.com"
                    className="hover:underline break-all"
                  >
                    info@smallwonders<wbr />playschool.com
                  </a>
                }
              />
              {/* Location */}
              <ContactCard
                icon={<MapPin size={18} />}
                iconBg="bg-purple-100"
                iconColor="text-purple-700"
                label="Our School"
                content={
                  <>
                    Classic Enclave,<br />
                    Sainikpuri, Secunderabad
                  </>
                }
              />
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-gray-200 h-[280px]">
              <iframe
                title="Small Wonders Preschool and Daycare"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.0!2d78.5416865!3d17.4953982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6c46184f53%3A0x27e0d05c65746d25!2sSmall%20Wonders%20preschool%20and%20Daycare!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Timings */}
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide font-nunito">
                  Timings
                </p>
                <p className="text-sm font-semibold text-gray-800 font-nunito">
                  Mon–Sat &nbsp;·&nbsp; 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 bg-white">
            <h2 className="font-baloo text-2xl font-extrabold text-[var(--color-primary)] mb-1">
              Send Us a Message
            </h2>
            <p className="font-nunito text-sm text-[var(--color-body)] mb-6 leading-relaxed">
              We'd love to hear from you. Fill in the form and we'll be in touch shortly.
            </p>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-[var(--color-bg-purple)] rounded-2xl border border-[var(--color-secondary)]/20">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-bounce bg-white shadow-md text-[var(--color-secondary)]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-baloo font-extrabold text-[var(--color-dark)] mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-base text-[var(--color-body)] max-w-md leading-relaxed font-nunito">
                  Thank you, <strong>{formData.parentName}</strong>. Your message has been received.
                  Our team will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Row 1: Parent name + Child name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    id="parentName"
                    label="Parent's Name"
                    required
                    error={errors.parentName}
                  >
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass(!!errors.parentName)}
                    />
                  </FormField>

                  <FormField
                    id="childAge"
                    label="Child's Name"
                    required
                    error={errors.childName}
                  >
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="Child's name"
                      className={inputClass(!!errors.childName)}
                    />
                  </FormField>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    id="email"
                    label="Email Address"
                    required
                    error={errors.email}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                    />
                  </FormField>

                  <FormField
                    id="phone"
                    label="Phone Number"
                    required
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass(!!errors.phone)}
                    />
                  </FormField>
                </div>

                {/* Subject (full width) */}
                <FormField id="subject" label="Subject">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Admissions enquiry"
                    className={inputClass(false)}
                  />
                </FormField>

                {/* Message */}
                <FormField
                  id="message"
                  label="Message"
                  required
                  error={errors.message}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here…"
                    rows={4}
                    className={`w-full p-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </FormField>

                {/* Footer row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-1">
                  <p className="text-xs text-gray-400 font-nunito">
                    {/* We typically reply within 24 hours. */}
                  </p>
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-12 px-10 shadow-md font-bold tracking-wide"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Now
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ── */

function inputClass(hasError: boolean) {
  return `w-full h-12 px-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 ${
    hasError ? "border-red-500" : "border-gray-200"
  }`;
}

function FormField({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-bold text-[var(--color-dark)]">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-500 font-semibold">{error}</span>
      )}
    </div>
  );
}

function ContactCard({
  icon,
  iconBg,
  iconColor,
  label,
  content,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-shadow">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide font-nunito">
          {label}
        </p>
        <p className="text-xs font-semibold text-gray-800 font-nunito leading-snug mt-0.5">
          {content}
        </p>
      </div>
    </div>
  );
}