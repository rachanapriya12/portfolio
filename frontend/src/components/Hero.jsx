"use client"

import { motion } from "framer-motion"
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import BackgroundCarousel from "./background/BackgroundCarousel"
import { useMobile } from "../hooks/use-mobile"

const Hero = () => {
const isMobile = useMobile()

return (
<section id="home" className="relative min-h-screen flex items-center pt-16">
    <BackgroundCarousel />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-2 lg:order-1"
        >
        <div className="p-4 sm:p-8 max-w-xl text-white">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Rachana Priya Martha
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4 sm:mb-6">
                Full Stack Developer
            </h3>
            <p className="text-base sm:text-lg text-gray-200 max-w-xl mb-6 sm:mb-8">
                Building AI-driven applications and scalable web solutions with expertise in MERN stack and AWS.
            </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
            <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
            >
                Contact Me
            </a>
            <a
                href="#projects"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
            >
                View Projects
            </a>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex space-x-3 sm:space-x-4"
            >
            <a
                href="https://github.com/rachanapriya12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
                <FiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
                href="https://www.linkedin.com/in/rachana-m-586637294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
                <FiLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
                href="mailto:martharachanapriya@gmail.com"
                aria-label="Email"
                className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
                <FiMail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            </motion.div>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-2 flex justify-center"
        >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <div
            className={`relative ${isMobile ? "w-48 h-48" : "w-64 h-64 md:w-80 md:h-80"} rounded-full overflow-hidden border-2 border-white/30`}
            >
            <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Rachana Priya Martha"
                className="object-cover w-full h-full"
            />
            </div>
        </div>
        </motion.div>
    </div>

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
    >
        <button
        className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors animate-bounce"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        >
        <FiArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
    </motion.div>
    </div>
</section>
)
}

export default Hero
