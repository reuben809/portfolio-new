import DATA from '../lib/data'
export default function Footer() {
  return (
    <footer className="py-8 border-t mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</div>
        <div className="text-sm text-slate-500">Built with Next.js • Tailwind • Framer Motion</div>
      </div>
    </footer>
  )
}
