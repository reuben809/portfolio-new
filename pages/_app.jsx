import '../styles/globals.css'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const val = localStorage.getItem('theme')
    if (val === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = () => {
    setDark(d => {
      const next = !d
      if (next) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <>
      <NavBar toggleTheme={toggle} dark={dark} />
      <main className="min-h-[70vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
