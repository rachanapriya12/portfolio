
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiPhone, FiMail, FiMapPin, FiSend, FiLoader, FiGithub, FiLinkedin } from "react-icons/fi"

const Contact = () => {
const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.1,
})

const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
})

const [isSubmitting, setIsSubmitting] = useState(false)
const [submitMessage, setSubmitMessage] = useState(null)

const handleChange = (e) => {
const { name, value } = e.target
setFormData((prev) => ({ ...prev, [name]: value }))
}

const handleSubmit = async (e) => {
e.preventDefault()
setIsSubmitting(true)
setSubmitMessage(null)

try {
    //  API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage({
    type: "success",
    text: "Thank you for your message. I'll get back to you soon!",
    })

    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
    })
} catch (error) {
    console.error("Error submitting form:", error)
    setSubmitMessage({
    type: "error",
    text: error.message || "Failed to send message. Please try again later.",
    })
} finally {
    setIsSubmitting(false)
}
}

return (
<section
    id="contact"
    className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        Get In{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Touch</span>
    </h2>

    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
    >
        {/* Contact Info Card */}
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 h-full"
        >
        <div className="h-full flex flex-col justify-between">
            <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6">
                <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <div className="p-2 md:p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white mr-3 md:mr-4 shadow-md">
                    <FiPhone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Phone</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">+91 7416530166</p>
                </div>
                </motion.div>

                <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <div className="p-2 md:p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white mr-3 md:mr-4 shadow-md">
                    <FiMail className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Email</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 break-words">
                    martharachanapriya@gmail.com
                    </p>
                </div>
                </motion.div>

                <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <div className="p-2 md:p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white mr-3 md:mr-4 shadow-md">
                    <FiMapPin className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                    <h4 className="font-medium mb-1 text-gray-800 dark:text-white">Location</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    Hanamakonda, Telangana, 500601
                    </p>
                </div>
                </motion.div>
            </div>
            </div>

            <div className="mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Connect With Me
            </h3>
            <div className="flex space-x-4">
                <motion.a
                href="https://github.com/rachanapriya12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transition-all"
                aria-label="GitHub"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                >
                <FiGithub className="h-5 w-5 md:h-6 md:w-6" />
                </motion.a>
                <motion.a
                href="https://www.linkedin.com/in/rachana-m-586637294"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transition-all"
                aria-label="LinkedIn"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                >
                <FiLinkedin className="h-5 w-5 md:h-6 md:w-6" />
                </motion.a>
            </div>
            </div>
        </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 h-full"
        >
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
                </label>
                <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white shadow-sm"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
                </label>
                <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white shadow-sm"
                />
            </div>
            </div>

            <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
            </label>
            <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white shadow-sm"
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white shadow-sm"
            />
            </div>

            {submitMessage && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg ${
                submitMessage.type === "success"
                    ? "bg-green-100/70 text-green-800 dark:bg-green-900/50 dark:text-green-400"
                    : "bg-red-100/70 text-red-800 dark:bg-red-900/50 dark:text-red-400"
                } shadow-sm`}
            >
                {submitMessage.text}
            </motion.div>
            )}

            <motion.button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-md hover:shadow-lg"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            >
            {isSubmitting ? (
                <>
                <FiLoader className="mr-2 h-4 w-4 animate-spin" />
                Sending...
                </>
            ) : (
                <>
                <FiSend className="mr-2 h-4 w-4" />
                Send Message
                </>
            )}
            </motion.button>
        </form>
        </motion.div>
    </motion.div>
    </div>
</section>
)
}

export default Contact
