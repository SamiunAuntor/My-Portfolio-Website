import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
        { name: "About Me", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/SamiunAuntor", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/samiun-alim-auntor/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:samiunalimauntor@gmail.com", label: "Email" },
        { icon: Phone, href: "tel:+8801988774499", label: "Phone" },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-base-200 text-base-content mt-6 w-full overflow-x-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-[2.4rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-primary mb-3">Samiun Alim Auntor</h3>
                        <p className="text-base-content/80">
                            Full Stack Developer specializing in MERN stack, building scalable and user-centric web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
                        <ul className="grid grid-cols-2 gap-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-base-content/80 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-3">Connect With Me</h4>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-base-300 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width border and copyright */}
            <div className="w-full border-t border-base-300">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-[0.9rem]">
                    <p className="text-base-content/60 text-center">
                        © {currentYear} Samiun Alim Auntor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
