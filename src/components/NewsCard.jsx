import { ExternalLink } from 'lucide-react'
export default function NewsCard({ n }) {
  return (
    <a className="nc card" href={n.url} target="_blank" rel="noopener noreferrer">
      <span className="tagb">{n.outlet}</span><time className="nd">{n.date}</time>
      <h3>{n.title}</h3><p>{n.sum}</p>
      <span className="rm">Read at source <ExternalLink size={14} /></span>
    </a>
  )
}