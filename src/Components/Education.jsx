import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";

const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const education = [
        {
            institution: "Islamic University of Technology",
            degree: "Bachelor of Science - BS, Computer Software Engineering",
            period: "July 2023 - May 2027",
            status: "ongoing",
        },
        {
            institution: "Gazipur Cantonment College",
            degree: "HSC, Science",
            period: "January 2021 - December 2022",
            status: "completed",
        },
        {
            institution: "BRRI High School",
            degree: "SSC, Science",
            period: "January 2018 - March 2020",
            status: "completed",
        },
    ];

    return (
        <section id="education" className="py-[3.75rem] bg-base-100 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Education
                </motion.h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-base-300 hidden md:block"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.institution}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 hidden md:block"></div>

                                {/* Education Card */}
                                <div
                                    className={`w-full md:w-5/12 ${
                                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className={`bg-base-200 p-6 rounded-lg shadow-lg ${
                                            edu.status === "completed"
                                                ? "border-l-4 md:border-l-0 border-primary"
                                                : "border-l-4 md:border-l-0 border-yellow-500"
                                        } ${
                                            index % 2 === 0
                                                ? "md:border-r-4 md:border-l-0"
                                                : "md:border-l-4"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 mb-3 justify-start">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                                    edu.status === "completed"
                                                        ? "bg-primary/20"
                                                        : "bg-yellow-500/20"
                                                }`}
                                            >
                                                <GraduationCap
                                                    className={`w-6 h-6 ${
                                                        edu.status === "completed"
                                                            ? "text-primary"
                                                            : "text-yellow-500"
                                                    }`}
                                                />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="text-xl font-bold">{edu.institution}</h3>
                                                <p className="text-base-content/80">{edu.degree}</p>
                                                <p className="text-sm text-base-content/60">{edu.period}</p>
                                            </div>
                                        </div>
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                                edu.status === "completed"
                                                    ? "bg-primary/20 text-primary"
                                                    : "bg-yellow-500/20 text-yellow-500"
                                            } ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                                        >
                                            {edu.status === "completed" ? "Completed" : "Ongoing"}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

