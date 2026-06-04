"use client";

import React, { useState } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  Baby, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Loader2,
  X
} from "lucide-react";
import Button from "./Button";

export interface AdmissionsFormProps {
  type: "visit" | "apply";
  onClose: () => void;
  onSubmitSuccess?: (data: any) => void;
}

export default function AdmissionsForm({ type, onClose, onSubmitSuccess }: AdmissionsFormProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    date: "",
    time: "",
    grade: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Brand styling settings based on type
  const isVisit = type === "visit";
  const themeColor = isVisit ? "var(--color-secondary)" : "var(--color-primary)";
  const themeBgColorClass = isVisit ? "bg-[var(--color-bg-purple)]" : "bg-[var(--color-bg-yellow)]";
  const focusBorderColorClass = isVisit ? "focus:border-[var(--color-secondary)] focus:ring-[var(--color-secondary)]/20" : "focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20";
  const buttonVariant = isVisit ? "secondary" : "primary";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when field is typed in
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = "Child's age is required";
    } else {
      const age = parseFloat(formData.childAge);
      if (isNaN(age) || age <= 0 || age > 12) {
        newErrors.childAge = "Age must be between 1 and 12";
      }
    }

    if (isVisit) {
      if (!formData.date) {
        newErrors.date = "Please select a date for your visit";
      }
      if (!formData.time) {
        newErrors.time = "Please select a preferred time";
      }
    } else {
      // apply now
      if (!formData.childName.trim()) {
        newErrors.childName = "Child's name is required";
      }
      if (!formData.grade) {
        newErrors.grade = "Please select a grade/program";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;
      if (!scriptUrl) {
        console.error("Google Sheets script URL is not defined.");
        throw new Error("Configuration error");
      }

      const payload = {
        ...formData,
        formType: isVisit ? "visit" : "apply"
      };

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          // Using text/plain to avoid CORS preflight issues with Google Apps Script
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const result = await response.json();
      if (result.result !== "success") {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("There was an error submitting your request. Please try again later.");
    }
  };

  // Grade Options (for Apply Now)
  const gradeOptions = [
    { value: "playgroup", label: "Playgroup (1.5 - 2.5 Years)" },
    { value: "nursery", label: "Nursery (2.5 - 3.5 Years)" },
    { value: "lkg", label: "LKG (3.5 - 4.5 Years)" },
    { value: "ukg", label: "UKG (4.5 - 5.5 Years)" },
    { value: "nep", label: "NEP Program (5.5+ Years)" },
  ];

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-bounce ${isVisit ? "bg-[var(--color-bg-purple)] text-[var(--color-secondary)]" : "bg-[var(--color-bg-yellow)] text-[var(--color-primary)]"}`}>
          {isVisit ? (
            <Sparkles className="w-10 h-10" />
          ) : (
            <CheckCircle2 className="w-12 h-12" />
          )}
        </div>
        <h3 className="text-2xl font-baloo font-extrabold text-[var(--color-dark)] mb-3">
          {isVisit ? "Visit Scheduled! 🎉" : "Application Submitted! 🌟"}
        </h3>
        <p className="text-base text-[var(--color-body)] max-w-md mb-8 leading-relaxed font-nunito">
          {isVisit ? (
            <>
              Thank you, <strong>{formData.parentName}</strong>! We've received your request to visit <strong>Small Wonders Preschool</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. Our representative will contact you at <strong>{formData.phone}</strong> shortly to confirm.
            </>
          ) : (
            <>
              Success! The application for <strong>{formData.childName}</strong> (Grade: <strong>{formData.grade.toUpperCase()}</strong>) has been submitted. Our admissions counselor will reach out to you via <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24-48 hours.
            </>
          )}
        </p>
        <Button
          label="Close Window"
          variant={buttonVariant}
          size="md"
          className="px-8 shadow-md"
          onClick={onClose}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-1">
      {/* Grid container for fields */}
      <div className="flex flex-col gap-2.5">
        {/* Parent Name */}
        <div className="flex flex-col text-left">
          <label htmlFor="parentName" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
            <User className="w-3 h-3" style={{ color: themeColor }} /> Parent Name <span className="text-[var(--color-accent-red)]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.parentName ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
            />
          </div>
          {errors.parentName && (
            <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
              {errors.parentName}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col text-left">
          <label htmlFor="phone" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
            <Phone className="w-3 h-3" style={{ color: themeColor }} /> Phone No. <span className="text-[var(--color-accent-red)]">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.phone ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
            />
          </div>
          {errors.phone && (
            <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
            <Mail className="w-3 h-3" style={{ color: themeColor }} /> Email <span className="text-[var(--color-accent-red)]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. parent@example.com"
              className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.email ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
            />
          </div>
          {errors.email && (
            <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
              {errors.email}
            </span>
          )}
        </div>

        {/* Apply Now specific fields */}
        {!isVisit && (
          <div className="flex flex-col text-left">
            <label htmlFor="childName" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
              <Baby className="w-3 h-3" style={{ color: themeColor }} /> Child Name <span className="text-[var(--color-accent-red)]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="e.g. Lily Doe"
                className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.childName ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
              />
            </div>
            {errors.childName && (
              <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
                {errors.childName}
              </span>
            )}
          </div>
        )}

        {/* Child Age */}
        <div className="flex flex-col text-left">
          <label htmlFor="childAge" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
            <Baby className="w-3 h-3" style={{ color: themeColor }} /> Child Age <span className="text-[var(--color-accent-red)]">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              id="childAge"
              name="childAge"
              min="1"
              max="12"
              step="0.5"
              value={formData.childAge}
              onChange={handleChange}
              placeholder="e.g. 3.5"
              className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.childAge ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
            />
          </div>
          {errors.childAge && (
            <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
              {errors.childAge}
            </span>
          )}
        </div>

        {/* Visit specific fields */}
        {isVisit && (
          <>
            {/* Preferred Date */}
            <div className="flex flex-col text-left">
              <label htmlFor="date" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" style={{ color: themeColor }} /> Preferred Date <span className="text-[var(--color-accent-red)]">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.date ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
                />
              </div>
              {errors.date && (
                <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
                  {errors.date}
                </span>
              )}
            </div>

            {/* Preferred Time */}
            <div className="flex flex-col text-left">
              <label htmlFor="time" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" style={{ color: themeColor }} /> Preferred Time <span className="text-[var(--color-accent-red)]">*</span>
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full h-9 pl-3 pr-3 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none ${focusBorderColorClass} ${errors.time ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
                />
              </div>
              {errors.time && (
                <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
                  {errors.time}
                </span>
              )}
            </div>
          </>
        )}

        {/* Apply Now Grade Dropdown */}
        {!isVisit && (
          <div className="flex flex-col text-left">
            <label htmlFor="grade" className="text-[11px] font-bold text-[var(--color-dark)] mb-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3" style={{ color: themeColor }} /> Grade / Program <span className="text-[var(--color-accent-red)]">*</span>
            </label>
            <div className="relative">
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={`w-full h-9 pl-3 pr-8 bg-white border border-[var(--color-border)] rounded-lg text-xs font-medium transition-all outline-none appearance-none cursor-pointer ${focusBorderColorClass} ${errors.grade ? "border-[var(--color-accent-red)]" : "hover:border-zinc-300"}`}
              >
                <option value="">Select Grade</option>
                {gradeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {/* Custom arrow icon for select */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.grade && (
              <span className="text-[10px] text-[var(--color-accent-red)] font-semibold mt-0.5">
                {errors.grade}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Form Submission Button & Cancellation */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
        <Button
          type="submit"
          variant={buttonVariant}
          size="sm"
          fullWidth
          disabled={isSubmitting}
          className="h-10 shadow-md flex items-center justify-center font-bold tracking-wide"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            isVisit ? "Schedule Visit" : "Submit Application"
          )}
        </Button>
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="w-full sm:w-auto h-10 px-5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-500 hover:bg-zinc-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
