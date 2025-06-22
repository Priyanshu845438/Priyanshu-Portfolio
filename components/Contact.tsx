import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Section } from './Section';
import {
  MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, GlobeAltIcon, UserIcon, PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon
} from './Icons';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ContactInfo, ContactProps } from '../types';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSectionVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05 });

    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
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

    try {
      const result = await emailjs.send(
        'service_womvw0b',           // your EmailJS service ID
        'template_td2cz49',         // your EmailJS template ID
        formData,                   // must match template fields
        'l7vsGLzxBp8Lu-Fqc'         // your public key (user ID)
      );
      console.log('Email sent:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 6000);
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
        <div className="p-6 sm:p-10 md:p-12 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-sky-500/20">
          <AnimateOnScroll>
            <p className="text-center text-lg sm:text-xl text-slate-300 mb-10 sm:mb-16 leading-relaxed max-w-3xl mx-auto">
              I'm always open to new opportunities or just a quick hello! Fill the form to get in touch.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Contact Info Column */}
            <AnimateOnScroll className="h-full">
              <div className="space-y-6">
                {contactDetailsItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-slate-700/50 p-4 rounded-md">
                    <item.icon className="w-6 h-6 text-sky-400" />
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      {item.noHref ? (
                        <span className="text-slate-100">{item.text}</span>
                      ) : (
                        <a href={item.href} className="text-slate-100 hover:text-sky-300">{item.text}</a>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  {socialLinksItems.map(social => (
                    <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer"
                      className={`text-slate-300 ${social.hoverClass} p-2 rounded-full`}>
                      <social.icon className="w-7 h-7" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form Column */}
            <AnimateOnScroll className="h-full delay-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm text-slate-300">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                  {errors.name && <p className={errorTextClass}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  {errors.email && <p className={errorTextClass}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm text-slate-300">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-slate-300">Message</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} className={inputClass} />
                  {errors.message && <p className={errorTextClass}>{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-lg transition duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 mt-4">❌ Failed to send message. Please try again.</p>
                )}
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </Section>
    </div>
  );
};
