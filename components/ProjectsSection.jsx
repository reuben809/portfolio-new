import DATA from '../lib/data'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const sample = [
  { name: 'Jan', engagement: 40 },
  { name: 'Mar', engagement: 60 },
  { name: 'May', engagement: 55 },
  { name: 'Jul', engagement: 70 },
  { name: 'Sep', engagement: 85 },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 container">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {DATA.projects.map((p, i)=>(
          <motion.a key={i} whileHover={{ scale: 1.02 }} href={p.link || '#'} target="_blank" rel="noreferrer" className="p-4 border rounded-lg bg-white/50 dark:bg-white/5">
            <div className="font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</div>
            {p.link && <div className="mt-3 text-xs text-accent">View on GitHub →</div>}
          </motion.a>
        ))}
      </div>

      <div className="mt-8 bg-white/60 dark:bg-white/5 p-4 rounded-lg border">
        <h4 className="font-medium mb-2">Project engagement (sample)</h4>
        <div style={{ width: '100%', height: 180 }}>
          <ResponsiveContainer>
            <LineChart data={sample}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="engagement" stroke="#0ea5a4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
