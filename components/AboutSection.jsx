import DATA from '../lib/data'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-12 container">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl font-semibold mb-4">About</motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-600 dark:text-slate-300">{DATA.about}</p>
          <h3 className="mt-6 font-medium">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {DATA.skills.map((s,i)=> <span key={i} className="px-3 py-1 border rounded-full text-sm">{s}</span>)}
          </div>
        </div>

        <div>
          <h3 className="font-medium">Education</h3>
          <div className="mt-3 space-y-3">
            {DATA.education.map((e,i)=>(
              <div key={i} className="p-3 border rounded bg-white/50 dark:bg-white/5">
                <div className="flex justify-between">
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-sm text-slate-500">{e.period}</div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{e.course} • {e.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
