import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import DATA from '../lib/data'

export default function LiveCounters() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex gap-6 mt-4">
      <div className="p-4 bg-white/60 dark:bg-white/5 rounded-lg border">
        <div className="text-2xl font-semibold"><CountUp end={DATA.counters.projects} duration={2} /></div>
        <div className="text-sm text-slate-500">Projects</div>
      </div>
      <div className="p-4 bg-white/60 dark:bg-white/5 rounded-lg border">
        <div className="text-2xl font-semibold"><CountUp end={DATA.counters.internships} duration={2} /></div>
        <div className="text-sm text-slate-500">Internships</div>
      </div>
      <div className="p-4 bg-white/60 dark:bg-white/5 rounded-lg border">
        <div className="text-2xl font-semibold"><CountUp end={DATA.counters.hours} duration={2} separator="," /></div>
        <div className="text-sm text-slate-500">Hours Coding</div>
      </div>
    </motion.div>
  )
}
