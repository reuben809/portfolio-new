import { FaSun, FaMoon } from 'react-icons/fa'
export default function ThemeToggle({ toggleTheme, dark }) {
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme"
      className="p-2 rounded-md border border-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition">
      {dark ? <FaSun/> : <FaMoon/>}
    </button>
  )
}
