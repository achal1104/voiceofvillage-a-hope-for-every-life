import { Link } from 'react-router-dom'
import { Users2, Droplets, Wheat, Hammer, Waves } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import { FOOT } from '../data/footer.js'
import { waterscarity, shepherd } from '../data/images.js'

const WAYS = [[Users2, 'Sponsor a village', 'Stand with one verified village over the long term.'], [Droplets, 'Support monthly water requirements', 'Help a village meet its drinking water needs, month after month.'], [Wheat, 'Sponsor cattle fodder', 'Keep livestock fed through the drought.'], [Hammer, 'Sponsor village development', 'Fund development work that lasts.'], [Waves, 'Support sustainable water projects', 'Move from drought relief to drought resilience.']]
export default function Adopt() {
  return (
    <main>
      <PageHero title="Adopt a Village" sub="One village. One partnership. A lasting difference." img={waterscarity} pos="50% 55%" />
      <JumpNav items={[['main1', 'Ways to adopt'], ['how', 'How it works'], ['trust', 'Transparency'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">Long-term partnership</p><h2 className="h2">Five ways to adopt a village.</h2>
          <p className="lead">Individuals, organisations and CSR teams can stand with a village beyond the first emergency.</p></Reveal>
        <div className="grid3">{WAYS.map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 0.07}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>
      <section id="how" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">How a partnership works</p><h2 className="h2">From first conversation to documented impact.</h2></Reveal>
        <ol className="tl five">{['Share your interest', 'Choose a village need or project', 'Ground-level execution', 'Impact documentation', 'Long-term development'].map((t, i) => <Reveal key={t} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{t}</b></li></Reveal>)}</ol>
      </div></section>
      <section className="w sec split">
        <Reveal><img className="pic" loading="lazy" src={shepherd} alt="A herdsman with his sheep and goats on dry, cracked ground" style={{ aspectRatio: '4/3' }} /></Reveal>
        <Reveal delay={0.1}><p className="eyebrow">Which villages?</p><h2 className="h2">Only verified villages can be adopted.</h2>
          <p className="lead">Adoption is open for villages that have been registered, verified and approved. No villages are published yet; approved villages will appear in Explore Villages.</p>
          <div className="row"><Link to="/villages" className="btn">Explore Villages</Link><Link to="/ngo-csr" className="btn ghost">NGO &amp; CSR</Link></div></Reveal>
      </section>
      <section id="trust" className="band"><div className="w sec split">
        <Reveal><p className="eyebrow">{FOOT.en.cTitle}</p><h2 className="h2">Trust is built in the open.</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{FOOT.en.cText}</p></Reveal>
      </div></section>
      <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Adoption and compliance questions.</h2><Faq pick={[0, 1, 2, 3]} /></Reveal></section>
    </main>
  )
}
