import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

const LinkedInIcon = ({ size = 20, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h1>
          <div className="w-12 h-px bg-orange-500 mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">I'm always interested in hearing about new projects and opportunities. Feel free to reach out through the form below or contact me directly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#16161f] border border-[#2a2a3a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:gyangidevindi@gmail.com" className="text-slate-400 hover:text-orange-400 transition-colors">
                    gyangidevindi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#16161f] border border-[#2a2a3a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-slate-400">0760689429</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-[#16161f] border border-[#2a2a3a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-slate-400">Matara, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                  <ExternalLink size={20} />
                </a>
                <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#2a2a3a] rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                  <LinkedInIcon size={20} className="text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#16161f] border border-[#2a2a3a] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3a] text-white rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3a] text-white rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3a] text-white rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3a] text-white rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold rounded-xl py-3 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>

              {submitted && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
