"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiCalendar, FiChevronRight, FiChevronLeft } from "react-icons/fi"

const experiences = [
{
title: "Full Stack Developer",
company: "OmniNeura AI Technologies",
period: "Apr 2024 – Feb 2025",
responsibilities: [
    "Developed AI-driven products including GPT applications, internal platforms, and user-facing studios",
    "Built and optimized scalable AI solutions using the MERN stack and AWS services",
    "Enhanced system performance and user engagement through AI functionality improvements",
    "Collaborated with cross-functional teams to integrate and deploy advanced AI features",
],
},
{
title: "Web Development Intern",
company: "CodTech IT Solutions",
period: "Mar 2024 – Apr 2024",
responsibilities: [
    "Gained hands-on experience in frontend development using HTML, CSS, and JavaScript",
    "Created responsive components and practiced debugging for UI consistency",
],
},
{
title: "Business Development Executive",
company: "INDIABUYS (Amazon)",
period: "Jun 2021 – Oct 2022",
responsibilities: [
    "Identified new business opportunities to drive revenue and profitability",
    "Collaborated with sales and marketing teams to support client acquisition",
    "Conducted market research and competitor analysis to shape business strategies",
],
},
{
title: "Additional Experience",
company: "",
period: "",
responsibilities: [
    "Developed mobile applications using React Native and Kotlin as part of self-initiated learning",
    "Utilized Zoho for sprint-based task tracking and agile workflow practice",
    "Managed digital content and social media platforms to enhance brand visibility",
    "Engaged with online tech communities and facilitated technical discussions",
    "Created structured learning resources to support peer education and engagement",
],
},
];

const Experience = () => {
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

const [activeIndex, setActiveIndex] = useState(1)
const [isMobile, setIsMobile] = useState(false)
const [windowWidth, setWindowWidth] = useState(0)

// Handle responsive layout
useEffect(() => {
// Set initial window width
setWindowWidth(window.innerWidth)

const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setIsMobile(window.innerWidth < 768)
}

// Initial check
handleResize()

// Event listener
window.addEventListener("resize", handleResize)

// Cleanup
return () => window.removeEventListener("resize", handleResize)
}, [])

const nextExperience = () => {
setActiveIndex((prev) => (prev + 1) % experiences.length)
}

const prevExperience = () => {
setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
}

// Calculate positions for staggered layout
const getCardPosition = (index) => {
// Force recalculation on window width change
const diff = index - activeIndex

// On mobile, only show one card 
if (isMobile) {
    return index === activeIndex
    ? { x: "0%", zIndex: 30, opacity: 1 }
    : { x: index > activeIndex ? "100%" : "-100%", zIndex: 0, opacity: 0 }
}

// Handle wrapping for circular navigation
if (diff > experiences.length / 2) return { x: "-50%", zIndex: 0, opacity: 0 }
if (diff < -experiences.length / 2) return { x: "50%", zIndex: 0, opacity: 0 }

if (diff === 0) return { x: "0%", zIndex: 30, opacity: 1 }
if (diff === 1 || diff === -experiences.length + 1) return { x: "30%", zIndex: 20, opacity: 0.7 }
if (diff === -1 || diff === experiences.length - 1) return { x: "-30%", zIndex: 20, opacity: 0.7 }

return { x: diff > 0 ? "60%" : "-60%", zIndex: 10, opacity: 0.4 }
}

return (
<section id="experience" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        Work{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Experience</span>
    </h2>

    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] sm:h-[450px] max-w-xs sm:max-w-sm mx-auto"
        key={`experience-container-${windowWidth < 768 ? "mobile" : "desktop"}`}
    >
        {/* Experience cards */}
        <div className="relative h-full flex items-center justify-center">
        {experiences.map((exp, index) => {
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
                className={`w-full h-[350px] sm:h-[400px] rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    index === activeIndex
                    ? "bg-white dark:bg-gray-800"
                    : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
                }`}
                >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-xl"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mt-2">{exp.title}</h3>
                {exp.company && (
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                )}

                {exp.period && (
                    <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <FiCalendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{exp.period}</span>
                    </div>
                )}

                <ul className="space-y-2 overflow-y-auto max-h-[220px] sm:max-h-[250px] pr-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        <FiChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </motion.div>
            )
        })}
        </div>

        {/* Navigation buttons */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
        <button
            onClick={prevExperience}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Previous experience"
        >
            <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
            onClick={nextExperience}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Next experience"
        >
            <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        </div>
    </motion.div>
    </div>
</section>
)
}

export default Experience
