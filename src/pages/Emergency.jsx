// import { Link } from 'react-router-dom'
// import { Droplets, Wheat, Sprout, Stethoscope, GraduationCap, Briefcase, ArrowRight, Mail } from 'lucide-react'
// import PageHero from '../components/PageHero.jsx'
// import JumpNav from '../components/JumpNav.jsx'
// import Faq from '../components/Faq.jsx'
// import Reveal from '../components/Reveal.jsx'
// import { NEEDS } from '../data/content.js'
// import { lakebed, stepwell, cattlecamp, farmer, droughtcondition } from '../data/images.js'

// const ICONS = [Droplets, Wheat, Sprout, Sprout, Stethoscope, GraduationCap, Droplets, Briefcase]
// const PH = { 0: stepwell, 2: cattlecamp, 3: farmer, 6: lakebed }
// export default function Emergency() {
//   return (
//     <main>
//       <PageHero title="Emergency Needs" sub="Where help is needed most." img={lakebed} pos="50% 55%" />
//       <JumpNav items={[['main1', 'Needs'], ['live', 'Urgent requests'], ['how', 'How needs are listed'], ['faq', 'FAQ']]} />
//       <section id="main1" className="w sec">
//         <Reveal><p className="eyebrow">Eight areas of need</p><h2 className="h2">Water, food, fodder, health, education and livelihood.</h2></Reveal>
//         <div className="bento">{NEEDS.map((n, i) => { const I = ICONS[i]; const ph = PH[i]; return (
//           <Reveal key={n} delay={(i % 4) * 0.05} className={'bt b' + i + (ph ? ' ph1' : '')}><Link to="/villages">{ph ? <img src={ph} alt="" loading="lazy" /> : <span className="ib"><I size={22} /></span>}<h3>{n}</h3><ArrowRight size={16} className="ar" /></Link></Reveal>) })}</div>
//       </section>
//       <section id="live" className="alt"><div className="w sec">
//         <Reveal><p className="eyebrow">Urgent requests</p><h2 className="h2">Published only for approved villages.</h2>
//           <div className="xempty"><img src={droughtcondition} alt="Aerial view of a dry village" loading="lazy" />
//             <div><h3 className="h3">No urgent requests published yet.</h3>
//               <p>Urgent requirements appear here once a village is registered and verified. A registered village is not automatically verified.</p>
//               <div className="row"><Link to="/register" className="btn">Register Your Village</Link><Link to="/support" className="btn ghost">Support a Village</Link></div></div></div></Reveal>
//       </div></section>
//       <section id="how" className="w sec">
//         <Reveal><p className="eyebrow">How needs are listed</p><h2 className="h2">Verified before they are published.</h2></Reveal>
//         <ol className="tl five">{['Register Your Village', 'Verify the Requirements', 'Publish Village Stories', 'Connect with Supporters', 'Deliver Assistance'].map((t, i) => <Reveal key={t} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{t}</b></li></Reveal>)}</ol>
//       </section>
//       <section className="alt"><div className="w sec">
//         <Reveal><p className="eyebrow">Help and support</p><h2 className="h2">Report a concern or ask for help.</h2>
//           <div className="card static" style={{ maxWidth: 560, marginTop: 24 }}><span className="ib"><Mail size={22} /></span><h3>Grievance &amp; Compliance</h3><p>Report a concern about any listing, campaign or payment.</p><Link to="/contact" className="rm" style={{ marginTop: 12 }}>Contact us →</Link></div></Reveal>
//       </div></section>
//       <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Quick answers.</h2><Faq pick={[0, 1, 4]} /></Reveal></section>
//     </main>
//   )
// }
import { Link } from 'react-router-dom'
import { Droplets, Wheat, Sprout, Stethoscope, GraduationCap, Briefcase, ArrowRight, Mail } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import { NEEDS } from '../data/content.js'
import { lakebed, stepwell, cattlecamp, farmer, droughtcondition } from '../data/images.js'

const ICONS = [Droplets, Wheat, Sprout, Sprout, Stethoscope, GraduationCap, Droplets, Briefcase]
const PH = { 0: stepwell, 2: cattlecamp, 3: farmer, 6: lakebed }
export default function Emergency() {
  return (
    <main>
      <PageHero title="Emergency Needs" sub="Where help is needed most." img={lakebed} pos="62% 8%" />
      <JumpNav items={[['main1', 'Needs'], ['live', 'Urgent requests'], ['how', 'How needs are listed'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">Eight areas of need</p><h2 className="h2">Water, food, fodder, health, education and livelihood.</h2></Reveal>
        <div className="bento">{NEEDS.map((n, i) => { const I = ICONS[i]; const ph = PH[i]; return (
          <Reveal key={n} delay={(i % 4) * 0.05} className={'bt b' + i + (ph ? ' ph1' : '')}><Link to="/villages">{ph ? <img src={ph} alt="" loading="lazy" /> : <span className="ib"><I size={22} /></span>}<h3>{n}</h3><ArrowRight size={16} className="ar" /></Link></Reveal>) })}</div>
      </section>
      <section id="live" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Urgent requests</p><h2 className="h2">Published only for approved villages.</h2>
          <div className="xempty"><img src={droughtcondition} alt="Aerial view of a dry village" loading="lazy" />
            <div><h3 className="h3">No urgent requests published yet.</h3>
              <p>Urgent requirements appear here once a village is registered and verified. A registered village is not automatically verified.</p>
              <div className="row"><Link to="/register" className="btn">Register Your Village</Link><Link to="/support" className="btn ghost">Support a Village</Link></div></div></div></Reveal>
      </div></section>
      <section id="how" className="w sec">
        <Reveal><p className="eyebrow">How needs are listed</p><h2 className="h2">Verified before they are published.</h2></Reveal>
        <ol className="tl five">{['Register Your Village', 'Verify the Requirements', 'Publish Village Stories', 'Connect with Supporters', 'Deliver Assistance'].map((t, i) => <Reveal key={t} delay={i * 0.08}><li><span className="dot">{i + 1}</span><b>{t}</b></li></Reveal>)}</ol>
      </section>
      <section className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Help and support</p><h2 className="h2">Report a concern or ask for help.</h2>
          <div className="card static" style={{ maxWidth: 560, marginTop: 24 }}><span className="ib"><Mail size={22} /></span><h3>Grievance &amp; Compliance</h3><p>Report a concern about any listing, campaign or payment.</p><Link to="/contact" className="rm" style={{ marginTop: 12 }}>Contact us →</Link></div></Reveal>
      </div></section>
      <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Quick answers.</h2><Faq pick={[0, 1, 4]} /></Reveal></section>
    </main>
  )
}