import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import bloodBridge from "../assets/blood-bridge.png";
import billWise from "../assets/bill-wise.png";
import petCare from "../assets/pet-care.png";
import ghorBari from "../assets/ghor-bari.png";
import warrantyWallet from "../assets/warranty-wallet.png";
import shopHub from "../assets/shop-hub.png";

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            name: "GhorBari",
            subtitle: "Property Rental & Listing Platform",
            description: "A full-stack property platform for buying, renting, and managing listings in Bangladesh with real-time communication, AI-assisted features, and a trust-focused admin system.",
            highlights: [
                "Geo-location based property search by Division, District, and Upazila",
                "Real-time chat with Socket.io for instant buyer-owner communication",
                "AI-powered property descriptions and AI-assisted property discovery",
                "NID-based verification system for stronger trust and safer interactions",
                "Email and in-app notifications across application and deal lifecycle events",
                "Admin dashboard with user management, moderation, and analytics",
                "Property comparison, wishlist management, and detailed listing experiences",
            ],
            techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Firebase Admin", "Socket.io", "Tailwind CSS", "Axios", "Node-cron", "Nodemailer", "Leaflet", "Groq API"],
            liveLink: "https://ghor-bari-2c93a.web.app/",
            githubLink: "https://github.com/khandakeraliariyan/GHOR_BARI",
            image: ghorBari,
        },
        {
            name: "WarrantyWallet",
            subtitle: "Smart Warranty & Claim Reminder System",
            description: "A web platform for managing product warranties, securing purchase documents, and sending intelligent reminders before benefits expire, backed by admin management and privacy-focused workflows.",
            highlights: [
                "Firebase authentication with Google OAuth and role-based access for User and Admin roles",
                "Product and warranty management with CRUD operations, auto-calculated expiry dates, and status tracking",
                "Invoice management with up to 4 image uploads, ImageBB storage, preview modal, and downloads",
                "Dashboard analytics with platform stats, product status breakdowns, charts, and latest product insights",
                "Real-time search and filter support across product name, brand, category, status, and email reminder state",
                "Automated email reminder system with daily cron jobs, audit logs, and one-time expiry notifications",
                "Admin tools for user management, account status control, platform analytics, and homepage statistics",
            ],
            techStack: ["React", "React Router", "TanStack Query", "Axios", "Firebase", "Node.js", "Express.js", "MongoDB", "Firebase Admin", "Tailwind CSS", "Chart.js", "Nodemailer", "Node-cron", "ImageBB"],
            liveLink: "https://warranty-wallet-ad400.web.app",
            githubLink: "https://github.com/SamiunAuntor/Warranty-Wallet",
            image: warrantyWallet,
        },
        {
            name: "Blood Bridge",
            subtitle: "Blood Donation Management Platform",
            description: "A full-stack blood donation platform that connects donors and recipients with role-based workflows, request management, donor search, and dashboard-driven operations.",
            highlights: [
                "Firebase authentication with role-based access for Admin, Volunteer, and Donor users",
                "Blood donation request management with status tracking from pending to completion",
                "Donor search by blood group, district, and upazila with PDF export support",
                "Admin user management with role updates and block or unblock controls",
                "Role-specific dashboards with statistics cards, analytics charts, and recent requests",
                "Funding system with contribution tracking and Stripe-ready integration flow",
                "Responsive UI with toast notifications, SweetAlert confirmations, and form validation",
            ],
            techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Tailwind CSS", "DaisyUI", "Recharts"],
            liveLink: "https://bloodbridge-4c0c0.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-11_Blood-Bridge_Client",
            image: bloodBridge,
        },
        {
            name: "PawCare",
            subtitle: "Pet Care Services Platform",
            description: "A pet care platform that helps users explore services, connect with veterinarians, and manage service bookings through a responsive and user-friendly interface.",
            highlights: [
                "Single-page application with smooth navigation powered by React Router",
                "Authentication system with email and password login, Google sign-in, and password reset",
                "Protected routes for authenticated-only user flows",
                "User profile management for viewing and updating account details",
                "Service exploration with detailed pages and booking form submission",
                "Expert veterinarian section with responsive, animation-driven UI components",
                "Toast notifications and mobile-friendly design across the full experience",
            ],
            techStack: ["React", "Vite", "React Router", "Firebase", "Tailwind CSS", "DaisyUI", "Swiper.js", "React Fast Marquee", "Animate.css", "React Hot Toast"],
            liveLink: "https://pet-care-e7a9f.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-9_Pet-Care",
            image: petCare,
        },
        {
            name: "Bill Wise",
            subtitle: "Utility Bill Management System",
            description: "A secure MERN stack utility bill management system for viewing, updating, filtering, and managing monthly bills with dashboard workflows and reporting features.",
            highlights: [
                "Secure authentication with email and password login plus Google OAuth support",
                "Admin dashboard for managing users, bills, and analytics workflows",
                "User dashboard for personal bill management and public bill submission",
                "Bill management for Electricity, Gas, Water, and Internet categories",
                "PDF report download for paid bills using jsPDF and AutoTable",
                "Category filtering, charts, and secure API requests with Axios interceptors",
                "Responsive UI with theme toggle, notifications, loading states, and extra info pages",
            ],
            techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "DaisyUI", "Axios", "Recharts"],
            liveLink: "https://billwise-375a5.web.app/",
            githubLink: "https://github.com/SamiunAuntor/PH-Assignment-10_Bill-Wise_Client",
            image: billWise,
        },
        {
            name: "ShopHub",
            subtitle: "Next.js Product Catalog Application",
            description: "A modern Next.js product catalog app with public product browsing, protected admin product creation, and a dummy auth system built around App Router workflows.",
            highlights: [
                "Landing page with 8 sections, including hero slider, stats, categories, testimonials, FAQ, and CTA",
                "Dummy auth system with hardcoded credentials and cookie-based session handling",
                "Protected add-product route using middleware and redirect-based access control",
                "Public product listing with search, category filtering, and client-side pagination",
                "Product details page with formatted pricing and responsive product presentation",
                "Next.js API routes reading and writing product data from a local JSON source",
                "Responsive UI with SweetAlert2, mobile navigation, and consistent product-focused design",
            ],
            techStack: ["Next.js", "React", "App Router", "Tailwind CSS", "SweetAlert2", "Lucide React", "Next.js API Routes", "JSON Storage", "Google Fonts"],
            liveLink: "https://shop-hub-theta-bay.vercel.app/",
            githubLink: null,
            image: shopHub,
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
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-72 object-cover"
                                />
                            </div>

                            {/* Project Title */}
                            <div className="px-6 pt-4">
                                <h3 className="text-2xl font-bold text-center">
                                    {project.name}
                                </h3>
                                {project.subtitle && (
                                    <p className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                                        {project.subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {project.highlights ? (
                                    <div className="flex flex-col flex-grow">
                                        <p className="text-base-content/80 mb-5 text-sm leading-relaxed text-justify">
                                            {project.description}
                                        </p>

                                        <div className="mb-5">
                                            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">
                                                Key Highlights
                                            </h4>
                                            <ul className="space-y-2 text-sm text-base-content/80">
                                                {project.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex items-start gap-2">
                                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary"></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-5">
                                            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">
                                                Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/80"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p 
                                        className="text-base-content/80 mb-4 text-sm leading-relaxed text-justify flex-grow"
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                    />
                                )}

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
                                    {project.githubLink && (
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
                                    )}
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
