// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, ExternalLink } from 'lucide-react'
// import PageHero from '../components/PageHero.jsx'
// import JumpNav from '../components/JumpNav.jsx'
// import Reveal from '../components/Reveal.jsx'
// import ParallaxBand from '../components/ParallaxBand.jsx'
// import NewsCard from '../components/NewsCard.jsx'
// import { tanker, well1, stepwell } from '../data/images.js'
// import { FLOW, FUNDERS, MODELS, EXAMPLES, NEWS } from '../data/funding.js'

// export default function Funding() {
//   const [sent, setSent] = useState(false)
//   return (
//     <main>
//       <PageHero title="Fund a Village" sub="Corporate companies, NGOs and donors can fund drought-hit villages directly, with proof for every rupee." img={tanker} pos="50% 50%" />
//       <JumpNav items={[['why', 'Why now'], ['who', 'Who can fund'], ['flow', 'How it works'], ['models', 'Ways to give'], ['proof', 'Real examples'], ['news', 'In the news'], ['start', 'Get started']]} />

//       <section id="why" className="w sec split">
//         <Reveal>
//           <p className="eyebrow">Why now</p>
//           <h2 className="h2">Drought has reached most of Maharashtra.</h2>
//           <p className="lead">On 26 September 2026 the state declared 265 of its 358 tehsils drought-affected. Tankers are running in Marathwada villages even in winter, and relief often reaches a village after the need is greatest.</p>
//           <p>Village funding fills that gap. A company or NGO picks a verified village and a clear need, and the money turns into water, fodder or a lasting structure, with dated photographs and bills as proof.</p>
//           <div className="row"><a href="#start" className="btn">Start a partnership <ArrowRight size={16} /></a><Link to="/emergency" className="btn ghost">Emergency needs</Link></div>
//         </Reveal>
//         <Reveal delay={0.1}><img className="pic" loading="lazy" src={well1} alt="Women gathered around a large dry well" style={{ aspectRatio: '4/3' }} /></Reveal>
//       </section>

//       <section id="who" className="alt"><div className="w sec">
//         <Reveal><p className="eyebrow">Who can fund</p><h2 className="h2">Companies, NGOs, trusts and individuals.</h2></Reveal>
//         <div className="grid4">{FUNDERS.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
//       </div></section>

//       <section id="flow" className="w sec">
//         <Reveal><p className="eyebrow">The flow</p><h2 className="h2">From a village’s need to a funder’s report in eight steps.</h2></Reveal>
//         <ol className="fl8">{FLOW.map(([I, t, d], i) => <Reveal key={t} delay={(i % 4) * 0.06}><li><span className="dot">{i + 1}</span><I size={22} className="fi" /><b>{t}</b><p>{d}</p></li></Reveal>)}</ol>
//         <p className="xnote" style={{ marginTop: 24 }}>Funds are paid to approved vendors against bills. We do not ask funders to hand cash to individuals.</p>
//       </section>

//       <ParallaxBand img={stepwell} pos="50% 50%" eyebrow="Why it matters" title="When the well runs dry, the village looks for a partner." />

//       <section id="models" className="w sec">
//         <Reveal><p className="eyebrow">Ways to give</p><h2 className="h2">Pick the model that fits your budget and timeline.</h2></Reveal>
//         <div className="grid4">{MODELS.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><b className="n">0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
//         <p className="mut" style={{ marginTop: 16 }}>CSR spending must follow your company’s policy and the Companies Act. Please confirm eligibility and registration requirements with your compliance team before committing.</p>
//       </section>

//       <section id="proof" className="alt"><div className="w sec">
//         <Reveal><p className="eyebrow">Real examples</p><h2 className="h2">Funders already working in drought-prone Maharashtra.</h2><p className="mut">Independent examples from published reports. These organisations are not affiliated with VoiceOfVillage.</p></Reveal>
//         <div className="newsg">{EXAMPLES.map((e, i) => <Reveal key={e.who} delay={i * 0.06}><a className="nc card" href={e.url} target="_blank" rel="noopener noreferrer"><span className="tagb">{e.when}</span><h3>{e.who}</h3><p>{e.what}</p><span className="rm">{e.src} <ExternalLink size={14} /></span></a></Reveal>)}</div>
//       </div></section>

//       <section id="news" className="w sec">
//         <Reveal><p className="eyebrow">In the news</p><h2 className="h2">What Lokmat, eSakal and others are reporting.</h2></Reveal>
//         <div className="newsg">{NEWS.map((n) => <NewsCard key={n.id} n={n} />)}</div>
//       </section>

//       <section id="start" className="alt"><div className="w sec split">
//         <Reveal><p className="eyebrow">Get started</p><h2 className="h2">Tell us who you are and what you want to fund.</h2>
//           <p className="lead">We will reply with verified villages that match your interest, and walk you through the agreement.</p></Reveal>
//         <Reveal delay={0.1}>
//           {sent ? <div className="empty"><b>Demo only.</b> Nothing was saved. This form will connect to the backend later.</div> : (
//             <div className="frm">
//               <label>Organisation*<input placeholder="Company / NGO / trust name" /></label>
//               <label>Contact email*<input type="email" placeholder="you@organisation.org" /></label>
//               <label>I want to<select><option>Fund emergency relief (water, fodder)</option><option>Sponsor a project</option><option>Adopt a village</option><option>Co-fund with a partner</option></select></label>
//               <label>Message<textarea rows="4" placeholder="District, budget range, timeline" /></label>
//               <button type="button" className="btn" onClick={() => setSent(true)}>Send enquiry</button>
//             </div>)}
//         </Reveal>
//       </div></section>
//     </main>
//   )
// }
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Reveal from '../components/Reveal.jsx'
import ParallaxBand from '../components/ParallaxBand.jsx'
import NewsCard from '../components/NewsCard.jsx'
import { tanker, well1, stepwell } from '../data/images.js'
import { FLOW, FUNDERS, MODELS, EXAMPLES, NEWS, WHY_PARTNER, PARTNER_TYPES, SUPPORT_AREAS } from '../data/funding.js'

export default function Funding() {
  const [sent, setSent] = useState(false)
  return (
    <main>
      <PageHero title="Fund a Village" sub="Connecting corporate CSR initiatives, NGOs and philanthropic organisations with villages that need support, with proof for every rupee." img={tanker} pos="50% 50%" />
      <JumpNav items={[['why', 'Why now'], ['who', 'Who can fund'], ['partner', 'Why partner'], ['types', 'Partnerships'], ['areas', 'Where to help'], ['flow', 'How it works'], ['models', 'Ways to give'], ['proof', 'Real examples'], ['news', 'In the news'], ['trust', 'Transparency'], ['start', 'Get started']]} />

      <section id="why" className="w sec split">
        <Reveal>
          <p className="eyebrow">Why now</p>
          <h2 className="h2">Drought has reached most of Maharashtra.</h2>
          <p className="lead">On 26 September 2026 the state declared 265 of its 358 tehsils drought-affected. Tankers are running in Marathwada villages even in winter, and relief often reaches a village after the need is greatest.</p>
          <p>VoiceOfVillage creates a bridge between drought-affected villages and organisations committed to social impact. We connect corporate companies, CSR departments, NGOs, charitable trusts and foundations with verified village-level needs, so resources reach communities where they make a real difference.</p>
          <p>Village funding fills that gap. A company or NGO picks a verified village and a clear need, and the money turns into water, fodder or a lasting structure, with dated photographs and bills as proof.</p>
          <div className="row"><a href="#start" className="btn">Start a partnership <ArrowRight size={16} /></a><Link to="/emergency" className="btn ghost">Emergency needs</Link></div>
        </Reveal>
        <Reveal delay={0.1}><img className="pic" loading="lazy" src={well1} alt="Women gathered around a large dry well" style={{ aspectRatio: '4/3' }} /></Reveal>
      </section>

      <section id="who" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Who can fund</p><h2 className="h2">Companies, NGOs, trusts and individuals.</h2></Reveal>
        <div className="grid4">{FUNDERS.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>

      <section id="partner" className="w sec">
        <Reveal><p className="eyebrow">Why partner with VoiceOfVillage</p><h2 className="h2">Meaningful development begins with real needs.</h2>
          <p className="lead">Our platform helps organisations discover rural challenges, identify suitable projects and contribute to sustainable solutions.</p></Reveal>
        <div className="grid3">{WHY_PARTNER.map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 0.07}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>

      <section id="types" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Create impact through your partnership</p><h2 className="h2">Three ways for funders to work with villages.</h2></Reveal>
        <div className="grid3">{PARTNER_TYPES.map(([I, t, ps], i) => <Reveal key={t} delay={i * 0.07}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3>{ps.map((p) => <p key={p}>{p}</p>)}</div></Reveal>)}</div>
      </div></section>

      <section id="areas" className="w sec">
        <Reveal><p className="eyebrow">Areas where your support can make a difference</p><h2 className="h2">Fund the need that matters most to the village.</h2></Reveal>
        <div className="grid3">{SUPPORT_AREAS.map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 0.07}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>

      <section id="flow" className="w sec">
        <Reveal><p className="eyebrow">The flow</p><h2 className="h2">From a village’s need to a funder’s report in eight steps.</h2></Reveal>
        <ol className="fl8">{FLOW.map(([I, t, d], i) => <Reveal key={t} delay={(i % 4) * 0.06}><li><span className="dot">{i + 1}</span><I size={22} className="fi" /><b>{t}</b><p>{d}</p></li></Reveal>)}</ol>
        <p className="xnote" style={{ marginTop: 24 }}>Funds are paid to approved vendors against bills. We do not ask funders to hand cash to individuals.</p>
      </section>

      <ParallaxBand img={stepwell} pos="50% 50%" eyebrow="Why it matters" title="When the well runs dry, the village looks for a partner." />

      <section id="models" className="w sec">
        <Reveal><p className="eyebrow">Ways to give</p><h2 className="h2">Pick the model that fits your budget and timeline.</h2></Reveal>
        <div className="grid4">{MODELS.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><b className="n">0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
        <p className="mut" style={{ marginTop: 16 }}>CSR spending must follow your company’s policy and the Companies Act. Please confirm eligibility and registration requirements with your compliance team before committing.</p>
      </section>

      <section id="proof" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Real examples</p><h2 className="h2">Funders already working in drought-prone Maharashtra.</h2><p className="mut">Independent examples from published reports. These organisations are not affiliated with VoiceOfVillage.</p></Reveal>
        <div className="newsg">{EXAMPLES.map((e, i) => <Reveal key={e.who} delay={i * 0.06}><a className="nc card" href={e.url} target="_blank" rel="noopener noreferrer"><span className="tagb">{e.when}</span><h3>{e.who}</h3><p>{e.what}</p><span className="rm">{e.src} <ExternalLink size={14} /></span></a></Reveal>)}</div>
      </div></section>

      <section id="news" className="w sec">
        <Reveal><p className="eyebrow">In the news</p><h2 className="h2">What Lokmat, eSakal and others are reporting.</h2></Reveal>
        <div className="newsg">{NEWS.map((n) => <NewsCard key={n.id} n={n} />)}</div>
      </section>

      <section id="trust" className="w sec">
        <Reveal><p className="eyebrow">Transparency. Accountability. Measurable impact.</p><h2 className="h2">Every partnership is built on trust.</h2>
          <p className="lead">We maintain a transparent process through documented village requirements, clearly defined project objectives, implementation updates and supporting financial records.</p>
          <p>Partners receive relevant project information, progress updates, utilisation documentation, photographs and impact reports, to see exactly how their support contributes to community development.</p></Reveal>
      </section>

      <section className="band"><div className="w sec split">
        <Reveal><p className="eyebrow">Let’s build stronger villages together</p><h2 className="h2">Partner with us. Support a village. Create an impact that lasts.</h2>
          <div className="row"><a href="#start" className="btn inv">Partner With Us</a><Link to="/villages" className="btn inv">Explore Village Projects</Link><Link to="/contact" className="btn inv">Contact Our Team</Link></div></Reveal>
        <Reveal delay={0.1}><p className="lead">Whether you want to fund a specific village requirement, implement a CSR project, collaborate on a development initiative or support an entire village, VoiceOfVillage welcomes the opportunity to work together.</p></Reveal>
      </div></section>

      <section id="start" className="alt"><div className="w sec split">
        <Reveal><p className="eyebrow">Get started</p><h2 className="h2">Tell us who you are and what you want to fund.</h2>
          <p className="lead">We will reply with verified villages that match your interest, and walk you through the agreement.</p></Reveal>
        <Reveal delay={0.1}>
          {sent ? <div className="empty"><b>Demo only.</b> Nothing was saved. This form will connect to the backend later.</div> : (
            <div className="frm">
              <label>Organisation*<input placeholder="Company / NGO / trust name" /></label>
              <label>Contact email*<input type="email" placeholder="you@organisation.org" /></label>
              <label>I want to<select><option>Fund emergency relief (water, fodder)</option><option>Sponsor a project</option><option>Adopt a village</option><option>Co-fund with a partner</option></select></label>
              <label>Message<textarea rows="4" placeholder="District, budget range, timeline" /></label>
              <button type="button" className="btn" onClick={() => setSent(true)}>Send enquiry</button>
            </div>)}
        </Reveal>
      </div></section>
    </main>
  )
}