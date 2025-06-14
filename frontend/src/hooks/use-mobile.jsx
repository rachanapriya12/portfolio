"use client"

import { useState, useEffect } from "react"

export function useMobile() {
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
}

// Initial check
checkMobile()

// event listener
window.addEventListener("resize", checkMobile)

// Cleanup
return () => window.removeEventListener("resize", checkMobile)
}, [])

return isMobile
}
