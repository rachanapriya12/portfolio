const Skills = () => {
return (
<section id="skills" className="py-16 md:py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        My <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Skills</span>
    </h2>

    <div className="relative h-[350px] sm:h-[400px] max-w-xs sm:max-w-sm mx-auto">
        <div className="relative h-full flex items-center justify-center">
        <div className="absolute w-full">
            <div className="w-full h-[300px] sm:h-[350px] rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white mr-3 sm:mr-4">
                <span>Icon</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                Frontend Development
                </h3>
            </div>

            <ul className="space-y-2">
                <li className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
                <span>HTML5</span>
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
                <span>CSS3</span>
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
                <span>JavaScript</span>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
)
}

export default Skills
