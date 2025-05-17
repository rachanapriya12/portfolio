"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiExternalLink, FiGithub, FiLayers, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const projects = [
{
title: "E-commerce Website",
description:
    "Full-featured pharmacy e-commerce platform with product listings, cart functionality, and checkout process.",
image:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["React", "Node.js", "MongoDB", "Express"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
{
title: "Chat WebApp",
description: "Real-time chat application with user authentication, message history, and notification features.",
image:
    "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["Node.js", "Socket.io", "MongoDB", "Express"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
{
title: "Weather Forecast App",
description: "Interactive weather application providing current conditions and forecasts based on location.",
image:
    "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
{
title: "Restaurant Website",
description: "Responsive restaurant website with menu display, reservation system, and contact information.",
image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["React", "Responsive Design", "CSS"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
{
title: "Admin Panel",
description: "Comprehensive admin dashboard for managing users, content, and analytics.",
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["React", "Chart.js", "Tailwind CSS"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
{
title: "Facial Detection App",
description: "Application that detects and analyzes facial features in images.",
image:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
technologies: ["JavaScript", "Face API", "Canvas"],
demoLink: "#",
codeLink: "https://github.com/rachanapriya12",
},
]

const Projects = () => {
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

const [activeIndex, setActiveIndex] = useState(1)
const [isMobile, setIsMobile] = useState(false)

// Check if we're on mobile
useEffect(() => {
const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
}

checkMobile()
window.addEventListener("resize", checkMobile)
return () => window.removeEventListener("resize", checkMobile)
}, [])

const nextProject = () => {
setActiveIndex((prev) => (prev + 1) % projects.length)
}

const prevProject = () => {
setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
}

// Calculate positions for staggered layout
const getCardPosition = (index) => {
// On mobile, only show one card 
if (isMobile) {
    return index === activeIndex
    ? { x: "0%", zIndex: 30, opacity: 1 }
    : { x: index > activeIndex ? "100%" : "-100%", zIndex: 0, opacity: 0 }
}

const diff = index - activeIndex

// Handle wrapping for circular navigation
if (diff > projects.length / 2) return { x: "-50%", zIndex: 0, opacity: 0 }
if (diff < -projects.length / 2) return { x: "50%", zIndex: 0, opacity: 0 }

if (diff === 0) return { x: "0%", zIndex: 30, opacity: 1 }
if (diff === 1 || diff === -projects.length + 1) return { x: "30%", zIndex: 20, opacity: 0.7 }
if (diff === -1 || diff === projects.length - 1) return { x: "-30%", zIndex: 20, opacity: 0.7 }

return { x: diff > 0 ? "60%" : "-60%", zIndex: 10, opacity: 0.4 }
}

return (
<section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
    </h2>

    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative h-[450px] sm:h-[500px] max-w-xs sm:max-w-sm md:max-w-md mx-auto"
    >
        {/* Project cards */}
        <div className="relative h-full flex items-center justify-center">
        {projects.map((project, index) => {
            const position = getCardPosition(index)

            return (
            <motion.div
                key={index}
                className="absolute w-full"
                initial={false}
                animate={{
                x: position.x,
                zIndex: position.zIndex,
                opacity: position.opacity,
                }}
                transition={{ duration: 0.5 }}
            >
                <div
                className={`w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    index === activeIndex
                    ? "bg-white dark:bg-gray-800"
                    : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
                }`}
                >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                        {project.title}
                    </h3>
                    <FiLayers className="h-5 w-5 text-purple-500" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between mt-auto">
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs sm:text-sm"
                    >
                        <FiGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Code</span>
                    </a>

                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition-opacity text-xs sm:text-sm"
                    >
                        <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Demo</span>
                    </a>
                    </div>
                </div>
                </div>
            </motion.div>
            )
        })}
        </div>

        {/* Navigation buttons  */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
        <button
            onClick={prevProject}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Previous project"
        >
            <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
            onClick={nextProject}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Next project"
        >
            <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        </div>
    </motion.div>
    </div>
</section>
)
}

export default Projects
