"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
FiCode,
FiServer,
FiDatabase,
FiGlobe,
FiCpu,
FiCloud,
FiTerminal,
FiPenTool,
FiUsers,
FiChevronLeft,
FiChevronRight,
} from "react-icons/fi"
import { BiCodeBlock } from "react-icons/bi"

const skillCategories = [
{
title: "Frontend Development",
icon: <FiCode className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind CSS",
    "Vite",
    "Responsive Design",
],
color: "from-blue-500 to-cyan-400",
},
{
title: "Backend Development",
icon: <FiServer className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["Node.js", "Express.js", "REST APIs"],
color: "from-green-500 to-emerald-400",
},
{
title: "Databases",
icon: <FiDatabase className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["MongoDB", "MySQL"],
color: "from-amber-500 to-yellow-400",
},
{
title: "Web Technologies",
icon: <FiGlobe className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["ReactFlow", "Web Development", "Performance Optimization"],
color: "from-purple-500 to-violet-400",
},
{
title: "AI & Machine Learning",
icon: <FiCpu className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["Generative AI", "LLM Apps", "AI Agents", "Cursor AI"],
color: "from-pink-500 to-rose-400",
},
{
title: "Cloud & Deployment",
icon: <FiCloud className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["AWS (EC2/S3)", "CI/CD", "Deployment"],
color: "from-sky-500 to-blue-400",
},
{
title: "Programming Languages",
icon: <BiCodeBlock className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["JavaScript", "Python"],
color: "from-indigo-500 to-purple-400",
},
{
title: "Tools & Environments",
icon: <FiTerminal className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["Git", "GitHub", "VS Code", "MobaXterm", "PuTTY", "Command Line", "Zoho (Sprint Tracking)"],
color: "from-gray-600 to-gray-500",
},
{
title: "Design & UI/UX",
icon: <FiPenTool className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["UI/UX Principles", "User-Centric Design"],
color: "from-red-500 to-orange-400",
},
{
title: "Soft Skills",
icon: <FiUsers className="h-5 w-5 sm:h-6 sm:w-6" />,
skills: ["Communication", "Problem-Solving", "Team Leadership", "Adaptability", "Agile Workflow"],
color: "from-teal-500 to-green-400",
},
];
const Skills = () => {
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

const [activeIndex, setActiveIndex] = useState(1)
const [isMobile, setIsMobile] = useState(false)

// Checking if we're on mobile
useEffect(() => {
const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
}

checkMobile()
window.addEventListener("resize", checkMobile)
return () => window.removeEventListener("resize", checkMobile)
}, [])

const nextSkill = () => {
setActiveIndex((prev) => (prev + 1) % skillCategories.length)
}

const prevSkill = () => {
setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
}

// Calculate positions for staggered layout
const getCardPosition = (index) => {
// On mobile, only one card 
if (isMobile) {
    return index === activeIndex
    ? { x: "0%", zIndex: 30, opacity: 1 }
    : { x: index > activeIndex ? "100%" : "-100%", zIndex: 0, opacity: 0 }
}

const diff = index - activeIndex

// Handle wrapping for circular navigation
if (diff > skillCategories.length / 2) return { x: "-50%", zIndex: 0, opacity: 0 }
if (diff < -skillCategories.length / 2) return { x: "50%", zIndex: 0, opacity: 0 }

if (diff === 0) return { x: "0%", zIndex: 30, opacity: 1 }
if (diff === 1 || diff === -skillCategories.length + 1) return { x: "30%", zIndex: 20, opacity: 0.7 }
if (diff === -1 || diff === skillCategories.length - 1) return { x: "-30%", zIndex: 20, opacity: 0.7 }

return { x: diff > 0 ? "60%" : "-60%", zIndex: 10, opacity: 0.4 }
}

return (
<section id="skills" className="py-16 md:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Skills</span>
    </h2>

    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative h-[350px] sm:h-[400px] max-w-xs sm:max-w-sm mx-auto"
    >
        {/* Skill cards */}
        <div className="relative h-full flex items-center justify-center">
        {skillCategories.map((category, index) => {
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
                className={`w-full h-[300px] sm:h-[350px] rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                    index === activeIndex
                    ? "bg-white dark:bg-gray-800"
                    : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
                }`}
                >
                <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-t-xl`}
                ></div>
                <div className="flex items-center mb-4">
                    <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 sm:mr-4`}
                    >
                    {category.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                    </h3>
                </div>

                <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                    <li
                        key={skillIndex}
                        className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300"
                    >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                        <span>{skill}</span>
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
            onClick={prevSkill}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Previous skill"
        >
            <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
            onClick={nextSkill}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Next skill"
        >
            <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        </div>
    </motion.div>
    </div>
</section>
)
}

export default Skills
