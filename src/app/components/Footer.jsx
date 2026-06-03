import React from "react";
import { FaWhatsapp, FaWeixin } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { FaMapLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LINE",
      icon: SiLine,
      url: "https://line.me/ti/p/Wt4AFWhjm8",
      color: "text-green-500",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/qr/HOLAMWLYU7XTB1",
      color: "text-emerald-600",
    },
    {
      name: "WeChat",
      icon: FaWeixin,
      url: "https://u.wechat.com/kNoUN3m9KNbw49z2F4BRI94?s=2",
      color: "text-green-600",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Thai Massage",
    "Oil Massage",
    "Aromatherapy",
    "Four Hands Massage",
    "Deep Tissue Massage",
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-100 dark:from-[#1a1a1a] to-white dark:to-[#0f0f0f] text-gray-600 dark:text-gray-300 border-t border-gray-300 dark:border-[#33353F] transition-colors"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 mb-4">
              GRAND MASSAGE
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors">
              Experience ultimate relaxation with our premium outcall massage
              services in Bangkok.
            </p>
            {/* Social Links */}
            <div className="flex gap-5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-xl transition-all duration-300 hover:scale-125 hover:brightness-125`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 transition-colors">
              {content.quickLinksHeading || "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {content.quickLinks.map((label) => (
                <li key={label}>
                  <a
                    href={
                      label === "Home" || label === "首页"
                        ? "#"
                        : label === "Services" || label === "服务"
                          ? "#projects"
                          : label === "About" || label === "关于"
                            ? "#about"
                            : "#contact"
                    }
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 transition-colors">
              {content.servicesHeading || "Our Services"}
            </h4>
            <ul className="space-y-3">
              {content.services.map((service) => (
                <li key={service}>
                  <a
                    href="#projects"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 transition-colors">
              {content.contactHeading}
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <FaPhone className="text-blue-500 mt-1 text-sm flex-shrink-0" />
                <a
                  href="tel:+66XXXXXXXXX"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  +66 98 776 8734
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-blue-500 mt-1 text-sm flex-shrink-0" />
                <a
                  href="mailto:info@grandmassage.com"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  Grandmassage91@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <FaMapLocationDot className="text-blue-500 mt-1 text-sm flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-400 text-sm transition-colors">
                  Bangkok, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 transition-colors">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-500 text-sm transition-colors">
              © {currentYear} Grand Massage. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-500 transition-colors">
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
