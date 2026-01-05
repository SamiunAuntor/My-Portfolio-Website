import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Database, Rocket, Cloud, Settings, Monitor } from "lucide-react";

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: Code,
            title: "Full Stack Web Development",
            description: "Building complete web applications with MERN stack, from frontend to backend.",
        },
        {
            icon: Monitor,
            title: "Frontend Development",
            description: "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
        },
        {
            icon: Server,
            title: "Backend Development",
            description: "Designing robust server-side architectures with Node.js, Express.js, and RESTful APIs.",
        },
        {
            icon: Database,
            title: "Database Design",
            description: "Designing and implementing efficient database schemas with MongoDB, MySQL, and Prisma.",
        },
        {
            icon: Cloud,
            title: "Firebase Integration",
            description: "Implementing authentication, real-time databases, and cloud functions with Firebase.",
        },
        {
            icon: Rocket,
            title: "Deployment",
            description: "Deploying applications on Vercel, Firebase, Cloudflare, and Netlify for optimal performance and scalability.",
        },
    ];

    return (
        <section id="services" className="py-[3.75rem] bg-base-200 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Services
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center md:text-left">{service.title}</h3>
                                <p className="text-base-content/80 text-center md:text-left">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
