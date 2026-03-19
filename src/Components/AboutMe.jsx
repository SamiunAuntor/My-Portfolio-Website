import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const accordionItems = [
        {
            title: "Technical Expertise",
            content: "I build full-stack web applications with the MERN stack and Next.js, with practical experience in TypeScript, Prisma, PostgreSQL, MySQL, Firebase, and REST API development. My focus is on building responsive interfaces, secure backend systems, and maintainable application architecture.",
        },
        {
            title: "What I Am Building",
            content: "My recent work includes GhorBari, a property listing and rental platform, and WarrantyWallet, a warranty document keeper with notification features. These projects reflect my focus on building practical products with real user flows, data handling, and complete frontend-to-backend integration.",
        },
        {
            title: "Current Focus",
            content: "Right now I am actively building more projects and strengthening my overall development skills. I am working on improving how I design, structure, and ship complete applications so my work becomes more reliable, scalable, and production-ready over time.",
        },
        {
            title: "Opportunities",
            content: "I am open to job, internship, and freelance opportunities where I can contribute to real-world products and keep growing through meaningful development work. I am especially interested in roles where I can take ownership, solve practical problems, and deliver high-quality solutions.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="about" className="py-[3.75rem] bg-base-200 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                    {/* Left Side - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-base-content/90 order-1"
                    >
                        <p className="text-justify">
                            I build scalable, production-ready web applications using the MERN stack and Next.js, focusing on clean architecture, performance, and user experience. I develop complete systems-from responsive frontend interfaces to secure backend APIs, database design (SQL & NoSQL), and deployment.
                        </p>
                        <p className="text-justify">
                            I have hands-on experience building real-world applications, including landing pages, authentication systems, role-based access control, real-time features, automated workflows, and admin dashboards. I focus on writing maintainable code and designing systems that are reliable, efficient, and easy to scale.
                        </p>
                        <p className="text-justify">
                            Currently, open to job and freelance opportunities where I can contribute to real-world products and deliver high-quality solutions.
                        </p>
                    </motion.div>

                    {/* Right Side - Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4 order-2"
                    >
                        {accordionItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="bg-base-100 rounded-lg shadow-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-base-300 transition-colors"
                                >
                                    <span className="text-xl font-semibold">{item.title}</span>
                                    <motion.div
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-primary" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-base-content/80">
                                        {item.content}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
