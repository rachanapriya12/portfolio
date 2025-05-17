"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export const GlassCard = ({ children, className, hoverEffect = true, glowEffect = false, delay = 0 }) => {
return (
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={cn(
    "backdrop-blur-lg bg-white/20 dark:bg-gray-900/30 rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg",
    hoverEffect && "hover:shadow-xl hover:bg-white/30 dark:hover:bg-gray-800/40 transition-all duration-300",
    glowEffect && "animate-pulse-glow",
    className,
    )}
>
    {children}
</motion.div>
)
}
