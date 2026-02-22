import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { contactInfo, socialLinks } from '@/Data/contact.data';
import { getColorClasses } from '@/lib/utils/color.utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-tech-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="card-tech ">
              <h2 className="text-2xl font-bold mb-6 text-glow">Send a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-success mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-elevated border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-elevated border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-elevated border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-tech w-full flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Direct Contact */}
            <div className="card-tech">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${getColorClasses(info.color)}`}
                      >
                        <div className="mr-4">{info.icon}</div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${getColorClasses(info.color)}`}>
                        <div className="mr-4">{info.icon}</div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-tech">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg border transition-all duration-300 group ${getColorClasses(social.color)}`}
                  >
                    <div className="mr-4">{social.icon}</div>
                    <div>
                      <p className="font-medium">{social.title}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-tech max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-tech-gradient">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, need technical consultation, or just want to connect,
              I'm always excited to discuss new opportunities and collaborations.
            </p>
            <div className="font-mono text-primary text-sm">
              while(true) {"{ code(); learn(); grow(); }"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;