import { Link } from 'react-router-dom'
import { ShieldCheck, Building2, Users, Landmark, CloudSun, ListChecks, Upload, FileSignature } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import DemoForm from '../components/DemoForm.jsx'
import { droughtcondition, waterscarity } from '../data/images.js'

const STEPS = [
  [Building2, 'Basic village information', 'Village name, district and taluka.'],
  [Users, 'Official representatives', 'The Gram Panchayat members who speak for the village.'],
  [Landmark, 'Bank details', 'Kept private. Full bank details are never shown publicly.'],
  [CloudSun, 'Drought situation', 'What the drought is doing to water, crops, cattle and families.'],
  [ListChecks, 'Village requirements', 'What the village needs most urgently.'],
  [Upload, 'Documents upload', 'Supporting documents, kept private.'],
  [FileSignature, 'Declaration and submission', 'Confirm the details and submit for review.'],
]
const APPROVALS = [['Registration', 'A Gram Panchayat submits its village details and documents.'], ['Verification', 'Requirements and documents are checked before a village is marked verified.'], ['Fundraising', 'Only authorised campaigns can receive contributions.']]

export default function Register() {
  return (
    <main>
      <PageHero title="Register Your Village" sub="Give your village a voice. Registration is for Gram Panchayats." img={droughtcondition} pos="50% 50%" />
      <JumpNav items={[['main1', 'Seven steps'], ['appr', 'After you register'], ['start', 'Start'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">For Gram Panchayats</p><h2 className="h2">Register your village in seven steps.</h2>
          <p className="lead">Every village has a story, and every story deserves to be heard. Here is what we will ask you for.</p></Reveal>
        <div className="grid4">{STEPS.map(([I, t, d], i) => <Reveal key={t} delay={(i % 4) * 0.05}><div className="card static"><span className="ib"><I size={22} /></span><b className="n" style={{ display: 'block', marginTop: 10 }}>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
        <p className="xnote" style={{ marginTop: 24 }}><ShieldCheck size={16} style={{ verticalAlign: '-3px' }} /> Private documents and full bank details are never shown publicly.</p>
      </section>
      <section id="appr" className="alt"><div className="w sec">
        <Reveal><p className="eyebrow">Three separate approvals</p><h2 className="h2">Registered is not the same as verified.</h2></Reveal>
        <div className="grid3">{APPROVALS.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="card static"><b className="n">0{i + 1}</b><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </div></section>
      <section id="start" className="w sec split">
        <Reveal><p className="eyebrow">Start your registration</p><h2 className="h2">Tell us about your village.</h2>
          <p className="lead">This first step collects the basic details. The remaining steps follow once registration opens.</p>
          <img className="pic" loading="lazy" src={waterscarity} alt="Women carrying metal water pots along a dirt path" style={{ marginTop: 24, aspectRatio: '4/3' }} /></Reveal>
        <Reveal delay={0.1}>
          <DemoForm button="Submit village details" thanks="Thank you for registering interest."
            consent="I confirm I am authorised to represent this village and agree that the VoiceOfVillage team may contact me."
            fields={[['village', 'Village name', { required: true, placeholder: 'Village name' }], ['district', 'District', { required: true, placeholder: 'District' }], ['taluka', 'Taluka', { required: true, placeholder: 'Taluka' }], ['rep', 'Representative name', { required: true, placeholder: 'Gram Panchayat representative' }], ['email', 'Contact email', { required: true, type: 'email', placeholder: 'you@example.com' }], ['drought', 'Drought situation (optional)', { rows: 4, placeholder: 'Briefly describe what the village is facing' }]]} />
        </Reveal>
      </section>
      <section className="band"><div className="w sec center">
        <Reveal><h2 className="h2">Need help with registration or documents?</h2><p className="lead">The Gram Panchayat Desk helps with registration and documents.</p>
          <Link to="/contact" className="btn inv">Contact the Desk</Link></Reveal>
      </div></section>
      <section id="faq" className="alt"><div className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Before you register.</h2><Faq pick={[0, 4, 5]} /></Reveal></div></section>
    </main>
  )
}
