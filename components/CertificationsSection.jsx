import DATA from '../lib/data'

export default function CertificationsSection() {
  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc ml-5">
        {DATA.certifications.map((c,i)=> <li key={i}>{c}</li>)}
      </ul>
    </section>
  )
}
