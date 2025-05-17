"use client"
import React from 'react';
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import About from "../src/components/content/About"
import Skills from "../src/components/content/Skills"
import Experience from "../src/components/content/Experience"
import Projects from "../src/components/content/Projects"
import Education from "../src/components/content/Education"
import Certifications from "../src/components/content/Certifications"
import Contact from "../src/components/content/Contact"
import Footer from "../src/components/Footer"
import { ThemeProvider } from "../src/components/theme/ThemeProvider"



function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-purple-600 font-semibold">RP</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider defaultTheme="system">
      <div className="relative min-h-screen">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <main>
            <Hero scrollY={scrollY} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  )
}

export default App
