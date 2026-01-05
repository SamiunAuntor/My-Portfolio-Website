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
            content: "Full-Stack Development with MERN (MongoDB, Express, React, Node.js), Firebase Authentication, REST APIs, and database design. Experienced in building responsive, user-friendly web applications.",
        },
        {
            title: "Achievements",
            content: "Completed multiple academic and personal projects involving full-stack web apps; expanding backend and database skills for scalable SaaS applications. Hands-on experience with Git/GitHub and deployment workflows.",
        },
        {
            title: "Passion & Goals",
            content: "Motivated by learning and building impactful solutions. Exploring system design, backend architecture, and database management to grow into a well-rounded full-stack developer.",
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
                            I am a Software Engineering student at the Islamic University of Technology, dedicated to building robust and user-centric web applications. I am proficient in the MERN stack and now diving deep into Next.js, System Design, and Relational Databases to build scalable, real-world solutions. I thrive on the learning process, constantly refining my approach to clean code and efficient architecture.
                        </p>
                        <p className="text-justify">
                            I am a Software Engineering student at the Islamic University of Technology, specializing in web development and building full-stack applications with the MERN stack. I am passionate about learning and creating practical solutions.
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
