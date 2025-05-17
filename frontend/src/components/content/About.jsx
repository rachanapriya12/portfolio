"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GlassCard } from "../ui-common/glass-card"

const About = () => {
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

return (
<section id="about" className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
    >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        About <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <GlassCard className="p-8">
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
            I’m a results-driven Full Stack Developer with hands-on experience in building scalable web and mobile applications using the MERN stack and modern frontend tools like React, Vite, and Tailwind CSS. I thrive on crafting clean, user-friendly interfaces and robust backend systems that deliver seamless digital experiences.
            </p>

            <p>
            I'm deeply passionate about the intersection of technology and intelligence—actively exploring Generative AI, LLM applications, and AI Agents to build smarter, adaptive solutions. My journey is driven by curiosity and a relentless desire to innovate, learn, and contribute to impactful tech. Whether it's coding a sleek UI or fine-tuning an AI interaction, I aim to create experiences that matter.
            </p>
        </div>
        </GlassCard>
    </motion.div>
    </div>
</section>
)
}

export default About
