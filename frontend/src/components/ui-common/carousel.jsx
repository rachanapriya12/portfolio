"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export const Carousel = ({
children,
autoPlay = true,
interval = 5000,
showArrows = true,
showDots = true,
className = "",
}) => {
const [currentIndex, setCurrentIndex] = useState(0)
const [isHovered, setIsHovered] = useState(false)
const timerRef = useRef(null)
const childrenArray = Array.isArray(children) ? children : [children]

const nextSlide = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
}

const prevSlide = () => {
setCurrentIndex((prevIndex) => (prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1))
}

const goToSlide = (index) => {
setCurrentIndex(index)
}

useEffect(() => {
if (autoPlay && !isHovered) {
    timerRef.current = setInterval(nextSlide, interval)
}
return () => {
    if (timerRef.current) {
    clearInterval(timerRef.current)
    }
}
}, [autoPlay, interval, isHovered])

return (
<div
    className={`relative ${className}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    <div className="overflow-hidden relative">
    <AnimatePresence mode="wait">
        <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full"
        >
        {childrenArray[currentIndex]}
        </motion.div>
    </AnimatePresence>
    </div>

    {showArrows && (
    <>
        <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors z-10"
        aria-label="Previous slide"
        >
        <FiChevronLeft className="h-6 w-6" />
        </button>
        <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors z-10"
        aria-label="Next slide"
        >
        <FiChevronRight className="h-6 w-6" />
        </button>
    </>
    )}

    {showDots && (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {childrenArray.map((_, index) => (
        <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
        />
        ))}
    </div>
    )}
</div>
)
}
