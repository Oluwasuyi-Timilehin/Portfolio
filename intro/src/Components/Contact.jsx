import { LuGithub, LuTwitter, LuLinkedin } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 text-primary dark:text-white py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white mb-4">
            Get In Touch
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300">
            Have a project in mind, want to collaborate? Feel free to reach out!
            I'm always open to discussing new ideas, projects, or opportunities.
            Let's create something amazing together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-6">
              Connect with Me
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://x.com/timicodess"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-100
              dark:hover:bg-emerald-900/30 transition-colors"
              >
                <LuTwitter />{" "}
              </a>
              <a
                href="https://github.com/Oluwasuyi-Timilehin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-100
              dark:hover:bg-emerald-900/30 transition-colors"
              >
                <LuGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-100
              dark:hover:bg-emerald-900/30 transition-colors"
              >
                <LuLinkedin />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                I'm currently exploring new opportunities and would love to hear
                from you. Whether you have a project in mind, want to
                collaborate, or just want to say hello, I'll make sure to get
                back to you!
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Based in Lagos, Nigeria, but available for remote work worldwide
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border border-none">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all"
                  placeholder="Let me know how I can help you"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none focus:border-emerald-400 transition-all"
                  placeholder="Hi Timilehin, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
