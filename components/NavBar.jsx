import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import DATA from '../lib/data'

export default function NavBar({ toggleTheme, dark }) {
  return (
    <header className="py-4 shadow-sm bg-opacity-50" style={{ backdropFilter: 'blur(6px)' }}>
      <div className="container flex items-center justify-between">
        <Link legacyBehavior legacyBehavior href="/">
          <a className="text-lg font-semibold">{DATA.name.split(' ')[0]}</a>
        </Link>

        <nav className="flex items-center gap-6">
          <Link legacyBehavior legacyBehavior href="/"><a className="hover:underline">Home</a></Link>
          <Link legacyBehavior legacyBehavior href="/about"><a className="hover:underline">About</a></Link>
          <Link legacyBehavior legacyBehavior href="/experience"><a className="hover:underline">Experience</a></Link>
          <Link legacyBehavior legacyBehavior href="/projects"><a className="hover:underline">Projects</a></Link>
          <Link legacyBehavior legacyBehavior href="/certifications"><a className="hover:underline">Certifications</a></Link>
          <Link legacyBehavior legacyBehavior href="/contact"><a className="hover:underline">Contact</a></Link>

          <a href={DATA.linkedin} target="_blank" rel="noreferrer"><FaLinkedin/></a>
          <a href={DATA.github} target="_blank" rel="noreferrer"><FaGithub/></a>

          <ThemeToggle toggleTheme={toggleTheme} dark={dark} />
        </nav>
      </div>
    </header>
  )
}
