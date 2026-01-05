import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [theme, setTheme] = useState("dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    // Detect active section on scroll
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const navLinks = [
        { name: "About Me", href: "#about" },
        { name: "Area of Expertise", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Get In Touch", href: "#contact" },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            // Use Lenis smooth scroll if available, otherwise fallback
            const lenis = window.lenis;
            if (lenis) {
                lenis.scrollTo(element, { offset: -80 });
            } else {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300/50 shadow-lg">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Left - Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl md:text-2xl font-bold text-primary"
                    >
                        Samiun Alim Auntor
                    </motion.div>

                    {/* Middle - Nav Links (Desktop) */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`relative transition-colors duration-300 font-medium ${
                                        isActive
                                            ? "text-primary font-semibold"
                                            : "text-base-content hover:text-primary"
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavLink"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right - Theme Toggle, Hire Me, Menu */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-base-200 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-primary" />
                            ) : (
                                <Moon className="w-5 h-5 text-primary" />
                            )}
                        </motion.button>

                        {/* Hire Me Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection("#contact")}
                            className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                        >
                            Hire Me
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-base-200 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-primary" />
                            ) : (
                                <Menu className="w-6 h-6 text-primary" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-3">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.button
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`block w-full text-center px-4 py-2 rounded-lg transition-colors ${
                                                isActive
                                                    ? "bg-primary text-white font-semibold"
                                                    : "text-base-content hover:text-primary hover:bg-base-200"
                                            }`}
                                        >
                                            {link.name}
                                        </motion.button>
                                    );
                                })}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                                    onClick={() => scrollToSection("#contact")}
                                    className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Hire Me
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default NavBar;
