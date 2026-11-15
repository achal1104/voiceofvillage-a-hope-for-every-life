import { Link } from 'react-router-dom'
import { Landmark, Truck, Receipt, FileCheck2, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import { NEEDS, STEPS } from '../data/content.js'
import { FOOT } from '../data/footer.js'
import { well1, tanker, droughtcondition } from '../data/images.js'

const FLOW = [[Landmark, 'Contribution goes to a legally authorised entity'], [Truck, 'Funds are released to approved vendors'], [Receipt, 'Payment is made against bills'], [FileCheck2, 'Utilisation is documented and reported']]
const COMMIT = [['Authorised entity', 'Contributions go to a legally authorised entity.'], ['Approved vendors', 'Funds are released to approved vendors against bills.'], ['80G only where valid', 'Tax benefits apply only where the receiving entity holds valid registration, stated on each campaign.'], ['FCRA for foreign funds', 'Foreign contributions need FCRA registration or permission.']]

export default function Support() {
  return (
    <main>
      <PageHero title="Support a Village" sub="You don't have to be rich to make a difference." img={well1} pos="50% 60%" />
      <JumpNav items={[['main1', 'Where help goes'], ['needs', 'What villages need'], ['camp', 'Campaigns'], ['com', 'Commitments'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec split">
        <Reveal><p className="eyebrow">Where contributions go</p><h2 className="h2">From supporter to village, step by step.</h2>
          <p className="lead">Your contribution, your network, your organisation or even one shared story can help a village get noticed.</p>
          <ol className="flow">{FLOW.map(([, f], i) => <li key={f}><b>{i + 1}</b>{f}</li>)}</ol></Reveal>
        <Reveal delay={0.1}><img className="pic" loading="lazy" src={tanker} alt="Women collecting water from a muddy pit" /></Reveal>
      </section>
      <section id="needs" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">What villages need</p><h2 className="h2">Where help is needed most.</h2></Reveal>
        <div className="chips" aria-label="Needs">{NEEDS.map((n) => <Link key={n} to="/emergency" className="cl">{n}</Link>)}</div>
        <div className="row"><Link to="/emergency" className="btn ghost">See Emergency Needs <ArrowRight size={16} /></Link></div>
      </div></section>
      <section id="camp" className="w sec">
        <Reveal><p className="eyebrow">Open campaigns</p><h2 className="h2">Contribute to an approved village.</h2></Reveal>
        <Reveal><div className="xempty"><img src={droughtcondition} alt="Aerial view of a dry village" loading="lazy" />
          <div><h3 className="h3">No campaigns are open yet.</h3>
            <p>Only authorised campaigns can receive contributions. Registration, verification and fundraising approval are separate steps, so a registered village is not automatically approved for fundraising. Approved campaigns will appear here.</p>
            <div className="row"><Link to="/villages" className="btn">Explore Villages</Link><Link to="/ngo-csr" className="btn ghost">NGO &amp; CSR</Link></div></div></div></Reveal>
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">How it works</p><h2 className="h2">How VoiceOfVillage works.</h2></Reveal>
        <ol className="tl">{STEPS.map((s, i) => <Reveal key={s} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{s}</b></li></Reveal>)}</ol>
      </div></section>
      <section id="com" className="band"><div className="w sec">
        <Reveal><p className="eyebrow">{FOOT.en.cTitle}</p><h2 className="h2">Compliance, stated plainly.</h2></Reveal>
        <div className="grid4">{COMMIT.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="dk"><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>
      <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Good to know before you support a village.</h2><Faq pick={[1, 2, 3, 5]} /></Reveal></section>
    </main>
  )
}
