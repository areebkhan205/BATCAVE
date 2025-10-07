import { motion } from "framer-motion";
import { StarBackground } from "./StarBackground";

const fadeIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.6
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const textVariant = (delay = 0) => ({
  hidden: { y: -40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.1, delay },
  },
});

function Contact() {
  return (
    <section
      id="contact-form"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 overflow-hidden bg-transparent"
    >
      {/* Meteor Background */}
      <StarBackground />

      {/* Contact Content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        {/* Animated Heading */}
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
            Get in Touch
          </h1>
        </motion.div>

        {/* Animated Form Container */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full bg-[#10121b]/90 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md"
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="4ddd6372-81c5-445d-90c3-35110dd6deed"
            />

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-3 rounded-md bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-3 rounded-md bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white font-medium mb-1">
                Subject (Optional)
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="w-full p-3 rounded-md bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message here..."
                required
                className="w-full p-3 rounded-md bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            {/* Button */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-right"
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
