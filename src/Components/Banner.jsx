import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import avatar from "../assets/avatar.jpg";

const Banner = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/SamiunAuntor", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/samiun-alim-auntor/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:samiunalimauntor@gmail.com", label: "Email" },
        { icon: Phone, href: "tel:+8801988774499", label: "Phone" },
    ];

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Samiun_Alim_Auntor_Resume.pdf";
        link.click();
    };

    return (
        <section id="banner" className="min-h-screen flex items-center justify-center pt-20 bg-base-100 w-full overflow-x-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Mobile: Photo First, Desktop: Content First */}
                    {/* Avatar - Mobile First */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center lg:order-2 lg:justify-end order-1"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="relative"
                        >
                            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.2)' }}>
                                <motion.img
                                    src={avatar}
                                    alt="Samiun Alim Auntor"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content - Mobile Second, Desktop First */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 order-2 lg:order-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold"
                        >
                            <div>Hi 👋</div>
                            <div>I am Samiun Alim Auntor</div>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary !text-center md:!text-left"
                        >
                            Full Stack Developer ( MERN )
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-base-content/70 !text-center md:!text-left"
                        >
                            Student at IUT | Exploring System Design, Databases, Networking & Cloud Computing
                        </motion.p>

                        {/* Download Resume Button and Social Links - Beside Each Other */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-4 flex-wrap justify-center md:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={downloadResume}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.button>

                            {/* Social Links - Beside Resume Button */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 flex items-center justify-center bg-base-200 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
