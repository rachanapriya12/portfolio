"use client"
import React from 'react';
import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../theme/ThemeProvider"

const backgrounds = {
  light: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1975&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-pink-500/20 to-orange-500/20",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-green-500/20 to-blue-500/20",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-amber-500/20 to-red-500/20",
    },
  ],
  dark: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=1974&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-purple-900/40 to-pink-900/40",
    },
    {
      id: 2,
      image: "https://www.hdwallpapers.in/download/paris_eiffel_tower_with_yellow_lights_with_dark_sky_background_during_night_time_hd_travel-HD.jpg",
      overlay: "bg-gradient-to-r from-blue-900/40 to-purple-900/40",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-pink-900/40 to-orange-900/40",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-green-900/40 to-blue-900/40",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop",
      overlay: "bg-gradient-to-r from-amber-900/40 to-red-900/40",
    },
  ],
}

// const BackgroundCarousel = () => {
//   const { theme } = useTheme()
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState(1)
//   const intervalRef = useRef(null)
//   const currentBackgrounds = backgrounds[theme] || backgrounds.light
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkMobile()
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   const startInterval = useCallback(() => {
//     clearInterval(intervalRef.current)
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % currentBackgrounds.length)
//       setDirection(1)
//     }, 5000)
//   }, [currentBackgrounds.length])

//   const goToSlide = useCallback(
//     (index) => {
//       clearInterval(intervalRef.current)
//       setDirection(index > currentIndex ? 1 : -1)
//       setCurrentIndex(index)
//       startInterval()
//     },
//     [currentIndex, startInterval],
//   )

//   useEffect(() => {
//     startInterval()
//     return () => clearInterval(intervalRef.current)
//   }, [startInterval])

//   useEffect(() => {
//     setCurrentIndex(0)
//     startInterval()
//   }, [theme, startInterval])

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0.5,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8 },
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? "-50%" : "50%",
//       opacity: 0,
//       transition: { duration: 0.6 },
//     }),
//   }

//   return (
//     <div className="absolute inset-0 overflow-hidden -z-10">
//       <AnimatePresence initial={false} custom={direction} mode="popLayout">
//         <motion.div
//           key={`${theme}-${currentBackgrounds[currentIndex].id}`}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url(${currentBackgrounds[currentIndex].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             willChange: "transform, opacity",
//           }}
//         >
//           <div className={`absolute inset-0 ${currentBackgrounds[currentIndex].overlay}`} />
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
//         {currentBackgrounds.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
//               currentIndex === index ? "w-6 sm:w-8 bg-white/90" : "w-3 sm:w-4 bg-white/40 hover:bg-white/60"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BackgroundCarousel


const BackgroundCarousel = () => {
  const { theme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)
  const currentBackgrounds = backgrounds[theme] || backgrounds.light

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % currentBackgrounds.length)
      setDirection(1)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [currentBackgrounds.length])

  const goToSlide = useCallback((index) => {
    clearInterval(intervalRef.current)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    startInterval()
  }, [currentIndex, startInterval])

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, [startInterval])

  useEffect(() => {
    setCurrentIndex(0)
    startInterval()
  }, [theme, startInterval])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-50%' : '50%',
      opacity: 0,
      transition: { duration: 0.6 }
    }),
  }

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <AnimatePresence initial={undefined} custom={direction} mode="popLayout">
        <motion.div
          key={`${theme}-${currentBackgrounds[currentIndex].id}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentBackgrounds[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform, opacity',
          }}
        >
          <div className={`absolute inset-0 ${currentBackgrounds[currentIndex].overlay}`} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {currentBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-8 bg-white/90' 
                : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundCarousel