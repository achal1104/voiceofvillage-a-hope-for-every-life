import { useState, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Info, HandCoins } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NewsCard from '../components/NewsCard.jsx'
import Placeholder from './Placeholder.jsx'
import { STORIES, PHOTOS } from '../data/stories.js'
import { NEWS } from '../data/funding.js'

export default function Story() {
  const { slug } = useParams()
  const i = STORIES.findIndex((s) => s.slug === slug)
  const [lb, setLb] = useState(null)
  const s = STORIES[i]
  const photos = s ? PHOTOS.filter((p) => p.cat === s.cat).map((p) => ({ img: p.img, alt: p.alt })) : []
  const nav = useCallback((d) => setLb((x) => (x + d + photos.length) % photos.length), [photos.length])
  if (!s) return <Placeholder title="Story not found" />
  const news = s.news.map((id) => NEWS.find((n) => n.id === id)).filter(Boolean)
  const prev = STORIES[(i - 1 + STORIES.length) % STORIES.length], next = STORIES[(i + 1) % STORIES.length]
  return (
    <main>
      <PageHero title={s.title} sub={s.summary} img={s.img} pos={s.pos} />
      <section className="w sec">
        <div className="art">
          <article>
            <Reveal><p className="lead" style={{ maxWidth: 'none' }}>{s.intro}</p></Reveal>
            <div className="xnote note-b"><Info size={18} /><span>This is a background story built from published news reports. A verified village story, with village name and date, will be added here once collected from the field.</span></div>
            {s.sections.map(([h, p], k) => <Reveal key={h} delay={k * 0.05}><h2 className="h3">{h}</h2><p>{p}</p></Reveal>)}
            {photos.length > 0 && (<>
              <h2 className="h3">Photographs</h2>
              <div className="sphotos">{photos.map((p, k) => <button key={p.alt} className="mbtn" aria-label={'Enlarge: ' + p.alt} onClick={() => setLb(k)}><img loading="lazy" src={p.img} alt={p.alt} /></button>)}</div>
              <Lightbox items={photos} index={lb} onClose={() => setLb(null)} onNav={nav} />
            </>)}
          </article>
          <aside className="aside">
            <div className="card static">
              <h3 style={{ marginTop: 0 }}>Key facts</h3>
              {s.facts.map(([k, v]) => <p key={k} className="fact"><b>{k}</b><span>{v}</span></p>)}
            </div>
            <div className="card static">
              <h3 style={{ marginTop: 0 }}>What funding can do</h3>
              <ul className="nl2">{s.needs.map((n) => <li key={n}>{n}</li>)}</ul>
              <Link to="/fund-a-village" className="btn" style={{ marginTop: 14 }}><HandCoins size={16} /> Fund a village</Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">In the news</p><h2 className="h2">What newspapers are reporting.</h2></Reveal>
        <div className="newsg">{news.map((n) => <NewsCard key={n.id} n={n} />)}</div>
      </div></section>
      <section className="band"><div className="w sec center">
        <Reveal><h2 className="h2">Help a drought-hit village get through the season.</h2>
          <p className="lead">Companies, NGOs and individuals can fund water, fodder and lasting projects, with proof for every rupee.</p>
          <div className="row c"><Link to="/fund-a-village" className="btn inv">See how funding works <ArrowRight size={16} /></Link><Link to="/ngo-csr" className="btn wh">NGO & CSR partnerships</Link></div></Reveal>
      </div></section>
      <section className="w sec"><div className="snav">
        <Link to={'/stories/' + prev.slug}><ArrowLeft size={16} /> {prev.title}</Link>
        <Link to="/ground-reality">All stories</Link>
        <Link to={'/stories/' + next.slug}>{next.title} <ArrowRight size={16} /></Link>
      </div></section>
    </main>
  )
}