// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const ThemeContext = createContext({
//   theme: "light",
//   setTheme: (theme) => {},
// })

// export const ThemeProvider = ({ children, defaultTheme = "system" }) => {
//   const [theme, setTheme] = useState(defaultTheme)

//   useEffect(() => {
//     // On mount, read from localStorage or use system preference
//     const savedTheme = localStorage.getItem("portfolio-theme")

//     if (savedTheme) {
//       setTheme(savedTheme)
//     } else if (defaultTheme === "system") {
//       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//       setTheme(systemTheme)
//     }

//     // Listen for system theme changes
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
//     const handleChange = (e) => {
//       if (!localStorage.getItem("portfolio-theme")) {
//         setTheme(e.matches ? "dark" : "light")
//       }
//     }

//     mediaQuery.addEventListener("change", handleChange)

//     return () => {
//       mediaQuery.removeEventListener("change", handleChange)
//     }
//   }, [defaultTheme])

//   useEffect(() => {
//     // Applying theme to document
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }

//     localStorage.setItem("portfolio-theme", theme)
//   }, [theme])

//   return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
// }

// export const useTheme = () => useContext(ThemeContext)


// components/theme/ThemeProvider.jsx
"use client"

import React from 'react';
import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
})

export const ThemeProvider = ({ children, defaultTheme = "system" }) => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)")

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (defaultTheme === "system") {
      setTheme(systemDark.matches ? "dark" : "light")
    }

    const handleSystemChange = (e) => {
      if (!localStorage.getItem("portfolio-theme")) {
        setTheme(e.matches ? "dark" : "light")
      }
    }

    // Modern browsers
    if (systemDark.addEventListener) {
      systemDark.addEventListener("change", handleSystemChange)
      return () => systemDark.removeEventListener("change", handleSystemChange)
    }
    // Legacy browsers
    else {
      systemDark.addListener(handleSystemChange)
      return () => systemDark.removeListener(handleSystemChange)
    }
  }, [defaultTheme])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)