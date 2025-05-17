"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme/ThemeProvider"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Experience", href: "#experience" },
{ name: "Projects", href: "#projects" },
{ name: "Education", href: "#education" },
{ name: "Certifications", href: "#certifications" },
{ name: "Contact", href: "#contact" },
]

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState("home")
const { theme, setTheme } = useTheme()

useEffect(() => {
const handleScroll = () => {
    if (window.scrollY > 10) {
    setIsScrolled(true)
    } else {
    setIsScrolled(false)
    }

    // Update active section based on scroll position
    const sections = navLinks.map((link) => link.href.substring(1))
    const scrollPosition = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i])
        break
    }
    }
}

window.addEventListener("scroll", handleScroll)
return () => window.removeEventListener("scroll", handleScroll)
}, [])

const toggleTheme = () => {
setTheme(theme === "dark" ? "light" : "dark")
}

return (
<header
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4"
    }`}
>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-14">
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 font-bold text-xl"
        >
        <a href="#home" className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Rachana Priya
        </a>
        </motion.div>

        <nav className="hidden md:block">
        <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
            <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <a
                href={link.href}
                className={`transition-colors duration-300 text-sm lg:text-base ${
                    activeSection === link.href.substring(1)
                    ? "text-purple-600 dark:text-purple-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
                >
                {link.name}
                </a>
            </motion.li>
            ))}
        </ul>
        </nav>

        <div className="flex items-center space-x-4">
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </button>

        <div className="md:hidden">
            <button
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            >
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
        </div>
        </div>
    </div>
    </div>

    {/* Mobile menu */}
    <AnimatePresence>
    {mobileMenuOpen && (
        <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        >
        <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
                <li key={link.name}>
                <a
                    href={link.href}
                    className={`block transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                        ? "text-purple-600 dark:text-purple-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </motion.div>
    )}
    </AnimatePresence>
</header>
)
}

export default Navbar
