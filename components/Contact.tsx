
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

// Define types for inline arrays for better clarity
type ContactDetailItem = {
  href?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  label: string;
  noHref?: boolean;
};

type SocialLinkItem = {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  hoverClass: string;
};


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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form data submitted (simulation):', formData);
    // For a real backend, you'd send this to an endpoint that emails to:
    console.log('Target email for actual implementation: priyanshubth6742@gmail.com');

    setIsSubmitting(false);
    setSubmitStatus('success'); // Assuming success for now
    setFormData({ name: '', email: '', subject: '', message: '' }); 
    setErrors({});
    
    // Clear status message after a while
    setTimeout(() => setSubmitStatus(null), 7000);
  };

  const inputClass = "w-full px-5 py-3.5 bg-slate-700/60 border border-slate-600 rounded-lg text-slate-200 text-md placeholder-slate-400/80 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:bg-slate-700/90 focus:shadow-lg focus:shadow-sky-500/20 outline-none transition-all duration-300 ease-in-out shadow-sm";
  const errorTextClass = "text-red-400 text-xs mt-1.5 ml-1";
  
  const contactDetailsItems: ContactDetailItem[] = [
    { href: `mailto:${contactInfo.email}`, icon: MailIcon, text: contactInfo.email, label: "Email" },
    { href: `tel:${contactInfo.phone}`, icon: PhoneIcon, text: contactInfo.phone, label: "Phone" },
    { icon: MapPinIcon, text: contactInfo.location, label: "Location", noHref: true }
  ];

  const socialLinksItems: SocialLinkItem[] = [
    { href: contactInfo.linkedin, icon: LinkedinIcon, title: "LinkedIn", hoverClass: "hover:text-sky-400" },
    { href: contactInfo.github, icon: GithubIcon, title: "GitHub", hoverClass: "hover:text-sky-400" },
    { href: contactInfo.whatsapp, icon: PhoneIcon, title: "WhatsApp", hoverClass: "hover:text-green-400" },
    { href: contactInfo.facebook, icon: UserIcon, title: "Facebook", hoverClass: "hover:text-blue-400" },
    { href: contactInfo.codechef, icon: GlobeAltIcon, title: "CodeChef", hoverClass: "hover:text-orange-400" }
  ];

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="contact" title="Get In Touch">
        <div className="p-6 sm:p-10 md:p-12 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-sky-500/20 transition-shadow duration-500 overflow-hidden">
            <AnimateOnScroll>
              <p className="text-center text-lg sm:text-xl text-slate-300 mb-10 sm:mb-16 leading-relaxed max-w-3xl mx-auto">
                Excited to connect! Whether you have a query, a project idea, or just want to say hello, my digital door is always open. Let's discuss how we can create something impactful together.
              </p>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimateOnScroll className="h-full">
              {/* Left Column: Contact Information */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 mb-8 text-center md:text-left pb-2 border-b-2 border-sky-500/30">Let's Connect</h3>
                <div className="space-y-5 flex-grow">
                  {contactDetailsItems.map((item: ContactDetailItem) => (
                    <div 
                      key={item.label} 
                      className={`flex items-start bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/30 ${!item.noHref ? 'group hover:bg-slate-700' : ''}`}
                    >
                      <item.icon className={`w-7 h-7 text-sky-400 mr-5 mt-1 flex-shrink-0 ${!item.noHref ? 'group-hover:text-sky-300' : ''}`} />
                      <div>
                        <span className="block text-xs text-slate-400 mb-0.5">{item.label}</span>
                        {item.noHref ? (
                          <span className="text-slate-200 text-md break-all">{item.text}</span>
                        ) : (
                          <a href={item.href} className="text-slate-200 text-md group-hover:text-sky-300 transition-colors break-all">{item.text}</a>
                        )}
                      </div>
                    </div>
                  ))}
                
                  <h4 className="text-lg font-semibold text-sky-400 pt-5 mb-3">Find me on the web:</h4>
                  <div className="flex space-x-3">
                    {socialLinksItems.map((social: SocialLinkItem) => (
                      <a 
                        key={social.title} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title={social.title} 
                        className={`text-slate-400 ${social.hoverClass} transition-all duration-300 transform hover:scale-110 p-1.5 hover:bg-slate-700/50 rounded-full`}
                      >
                        <social.icon className="w-8 h-8 sm:w-9 sm:h-9" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-10 text-md text-sky-200/90 italic border-l-4 border-sky-500 pl-4 py-3 bg-slate-700/40 rounded-r-md shadow-inner">
                  I'm passionate about building innovative solutions and collaborating on exciting projects. Don't hesitate to reach out – let's create something amazing together!
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="h-full" delayClass="delay-100">
              {/* Right Column: Contact Form */}
              <div className="h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 mb-8 text-center md:text-left pb-2 border-b-2 border-sky-500/30">Send a Direct Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${inputClass} ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-600'}`} placeholder="e.g., John Doe" aria-required="true" aria-invalid={!!errors.name} />
                    {errors.name && <p className={errorTextClass} role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Your Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${inputClass} ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-600'}`} placeholder="you@example.com" aria-required="true" aria-invalid={!!errors.email}/>
                    {errors.email && <p className={errorTextClass} role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">Subject (Optional)</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className={`${inputClass} border-slate-600`} placeholder="Regarding your portfolio..." />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                    <textarea name="message" id="message" rows={6} value={formData.message} onChange={handleChange} className={`${inputClass} ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-600'} flex-grow min-h-[140px]`} placeholder="Your message here..." aria-required="true" aria-invalid={!!errors.message}></textarea>
                    {errors.message && <p className={errorTextClass} role="alert">{errors.message}</p>}
                  </div>
                  <div className="mt-auto pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg 
                                 hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-sky-500/30 
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500
                                 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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
                          <PaperAirplaneIcon className="w-5 h-5 mr-2.5 transform -rotate-45 group-hover:translate-x-1 transition-transform duration-300" /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-600/30 border border-green-500 text-green-300 rounded-lg flex items-start shadow-md" role="status">
                    <CheckCircleIcon className="w-6 h-6 mr-3 flex-shrink-0 text-green-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-md">Message Sent (Simulated)!</h4>
                      <p className="text-sm">Thank you! If this were live, your message would be on its way to priyanshubth6742@gmail.com.</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && ( 
                  <div className="mt-6 p-4 bg-red-600/30 border border-red-500 text-red-300 rounded-lg flex items-start shadow-md" role="alert">
                    <ExclamationCircleIcon className="w-6 h-6 mr-3 flex-shrink-0 text-red-400 mt-0.5" />
                     <div>
                      <h4 className="font-semibold text-md">Submission Failed!</h4>
                      <p className="text-sm">Something went wrong. Please try again or use the contact details.</p>
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