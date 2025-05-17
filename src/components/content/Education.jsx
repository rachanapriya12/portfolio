"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiAward, FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const educationItems = [
{
degree: "Full Stack MERN Developer certification",
institution: "Edyoda (online), India",
location: "Online",
year: "February 2024",
},
{
degree: "Master of Technology in Power system Control and Automation",
institution: "JNTUH University, Vaagdevi College of Engineering",
location: "Warangal, Telangana",
year: "2020",
},
{
degree: "Bachelors of Technology in Electrical and Electronics Engineering",
institution: "JNTUH University, SumatiReddy Institute of Technology for women",
location: "Warangal, Telangana",
year: "2018",
},
]

const Education = () => {
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

//event listener
window.addEventListener("resize", handleResize)

// Cleanup
return () => window.removeEventListener("resize", handleResize)
}, [])

const nextEducation = () => {
setActiveIndex((prev) => (prev + 1) % educationItems.length)
}

const prevEducation = () => {
setActiveIndex((prev) => (prev - 1 + educationItems.length) % educationItems.length)
}

// Calculate positions for staggered layout
const getCardPosition = (index) => {
const diff = index - activeIndex

// On mobile, only show one card 
if (isMobile) {
    return index === activeIndex
    ? { x: "0%", zIndex: 30, opacity: 1 }
    : { x: index > activeIndex ? "100%" : "-100%", zIndex: 0, opacity: 0 }
}

// Handle wrapping for circular navigation
if (diff > educationItems.length / 2) return { x: "-50%", zIndex: 0, opacity: 0 }
if (diff < -educationItems.length / 2) return { x: "50%", zIndex: 0, opacity: 0 }

if (diff === 0) return { x: "0%", zIndex: 30, opacity: 1 }
if (diff === 1 || diff === -educationItems.length + 1) return { x: "30%", zIndex: 20, opacity: 0.7 }
if (diff === -1 || diff === educationItems.length - 1) return { x: "-30%", zIndex: 20, opacity: 0.7 }

return { x: diff > 0 ? "60%" : "-60%", zIndex: 10, opacity: 0.4 }
}

return (
<section id="education" className="py-16 md:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Education</span>{" "}
        & Training
    </h2>

    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] sm:h-[350px] max-w-xs sm:max-w-sm mx-auto"
        key={`education-container-${windowWidth < 768 ? "mobile" : "desktop"}`}
    >
        {/* Education cards */}
        <div className="relative h-full flex items-center justify-center">
        {educationItems.map((edu, index) => {
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
                className={`w-full h-[250px] sm:h-[300px] rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    index === activeIndex
                    ? "bg-white dark:bg-gray-800"
                    : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
                }`}
                >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-xl"></div>
                <div className="flex items-center mb-4">
                    <div className="p-1.5 sm:p-2 rounded-full bg-purple-100 dark:bg-purple-900 mr-2 sm:mr-3">
                    <FiAward className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                </div>
                <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-4">{edu.institution}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                    <FiCalendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{edu.year}</span>
                    </div>

                    <div className="flex items-center">
                    <FiMapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{edu.location}</span>
                    </div>
                </div>
                </div>
            </motion.div>
            )
        })}
        </div>

        {/* Navigation buttons */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
        <button
            onClick={prevEducation}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Previous education"
        >
            <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
            onClick={nextEducation}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Next education"
        >
            <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        </div>
    </motion.div>
    </div>
</section>
)
}

export default Education
