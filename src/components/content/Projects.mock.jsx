
const Projects = () => {
return (
<section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
    </h2>

    <div className="relative h-[450px] sm:h-[500px] max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className="relative h-full flex items-center justify-center">
        <div className="absolute w-full">
            <div className="w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="E-commerce Website"
                className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    E-commerce Website
                </h3>
                <span>Icon</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                Full-featured pharmacy e-commerce platform with product listings, cart functionality, and checkout
                process.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    React
                </span>
                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Node.js
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
)
}

export default Projects
