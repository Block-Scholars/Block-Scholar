import React from "react";
import { motion } from "framer-motion";

export default function BlockScholars() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white text-gray-800 font-sans">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Block Scholars Logo" className="w-10" />
          <span className="font-bold text-lg">Block Scholars</span>
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black transition">Home</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#join" className="hover:text-black transition">Join Us</a>
        </nav>
      </header>

      <section id="home" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-200 to-indigo-400 text-white overflow-hidden">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Block Scholars
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl max-w-2xl mb-8 text-white/80">
          Join the first-ever high school blockchain community. Learn, connect, and shape the future of decentralized tech.
        </motion.p>
        <motion.a whileHover={{ scale: 1.05 }} href="#join" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full transition shadow-md">
          Get in Touch →
        </motion.a>
        <div className="absolute inset-0 pointer-events-none bg-[url('/blobs.svg')] bg-no-repeat bg-cover opacity-10"></div>
      </section>

      <section id="about" className="py-20 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold mb-4 text-indigo-700">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We’re bringing high schoolers together to learn, explore, and build with blockchain. Whether you're passionate or just curious, we’re here to connect and grow.
            </p>
            <a href="/mission" className="inline-block mt-2 px-5 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition">Read Our Full Mission →</a>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-xl shadow-lg bg-gray-200 h-[300px] flex items-center justify-center text-gray-500 text-xl">
            Placeholder Image
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-[30%] shadow-md bg-gray-200 h-[300px] flex items-center justify-center text-gray-500 text-xl">
            Placeholder Image
          </motion.div>
          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold mb-4 text-indigo-700">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Max and I are high school students who share a deep curiosity for technology and blockchain. We realized that while blockchain is shaping the future, there wasn’t a space for students like us to learn, collaborate, and grow together.
            </p>
            <p className="text-gray-700">
              So, we decided to create one.
            </p>
            <a href="/story" className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition">See the Full Story →</a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-indigo-700">Founders</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re students, builders, and believers in decentralized technology.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm mb-4">Photo coming soon</div>
            <h3 className="font-semibold text-lg">Zachary Steinberg</h3>
            <p className="text-sm text-gray-500">Co-founder</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm mb-4">Photo coming soon</div>
            <h3 className="font-semibold text-lg">Max Berman</h3>
            <p className="text-sm text-gray-500">Co-founder</p>
          </motion.div>
        </div>
      </section>

      <section id="join" className="py-20 px-6 md:px-16 bg-gradient-to-br from-white to-indigo-100">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-4 text-indigo-700">Join our community</h2>
          <p className="text-gray-600">Ready to learn, build, and explore with us? We’d love to connect.</p>
        </div>
        <form className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <input type="text" placeholder="First Name" className="p-3 bg-white border border-gray-300 rounded-md" />
          <input type="text" placeholder="Last Name" className="p-3 bg-white border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email Address" className="md:col-span-2 p-3 bg-white border border-gray-300 rounded-md" />
          <button type="submit" className="md:col-span-2 px-6 py-3 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 transition shadow">
            Send
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8 text-indigo-700 text-xl">
          <a href="#" className="hover:text-indigo-500 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-indigo-500 transition"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-indigo-500 transition"><i className="fab fa-instagram"></i></a>
        </div>
      </section>

      <footer className="py-12 bg-gray-200 text-center text-xl text-gray-700 font-medium">
        Join Block Scholars – Let’s Build the Future of Blockchain Together
      </footer>
    </div>
  );
}
