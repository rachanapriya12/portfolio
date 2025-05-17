
"use client"

import { FiHeart } from "react-icons/fi"

const Footer = () => {
const currentYear = new Date().getFullYear()

return (
<footer className="py-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
        <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Rachana Priya Martha. All rights reserved.
        </p>
        </div>

        <div className="flex items-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center">
            Made with <FiHeart className="h-4 w-4 text-red-500 mx-1" /> using React
        </p>
        </div>
    </div>
    </div>
</footer>
)
}

export default Footer
