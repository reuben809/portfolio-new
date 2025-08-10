import DATA from '../lib/data'
import { motion } from 'framer-motion'

export default function ExperienceSection() {
  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {DATA.experience.map((exp, idx)=>(
          <motion.div key={idx} whileHover={{ y: -6 }} className="p-4 border rounded-lg bg-white/50 dark:bg-white/5">
            <div className="flex justify-between">
              <div className="font-semibold">{exp.role}</div>
              <div className="text-sm text-slate-500">{exp.period}</div>
            </div>
            <ul className="list-disc ml-6 mt-2 text-sm">
              {exp.bullets.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
