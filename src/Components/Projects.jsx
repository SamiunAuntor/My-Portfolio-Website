import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            name: "Blood Bridge",
            description: "Blood Bridge is a comprehensive <strong>MERN-stack</strong> application connecting blood donors with recipients. Features include secure <strong>Firebase authentication</strong>, complete donation lifecycle management, and location-based donor search using <strong>geolocation</strong> services. Key highlights include <strong>real-time</strong> notifications for urgent requests, donor eligibility tracking, donation history management, and an advanced <strong>analytics</strong> dashboard. Built with <strong>Express.js</strong> backend, <strong>MongoDB</strong> for data persistence, and <strong>React</strong> frontend. Users can create profiles, search donors by blood type and location, manage requests, and track contribution history with verified profiles and secure communication.",
            liveLink: "https://bloodbridge-4c0c0.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-11_Blood-Bridge_Client",
            color: "bg-red-500",
        },
        {
            name: "Bill Wise",
            description: "Bill Wise is a <strong>MERN-stack</strong> utility management platform for tracking monthly household expenses. Features dual-layer <strong>dashboards</strong> for members and administrators, enabling transparent financial management. Key features include expense categorization, automated bill calculations, <strong>PDF export</strong> functionality, and interactive <strong>charts</strong> for visual analysis. Supports multiple payment methods, expense splitting, and automated reminders. Built with <strong>React</strong> frontend, <strong>Node.js</strong> and <strong>Express.js</strong> backend, and <strong>MongoDB</strong> storage. Users can track utility bills, manage subscriptions, generate reports, and maintain complete financial history with role-based access control and detailed <strong>analytics</strong>.",
            liveLink: "https://billwise-375a5.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-10_Bill-Wise_Client",
            color: "bg-blue-500",
        },
        {
            name: "PawCare",
            description: "PawCare is a pet wellness <strong>Single Page Application</strong> built with <strong>React 19</strong> and <strong>Vite 7</strong>, focusing on comprehensive pet management and veterinary services. Features an extensive service catalog covering grooming, health checkups, vaccinations, and emergency care. Key highlights include secure <strong>Firebase authentication</strong>, professional veterinary profiles with ratings, appointment booking system, and pet health record management. Built with modern <strong>React hooks</strong> and <strong>context API</strong>. Users can browse services, book appointments, maintain pet profiles, track vaccination schedules, and access consultations with intuitive navigation and <strong>real-time</strong> availability updates.",
            liveLink: "https://pet-care-e7a9f.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-9_Pet-Care",
            color: "bg-green-500",
        },
        {
            name: "GhorBari",
            description: "GhorBari is a high-trust real estate marketplace built on <strong>MERN stack</strong>, facilitating secure property transactions with advanced fraud prevention. Features map-based property discovery, <strong>NID-based</strong> identity verification, <strong>AI-powered</strong> fair rent estimation, and <strong>real-time</strong> chat system. Includes comprehensive trust rating system, secure payment processing, property galleries, detailed listings, and advanced search filters. Built with <strong>MongoDB</strong>, <strong>Express.js</strong>, and <strong>React</strong>. Users can discover properties, verify identities, estimate rents, communicate directly, compare properties, save searches, and receive notifications for new listings with complete documentation management.",
            liveLink: null,
            githubLink: "https://github.com/khandakeraliariyan/GHOR_BARI",
            color: "bg-purple-500",
        },
    ];

    return (
        <section id="projects" className="py-[3.75rem] bg-base-200 w-full overflow-x-hidden">
            <div ref={ref} className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-base-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`${project.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                                />
                                <h3 className="text-2xl font-bold text-white z-10 relative">
                                    {project.name}
                                </h3>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <p 
                                    className="text-base-content/80 mb-4 text-sm leading-relaxed text-justify flex-grow"
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                />

                                {/* Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Live
                                        </motion.a>
                                    )}
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                                            project.liveLink
                                                ? "bg-base-200 text-primary hover:bg-base-300"
                                                : "bg-primary text-white hover:bg-primary-dark"
                                        }`}
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
