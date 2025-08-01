import { useState } from "react";
// import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, MessageCircle, Linkedin, Send as Telegram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/meozzwqw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact me via email.",
        variant: "destructive"
      });
    }
  } catch (error) {
    toast({
      title: "Network Error",
      description: "Check your internet connection and try again.",
      variant: "destructive"
    });
  }

  setIsSubmitting(false);
};


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brendakangacha75@gmail.com",
      href: "mailto:brendakangacha75@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 7345 506 83",
      href: "tel:+254734550683"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Murang'a County,Kenya",
      href: null
    }
  ];

  const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/kkbresh?igsh=MTBoODUydjc5NjR3cw==", icon: FaInstagram, color: "hover:text-pink-500" },
  { name: "WhatsApp", url: "https://wa.me/+254734550683", icon: FaWhatsapp, color: "hover:text-green-500" },
  { name: "LinkedIn", url: "https://tinyurl.com/dxzuh22r", icon: FaLinkedin, color: "hover:text-blue-600" },
  { name: "Telegram", url: "https://t.me/", icon: FaTelegram, color: "hover:text-blue-500" },
];



  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="focus:ring-primary"
                    placeholder="What's your project about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="focus:ring-primary"
                    placeholder="Tell me more about your project, goals, and timeline..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  variant="hero"
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities. Whether you need graphic design services, 
                virtual assistance, or a combination of both, I'm here to help your business succeed.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <h4 className="font-semibold">Quick Response Guarantee</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  I typically respond to new inquiries within 2-4 hours during business hours (9 AM - 6 PM EST). 
                  For urgent projects, feel free to mention it in your message.
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow My Work</h4>
              <div className="flex gap-4">
            {socialLinks.map((link, index) => (
  <a
    key={index}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 ${link.color} transition duration-300 text-xl`}
  >
    <link.icon />
  </a>
))}


              </div>
            </div>

            {/* Availability */}
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-secondary">Current Availability</h4>
                <p className="text-sm text-muted-foreground">
                  I'm currently accepting new projects with start dates in August 2025. 
                  Book your spot early to secure your preferred timeline.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;