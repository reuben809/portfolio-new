import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import LiveCounters from './LiveCounters'
import DATA from '../lib/data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20">
      <AnimatedBackground />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-sm text-slate-500">Hello, I’m</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{DATA.name}</h1>
          <p className="mt-4 text-lg max-w-xl text-slate-600 dark:text-slate-300">{DATA.about}</p>

          <div className="mt-6 flex gap-3">
            <a href="/resume.pdf" download className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-md shadow">Download Resume</a>
            <a href="#projects" className="inline-flex items-center px-4 py-2 border rounded-md">View Projects</a>
          </div>

          <div className="mt-8">
            <LiveCounters />
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.06))' }}>
            <img src="/profile.jpg" alt="profile" className="w-full h-96 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
