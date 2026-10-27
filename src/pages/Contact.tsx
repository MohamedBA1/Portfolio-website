import { useState } from 'react';
import AnimatedContainer from '../components/AnimatedContainer';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent-500" />,
      title: "Email",
      value: "my1116243@gmail.com",
      link: "mailto:my1116243@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent-500" />,
      title: "Phone",
      value: "01552662650",
      link: "tel:01552662650"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent-500" />,
      title: "Location",
      value: "Egypt",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6 text-white group-hover:text-accent-500 transition-colors" />,
      title: "GitHub",
      link: "https://github.com/MohamedBA1"
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-6xl py-12">
      <SectionHeader 
        title="Let's Build Something Meaningful." 
        subtitle="Have a project, business idea, or opportunity in mind? Let's connect."
        centered={true}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-16">
        
        {/* Contact Information */}
        <AnimatedContainer delay={0.1} className="lg:w-1/3">
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-zinc-400 text-sm font-medium mb-1">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-zinc-100 font-medium hover:text-accent-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-zinc-100 font-medium">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
            
            <div className="pt-8 border-t border-zinc-900/50">
              <h4 className="text-zinc-400 text-sm font-medium mb-4">Connect Professionally</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center group hover:border-accent-500/50 transition-all"
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-zinc-900/50">
              <h4 className="text-zinc-400 text-sm font-medium mb-4">Resume</h4>
              <a 
                href="/src/assets/Mohamed_Yassen_CV.pdf" 
                download="Mohamed_Yassen_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black border border-zinc-800 rounded-lg text-zinc-100 hover:border-accent-500/50 hover:text-accent-400 transition-all font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </AnimatedContainer>

        {/* Contact Form */}
        <AnimatedContainer delay={0.3} className="lg:w-2/3">
          <TiltCard className="rounded-2xl h-full" glowColor="rgba(20, 184, 166, 0.2)">
            <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/60">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-600 to-accent-400"></div>
              
              <h3 className="text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-400 shadow-[0_0_10px_#2dd4bf]"></span>
                Send me a message
              </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full bg-accent-500 hover:bg-accent-400 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitStatus === 'success' ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-accent-400 text-sm text-center mt-4">
                  Thank you for reaching out! I will get back to you as soon as possible.
                </p>
              )}
            </form>
          </div>
        </TiltCard>
      </AnimatedContainer>
        
      </div>
    </div>
  );
};

export default Contact;
