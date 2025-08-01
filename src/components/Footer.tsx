import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

 const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/yourusername", icon: FaInstagram, color: "hover:text-pink-500" },
  { name: "WhatsApp", url: "https://wa.me/0708167754", icon: FaWhatsapp, color: "hover:text-green-500" },
  { name: "LinkedIn", url: "https://tinyurl.com/dxzuh22r", icon: FaLinkedin, color: "hover:text-blue-600" },
  { name: "Telegram", url: "https://t.me/Tonny746", icon: FaTelegram, color: "hover:text-blue-500" },
];


  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  const services = [
    "Brand Identity Design",
    "Web Design",
    "Social Media Graphics",
    "Virtual Assistant",
    "Administrative Support"
  ];

  return (
    <footer className="bg-foreground text-background py-16 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Brenda kang'acha
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Passionate graphic designer and virtual assistant dedicated to helping businesses create stunning visuals 
              and streamline their operations. Let's bring your vision to life with creativity and efficiency.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Murang'a County</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/80 hover:text-background hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-background/60">
              <p>&copy; 2025 Tonny Technologies. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
            
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;