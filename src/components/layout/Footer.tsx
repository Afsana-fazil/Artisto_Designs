
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/artisto.designs/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/artisto-designs2025/posts/?feedView=all", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/share/1A3qqCBLF4/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/OfficialArtisto?t=6g0MIJhQ8g7xam34NMMDWA&s=09", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#33439b] text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-poppins font-bold text-xl mb-4">Artisto Designs</h3>
          <p className="text-white/90 mb-6">
            Your one-stop design partner. We transform ideas into stunning visual experiences.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white/80 transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white/80 transition-colors">Services</Link></li>
            <li><Link to="/works" className="hover:text-white/80 transition-colors">Our Works</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-poppins font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="mailto:theartistodesigns@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} />
                theartistodesigns@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+916282437768" className="flex items-center gap-2 hover:text-white">
                <Phone size={16} />
                +91 6282 437 768
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>Trivandrum District,<br />Kerala, India</span>
            </li>
          </ul>

          <div className="mt-4">
            <h5 className="font-medium mb-2">Business Hours</h5>
            <p className="text-white/90">Everyday: 6:00 AM to 9:00 PM</p>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-white/20">
        <p className="text-center text-white/80">
          Copyright © {new Date().getFullYear()} Artisto Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
