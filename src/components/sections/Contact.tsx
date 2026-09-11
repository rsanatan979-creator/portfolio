'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '@/data/profile';
import { Button } from '../ui/Button';
import { Mail, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field for anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Client-side Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Name must be at least 2 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must be at least 10 characters.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondarySurface-light/50 dark:bg-secondarySurface-dark/30 border-t border-borderSubtle-light dark:border-borderSubtle-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get in touch for opportunities or collaboration"
          subtitle="Have an opportunity, internship inquiry, or want to discuss AI and software projects? I'd be happy to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-primaryText-light dark:text-primaryText-dark">
                Contact Information
              </h3>

              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-3 rounded-tag hover:bg-secondarySurface-light dark:hover:bg-secondarySurface-dark transition-colors group"
                >
                  <div className="p-3 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                      Email Directly
                    </h4>
                    <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark">
                      {profileData.email}
                    </p>
                  </div>
                </a>
              )}

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-tag hover:bg-secondarySurface-light dark:hover:bg-secondarySurface-dark transition-colors group"
              >
                <div className="p-3 rounded-tag bg-brand-soft text-brand dark:bg-brand-dark/20 dark:text-brand-dark group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark uppercase tracking-wider">
                    GitHub Profile
                  </h4>
                  <p className="text-sm font-bold text-primaryText-light dark:text-primaryText-dark">
                    github.com/rsanatan979-creator
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-card bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-subtle space-y-4"
            >
              <h3 className="text-xl font-bold text-primaryText-light dark:text-primaryText-dark mb-4">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-tag bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800 flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-accentEmerald shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-tag bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field - invisible to human visitors */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-primaryText-light dark:text-primaryText-dark mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-sm rounded-tag bg-background-light dark:bg-background-dark border border-borderSubtle-light dark:border-borderSubtle-dark text-primaryText-light dark:text-primaryText-dark focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-primaryText-light dark:text-primaryText-dark mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    placeholder="e.g. recruiter@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-tag bg-background-light dark:bg-background-dark border border-borderSubtle-light dark:border-borderSubtle-dark text-primaryText-light dark:text-primaryText-dark focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-primaryText-light dark:text-primaryText-dark mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="w-full px-3.5 py-2.5 text-sm rounded-tag bg-background-light dark:bg-background-dark border border-borderSubtle-light dark:border-borderSubtle-dark text-primaryText-light dark:text-primaryText-dark focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-primaryText-light dark:text-primaryText-dark mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={5000}
                  placeholder="Your message details..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-tag bg-background-light dark:bg-background-dark border border-borderSubtle-light dark:border-borderSubtle-dark text-primaryText-light dark:text-primaryText-dark focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                />
              </div>

              <Button
                type="submit"
                size="md"
                variant="primary"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
