
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { ContactInfo, ContactProps } from '../types'; 
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, GlobeAltIcon, UserIcon, PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from './Icons';
import { AnimateOnScroll } from './AnimateOnScroll';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 } 
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form data submitted (simulation):', formData);
    console.log('Target email for actual implementation: priyanshubth6742@gmail.com');

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' }); 
    setErrors({});
    
    setTimeout(() => setSubmitStatus(null), 7000);
  };

  const inputClass = "w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all duration-200 ease-in-out focus:bg-slate-700";
  const errorTextClass = "text-red-400 text-xs mt-1";

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="contact" title="Get In Touch">
        <div className="p-4 sm:p-8 md:p-10 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-sky-500/10 transition-shadow duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 md:items-stretch">
            <AnimateOnScroll className="h-full">
              {/* Left Column: Contact Information */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-sky-400 mb-6">Contact Information</h3>
                <div className="space-y-4 flex-grow">
                  {[
                    { href: `mailto:${contactInfo.email}`, icon: MailIcon, text: contactInfo.email, label: "Email" },
                    { href: `tel:${contactInfo.phone}`, icon: PhoneIcon, text: contactInfo.phone, label: "Phone" },
                    { icon: MapPinIcon, text: contactInfo.location, label: "Location", noHref: true }
                  ].map(item => (
                    <div key={item.label} className={`flex items-start p-3 rounded-lg transition-colors duration-300 ${!item.noHref ? 'hover:bg-slate-700/50 group' : ''}`}>
                      <item.icon className={`w-6 h-6 text-sky-500 mr-4 mt-0.5 flex-shrink-0 ${!item.noHref ? 'group-hover:text-sky-300' : ''}`} />
                      {item.noHref ? (
                        <span className="text-slate-300">{item.text}</span>
                      ) : (
                        <a href={item.href} className="text-slate-300 group-hover:text-sky-300 transition-colors break-all">{item.text}</a>
                      )}
                    </div>
                  ))}
                
                  <div className="flex space-x-4 pt-4">
                    {[
                      { href: contactInfo.linkedin, icon: LinkedinIcon, title: "LinkedIn", hoverClass: "hover:text-sky-400" },
                      { href: contactInfo.github, icon: GithubIcon, title: "GitHub", hoverClass: "hover:text-sky-400" },
                      { href: contactInfo.whatsapp, icon: PhoneIcon, title: "WhatsApp", hoverClass: "hover:text-green-400" }, // Using Phone icon
                      { href: contactInfo.facebook, icon: UserIcon, title: "Facebook", hoverClass: "hover:text-blue-400" }, // Using User icon
                      { href: contactInfo.codechef, icon: GlobeAltIcon, title: "CodeChef", hoverClass: "hover:text-orange-400" }
                    ].map(social => (
                      <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer" title={social.title} 
                         className={`text-slate-400 ${social.hoverClass} transition-colors transform hover:scale-125 p-1`}>
                        <social.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400 flex-shrink-0">
                    Alternatively, use the form to send a quick message. I typically respond within 24-48 hours. Open to new opportunities and collaborations!
                </p>
                 {/* Removed Say Hi Emoji */}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="h-full" delayClass="delay-100">
              {/* Right Column: Contact Form */}
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-sky-400 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${inputClass} ${errors.name ? 'border-red-500 ring-red-500' : ''}`} placeholder="e.g., John Doe" />
                    {errors.name && <p className={errorTextClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Your Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${inputClass} ${errors.email ? 'border-red-500 ring-red-500' : ''}`} placeholder="you@example.com" />
                    {errors.email && <p className={errorTextClass}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Subject (Optional)</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className={inputClass} placeholder="Regarding your portfolio..." />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                    <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} ${errors.message ? 'border-red-500 ring-red-500' : ''} flex-grow`} placeholder="Your message here..."></textarea>
                    {errors.message && <p className={errorTextClass}>{errors.message}</p>}
                  </div>
                  <div className="mt-auto">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2 transform -rotate-45" /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
                {submitStatus === 'success' && (
                  <div className="mt-5 p-4 bg-green-600/30 border border-green-500 text-green-300 rounded-lg flex items-start">
                    <CheckCircleIcon className="w-6 h-6 mr-3 flex-shrink-0 text-green-400" />
                    <div>
                      <h4 className="font-semibold">Message Sent (Simulated)!</h4>
                      <p className="text-sm">Thank you for your message! If this were a live site with a backend, your message would be on its way to priyanshubth6742@gmail.com.</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && ( 
                  <div className="mt-5 p-4 bg-red-600/30 border border-red-500 text-red-300 rounded-lg flex items-start">
                    <ExclamationCircleIcon className="w-6 h-6 mr-3 flex-shrink-0 text-red-400" />
                     <div>
                      <h4 className="font-semibold">Submission Failed!</h4>
                      <p className="text-sm">Something went wrong. Please try again later or use the contact details provided.</p>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Section>
    </div>
  );
};