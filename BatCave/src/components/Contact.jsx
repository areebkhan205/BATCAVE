import { StarBackground } from "./StarBackground";

function Contact() {
  return (
    <section
      id="contact-form"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 overflow-hidden"
    >
      {/* Star & Meteor Background */}
      <StarBackground />

      {/* Form Layer */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <div className="w-full bg-[#10121b]/90 rounded-lg p-8 shadow-lg">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-1">
                Subject (Optional)
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message here..."
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
