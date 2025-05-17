"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiAward, FiCheckCircle } from "react-icons/fi"

const certifications = [
  "Generative AI & LLM App Development – Udemy",
  "Python Programming – Udemy",
  "Virtual Internship Program in Web Development – CodTech IT Solutions",
  "Web Development Fundamentals – Edyoda",
  "ReactJS Certification – Edyoda",
  "Node.js, Express & MongoDB Certification – Edyoda",
  "Published Research: 'A Novel Approach of Enhancing the System Reliability in Wind-Hydro Micro-Grids for Remote Control Areas'",
];

const accomplishments = [
  "Completed Computer Office Automation Training Program",
  "Awarded in the International Master Mathematics Olympiad",
  "Participant – Quiz Event, Techno-Maarg'15",
  "Participant – Paper Presentation Event, Techno-Maarg'15",
  "Attended Workshop: 'Recent Advances in Electrical Engineering'",
  "Presented Paper: 'Construction of Transformer'",
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Accomplishments
          </span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[500px] bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 
              backdrop-blur-lg backdrop-saturate-150 hover:shadow-xl transition-all duration-300
              relative isolate overflow-hidden"
          >
            {/* Background blur layer */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl" />
            
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 mr-3">
                <FiAward className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Certifications</span>
            </h3>
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
              {certifications.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * itemIndex }}
                  className="flex items-start bg-white/80 dark:bg-gray-700/80 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors
                    backdrop-blur-sm backdrop-saturate-150 border border-white/30 dark:border-gray-600/30"
                >
                  <FiCheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accomplishments Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-[500px] bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 
              backdrop-blur-lg backdrop-saturate-150 hover:shadow-xl transition-all duration-300
              relative isolate overflow-hidden"
          >
            {/* Background blur layer */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl" />
            
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 mr-3">
                <FiAward className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span>Accomplishments</span>
            </h3>
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
              {accomplishments.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * itemIndex }}
                  className="flex items-start bg-white/80 dark:bg-gray-700/80 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors
                    backdrop-blur-sm backdrop-saturate-150 border border-white/30 dark:border-gray-600/30"
                >
                  <FiCheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications