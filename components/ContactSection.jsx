import DATA from '../lib/data'
import { useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // placeholder: implement EmailJS or server endpoint to send email in production
    setStatus('Sending...')
    setTimeout(()=> setStatus('Thanks — message recorded locally. For production integrate EmailJS or API.'), 800)
  }

  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-600 dark:text-slate-300">Email: <a href={`mailto:${DATA.email}`} className="underline">{DATA.email}</a></p>
          <p className="mt-2">Phone: {DATA.phone}</p>
          <p className="mt-4 text-sm text-slate-500">Prefer to use a contact form? Send a message below and I'll receive it via whichever method you prefer (EmailJS / server endpoint).</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border rounded-lg bg-white/50 dark:bg-white/5">
          <input name="name" placeholder="Your name" className="w-full p-2 border rounded mb-2" required />
          <input name="email" type="email" placeholder="Your email" className="w-full p-2 border rounded mb-2" required />
          <textarea name="message" rows="5" placeholder="Message" className="w-full p-2 border rounded mb-2" required></textarea>
          <button className="px-4 py-2 bg-accent text-white rounded">Send</button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
