import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // EmailJS Configuration - loaded from .env file
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Initialize EmailJS
    useEffect(() => {
        if (EMAILJS_PUBLIC_KEY) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        }
    }, [EMAILJS_PUBLIC_KEY]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is configured
        if (!EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID) {

            Swal.fire({
                icon: "error",
                title: "Configuration Error",
                text: "EmailJS is not properly configured. Please check your .env file and restart the dev server.",
                confirmButtonColor: "#10b981",
                confirmButtonText: "OK",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Format a complete message with all fields - this ensures you get all info even if template only shows message
            const completeMessage = `📧 From: ${formData.email}
📌 Subject: ${formData.subject}

💬 Message:
${formData.message}

---
You can reply directly to: ${formData.email}`;

            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_email: formData.email,
                    from_name: formData.email.split('@')[0], // Extract name from email
                    reply_to: formData.email, // For easy reply
                    subject: `Portfolio Contact: ${formData.subject}`, // Include subject in email subject line
                    message: completeMessage, // Complete message with all fields
                    // Individual fields for template flexibility
                    user_email: formData.email,
                    user_subject: formData.subject,
                    user_message: formData.message,
                }
            );

            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Thank you for your message! I'll get back to you soon.",
                confirmButtonColor: "#10b981",
                confirmButtonText: "OK",
            });
            setFormData({ email: "", subject: "", message: "" });
        } catch (error) {


            let errorMessage = "Something went wrong. Please try again later or contact me directly.";
            
            if (error.text) {
                errorMessage = error.text;
            } else if (error.status === 404) {
                errorMessage = "Template or Service not found. Please verify your EmailJS configuration in the dashboard.";
            } else if (error.status === 400) {
                errorMessage = "Invalid request. Please check your EmailJS template variables.";
            }
            
            Swal.fire({
                icon: "error",
                title: "Failed to Send",
                text: errorMessage,
                confirmButtonColor: "#10b981",
                confirmButtonText: "OK",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "samiunalimauntor@gmail.com",
            href: "mailto:samiunalimauntor@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+8801988774499",
            href: "tel:+8801988774499",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "+8801988774499",
            href: "https://wa.me/8801988774499",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Dhaka, Bangladesh",
            href: null,
        },
    ];

    return (
        <section id="contact" className="py-[3.75rem] bg-base-100 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-left">Contact Information</h3>
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ x: 8, scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors cursor-pointer justify-start"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-base-content/60">{info.label}</p>
                                        <p className="font-semibold">{info.value}</p>
                                    </div>
                                </motion.div>
                            );

                            return info.href ? (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    className="block"
                                >
                                    {content}
                                </a>
                            ) : (
                                content
                            );
                        })}
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-left">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
