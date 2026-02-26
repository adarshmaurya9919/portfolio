import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(true);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        {/* NAVBAR */}
        <nav className="fixed w-full top-0 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
            <h1 className="font-bold text-xl">Adarsh Maurya</h1>

            <div className="hidden md:flex space-x-8 text-sm">
              {["about", "skills", "projects", "education", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="capitalize hover:text-blue-500 transition"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            <button
              onClick={() => setDark((prev) => !prev)}
              className="border px-3 py-1 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl font-bold"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-gray-500 dark:text-gray-400"
          >
            Building scalable web applications using React, Node.js, Express,
            SQL & MongoDB.
          </motion.p>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Information Technology undergraduate at Chandigarh University
            (2022–2026) with strong fundamentals in OOP, Data Structures &
            Algorithms, and DBMS. Passionate about designing scalable, efficient
            and production-ready full-stack applications.
          </p>
        </motion.section>

        {/* TECHNICAL SKILLS */}
        <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-gray-100 dark:bg-[#111]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* FRONTEND */}
              <div className="p-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black hover:shadow-xl transition group">
                <h3 className="text-blue-500 font-semibold mb-4 uppercase text-sm tracking-wider">
                  Frontend
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  HTML, CSS, JavaScript, React.js, Tailwind CSS
                </p>
              </div>

              {/* BACKEND */}
              <div className="p-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black hover:shadow-xl transition group">
                <h3 className="text-green-500 font-semibold mb-4 uppercase text-sm tracking-wider">
                  Backend
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, Express.js
                </p>
              </div>

              {/* DATABASE */}
              <div className="p-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black hover:shadow-xl transition group">
                <h3 className="text-purple-500 font-semibold mb-4 uppercase text-sm tracking-wider">
                  Databases
                </h3>
                <p className="text-gray-600 dark:text-gray-400">SQL, MongoDB</p>
              </div>

              {/* CORE CONCEPTS */}
              <div className="p-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black hover:shadow-xl transition group">
                <h3 className="text-orange-500 font-semibold mb-4 uppercase text-sm tracking-wider">
                  Core Concepts
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  OOP, Data Structures & Algorithms, DBMS
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border rounded-2xl dark:border-gray-800 hover:shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Modern developer portfolio built using React + Tailwind with
                smooth animations and responsive UI.
              </p>
            </div>

            <div className="p-8 border rounded-2xl dark:border-gray-800 hover:shadow-xl hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">
                MERN Stack Application
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Full-stack application with authentication, REST APIs and
                MongoDB database integration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-gray-100 dark:bg-[#111]"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 border-b border-gray-300 dark:border-gray-800 pb-4">
              Education
            </h2>

            <div className="p-8 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black hover:shadow-blue-500/10 transition">
              <h3 className="text-xl font-semibold">
                B.Tech – Information Technology
              </h3>
              <p className="text-blue-500 mt-2">Chandigarh University</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                2022 – 2026
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-10 border-b border-gray-300 dark:border-gray-800 pb-4">
            Contact
          </h2>

          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:adarshmaurya2004@gmail.com"
              className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:border-blue-500 transition"
            >
              <Mail size={18} />
              adarshmaurya2004@gmail.com
            </a>

            <a
              href="tel:+919450212527"
              className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:border-red-500 transition"
            >
              <Phone size={18} />
              +91-9450212527
            </a>

            <a
              href="https://github.com/adarshmaurya9919"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:border-black dark:hover:border-white transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/adarsh-maurya-42728b250"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:border-blue-400 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.section>

        <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-800 text-gray-500">
          © 2026 Adarsh Maurya. Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}
