import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Color mapping with vibrant light mode and dark mode variants
    const skillColors = {
        "React": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "React.js": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "Next.js": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "TailwindCSS": "bg-teal-400 dark:bg-teal-900/30 text-teal-900 dark:text-teal-300 border-teal-500 dark:border-teal-700/50",
        "Tailwind CSS": "bg-teal-400 dark:bg-teal-900/30 text-teal-900 dark:text-teal-300 border-teal-500 dark:border-teal-700/50",
        "NodeJS": "bg-green-400 dark:bg-green-900/30 text-green-900 dark:text-green-300 border-green-500 dark:border-green-700/50",
        "Node.js": "bg-green-400 dark:bg-green-900/30 text-green-900 dark:text-green-300 border-green-500 dark:border-green-700/50",
        "MongoDB": "bg-emerald-400 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-300 border-emerald-500 dark:border-emerald-700/50",
        "JavaScript (ES6+)": "bg-yellow-400 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300 border-yellow-500 dark:border-yellow-700/50",
        "JS": "bg-yellow-400 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300 border-yellow-500 dark:border-yellow-700/50",
        "Express.js": "bg-gray-500 dark:bg-gray-700/30 text-gray-900 dark:text-gray-300 border-gray-600 dark:border-gray-600/50",
        "Git & GitHub": "bg-orange-400 dark:bg-orange-900/30 text-orange-900 dark:text-orange-300 border-orange-500 dark:border-orange-700/50",
        "Git": "bg-orange-400 dark:bg-orange-900/30 text-orange-900 dark:text-orange-300 border-orange-500 dark:border-orange-700/50",
        "GitHub": "bg-orange-400 dark:bg-orange-900/30 text-orange-900 dark:text-orange-300 border-orange-500 dark:border-orange-700/50",
        "REST APIs": "bg-purple-400 dark:bg-purple-900/30 text-purple-900 dark:text-purple-300 border-purple-500 dark:border-purple-700/50",
        "Java": "bg-red-400 dark:bg-red-900/30 text-red-900 dark:text-red-300 border-red-500 dark:border-red-700/50",
        "C++": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "C": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "TypeScript": "bg-blue-500 dark:bg-blue-800/30 text-blue-50 dark:text-blue-300 border-blue-600 dark:border-blue-700/50",
        "HTML5": "bg-orange-400 dark:bg-orange-800/30 text-orange-900 dark:text-orange-300 border-orange-500 dark:border-orange-700/50",
        "CSS3": "bg-blue-500 dark:bg-blue-800/30 text-blue-50 dark:text-blue-300 border-blue-600 dark:border-blue-700/50",
        "React Router": "bg-pink-400 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 border-pink-500 dark:border-pink-700/50",
        "MySQL": "bg-blue-400 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 border-blue-500 dark:border-blue-700/50",
        "Prisma": "bg-indigo-400 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-300 border-indigo-500 dark:border-indigo-700/50",
        "Firebase": "bg-orange-400 dark:bg-orange-800/30 text-orange-900 dark:text-orange-300 border-orange-500 dark:border-orange-700/50",
        "Docker": "bg-blue-500 dark:bg-blue-800/30 text-blue-50 dark:text-blue-300 border-blue-600 dark:border-blue-700/50",
    };

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TailwindCSS", "React Router", "HTML5", "CSS3", "JS"],
        },
        {
            title: "Backend & Database",
            skills: ["NodeJS", "Express.js", "MongoDB", "MySQL", "Prisma", "Firebase"],
        },
        {
            title: "Languages & Tools",
            skills: ["C", "C++", "Java", "TypeScript", "Docker", "Git", "GitHub"],
        },
    ];

    const getSkillColor = (skill) => {
        return skillColors[skill] || "bg-gray-500 dark:bg-gray-700/30 text-gray-900 dark:text-gray-300 border-gray-600 dark:border-gray-600/50";
    };

    return (
        <section id="skills" className="py-[3.75rem] bg-base-100 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Area of Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="bg-primary/10 dark:bg-primary/5 p-6 rounded-lg shadow-lg border border-primary/20 dark:border-base-300"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{
                                            duration: 0.3,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                        }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-default shadow-md ${getSkillColor(skill)} hover:scale-105`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
