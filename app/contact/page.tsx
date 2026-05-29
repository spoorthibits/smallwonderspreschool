"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import Button from "../components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (!formData.parentName.trim()) newErrors.parentName = "Parent's name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
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
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
        setIsSuccess(false);
        setFormData({
            parentName: "",
            phone: "",
            email: "",
            childAge: "",
            message: "",
        });
    }, 5000);
  };

  const handleGetDirections = () => {
    window.open("https://maps.google.com/?q=Small+Wonders+Play+School,+40,+Classic+Enclave,+Madhavapuri+Colony,+Sainikpuri,+Secunderabad", "_blank");
  };

  return (
    <main className="flex-1 bg-[var(--color-offwhite)] relative pb-10">
      
      {/* ── Hero Section ── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-[var(--color-primary)] font-nunito mb-2 flex items-center gap-2">
                Let&apos;s Connect
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-400 stroke-current">
                    <path d="M5 12l14 0M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h1 className="font-baloo text-[var(--color-dark)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                We&apos;d Love to <br/>
                <span className="text-[var(--color-primary)]">Hear From You!</span>
              </h1>
              <p className="font-nunito text-lg text-[var(--color-body)] max-w-md font-medium leading-relaxed">
                Have questions or want to know more about our programmes? We&apos;re here to help you with all the information you need.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              {/* Image Frame */}
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[40px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-8 border-white shadow-2xl z-10">
                <Image
                  src="/kids-reading.png"
                  alt="Happy kids learning"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Sticky note decoration */}
              <div className="absolute -bottom-6 -right-2 md:right-4 bg-[#FFEB3B] rounded-sm shadow-lg p-5 rotate-3 z-20 w-48 border border-yellow-200">
                <p className="font-baloo text-lg font-bold text-gray-800 leading-tight text-center">
                  Your message helps us build brighter futures!
                </p>
                <div className="text-red-500 text-center mt-2">❤️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Card (Left: Info, Right: Form) ── */}
      <section className="relative -mt-8 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Get In Touch */}
            <div className="lg:w-1/3 bg-gray-50/50 p-8 md:p-12 border-r border-gray-100 flex flex-col justify-center">
              <h2 className="font-baloo text-2xl font-extrabold text-[var(--color-secondary)] mb-8">
                Get In Touch
              </h2>
              
              <div className="flex flex-col gap-8">
                {/* Location */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-lg font-bold text-[var(--color-dark)] mb-1">Visit Us</h4>
                    <p className="font-nunito text-sm text-[var(--color-body)] font-medium leading-relaxed">
                      40, Classic Enclave,<br/>
                      Madhavapuri Colony, Sainikpuri,<br/>
                      Secunderabad
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-lg font-bold text-[var(--color-dark)] mb-1">Call Us</h4>
                    <p className="font-nunito text-sm text-[var(--color-body)] font-medium">
                      96428 05126<br/>
                      80994 22344
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#e53935] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-lg font-bold text-[var(--color-dark)] mb-1">Email Us</h4>
                    <a href="mailto:info@smallwondersplayschool.com" className="font-nunito text-sm text-[var(--color-body)] font-medium hover:text-[var(--color-primary)] transition-colors">
                      info@smallwondersplayschool.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#00bcd4] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-lg font-bold text-[var(--color-dark)] mb-1">Website</h4>
                    <a href="http://www.smallwondersplayschool.com" target="_blank" rel="noopener noreferrer" className="font-nunito text-sm text-[var(--color-body)] font-medium hover:text-[var(--color-primary)] transition-colors">
                      www.smallwondersplayschool.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-[#4caf50] flex items-center justify-center text-white flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-lg font-bold text-[var(--color-dark)] mb-1">Timings</h4>
                    <p className="font-nunito text-sm text-[var(--color-body)] font-medium">
                      Monday to Saturday<br/>
                      9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <h2 className="font-baloo text-2xl font-extrabold text-[var(--color-secondary)] mb-8">
                Send Us a Message
              </h2>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-[var(--color-bg-purple)] rounded-2xl h-full border border-[var(--color-secondary)]/20">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-bounce bg-white shadow-md text-[var(--color-secondary)]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-baloo font-extrabold text-[var(--color-dark)] mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-base text-[var(--color-body)] max-w-md leading-relaxed font-nunito">
                    Thank you, <strong>{formData.parentName}</strong>. Your message has been received. Our team will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Parent's Name */}
                    <div className="flex flex-col">
                      <label htmlFor="parentName" className="text-sm font-bold text-[var(--color-dark)] mb-2">
                        Parent&apos;s Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`w-full h-12 px-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 ${errors.parentName ? "border-red-500" : "border-gray-200"}`}
                      />
                      {errors.parentName && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.parentName}</span>}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-bold text-[var(--color-dark)] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full h-12 px-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 ${errors.email ? "border-red-500" : "border-gray-200"}`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-sm font-bold text-[var(--color-dark)] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`w-full h-12 px-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                      />
                      {errors.phone && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.phone}</span>}
                    </div>

                    {/* Child Age */}
                    <div className="flex flex-col">
                      <label htmlFor="childAge" className="text-sm font-bold text-[var(--color-dark)] mb-2">
                        Child Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 3.5"
                        min="1"
                        max="12"
                        step="0.5"
                        className={`w-full h-12 px-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 ${errors.childAge ? "border-red-500" : "border-gray-200"}`}
                      />
                      {errors.childAge && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.childAge}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-bold text-[var(--color-dark)] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={4}
                      className={`w-full p-4 bg-gray-50 border rounded-xl text-sm font-medium transition-all outline-none focus:bg-white focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 resize-none ${errors.message ? "border-red-500" : "border-gray-200"}`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2">
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
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
      </section>

      {/* ── Map / Find Us Section ── */}
      <section className="relative mt-12 mb-20">
        <div className="container-custom">
          {/* Main Container */}
          <div className="relative w-full rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 bg-[#fafcff] overflow-hidden">
            
            {/* 2-Column Layout (Zero Gap) */}
            <div className="relative z-10 flex flex-col lg:flex-row w-full items-stretch">
              
              {/* Left Column: Info & Button */}
              <div className="flex-none w-full lg:w-[360px] xl:w-[420px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-8 md:p-12 lg:py-16 lg:pl-16 lg:pr-8 xl:py-20 xl:pl-20 xl:pr-10">
                <h3 className="font-baloo text-[36px] font-bold text-[var(--color-secondary)] mb-6">
                  Find Us Here
                </h3>
                <p className="font-nunito text-lg text-slate-700 font-bold leading-relaxed mb-10">
                  40, Classic Enclave, <br/>
                  Madhavapuri Colony, <br/>
                  Sainikpuri, Secunderabad.
                </p>
                <Button
                  onClick={handleGetDirections}
                  variant="secondary"
                  size="lg"
                  className="font-bold shadow-md hover:-translate-y-1 active:translate-y-0 flex justify-center items-center py-4 px-8 text-base rounded-2xl w-full sm:w-auto"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Right Column: Maps Image with Floating Content */}
              <div className="flex-1 relative w-full min-h-[400px] lg:min-h-full">
                <Image
                  src="/maps_image.png"
                  alt="Map Location"
                  fill
                  className="object-cover"
                />
                
                {/* Floating Card: "We can't wait to see you" */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/95 backdrop-blur-sm p-4 rounded-[28px] shadow-2xl flex flex-col items-center w-[200px] md:w-[240px] border border-white">
                  <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4 shadow-inner border-[4px] border-white">
                    <Image
                      src="/galleryimg-1.jpeg"
                      alt="School Building"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-baloo text-xl font-bold text-[var(--color-secondary)] text-center leading-tight pb-1">
                    We Can&apos;t Wait to <br/> Meet You!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
