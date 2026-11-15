import { Link } from 'react-router-dom'
import { FileText, Camera, Megaphone, Network } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import JumpNav from '../components/JumpNav.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import DemoForm from '../components/DemoForm.jsx'
import { farmer, cattlecamp } from '../data/images.js'

const WAYS = [
  [FileText, 'Help with registration', 'Support Gram Panchayats with registration and documents.'],
  [Camera, 'Document ground reality', 'Photographs, interviews and community experiences from the field.'],
  [Megaphone, 'Share a village story', 'One shared story can help a village get noticed.'],
  [Network, 'Bring your network', 'Connect villages with people and organisations who can help.'],
]
export default function Volunteer() {
  return (
    <main>
      <PageHero title="Become a Volunteer" sub="Offer your time and skills for village work." img={cattlecamp} pos="50% 50%" />
      <JumpNav items={[['main1', 'Ways to help'], ['join', 'Join'], ['faq', 'FAQ']]} />
      <section id="main1" className="w sec">
        <Reveal><p className="eyebrow">Ways to help</p><h2 className="h2">When a village raises its voice, the world should listen.</h2>
          <p className="lead">Volunteers help villages be seen, documented and heard. Pick what fits your time and skills.</p></Reveal>
        <div className="grid4">{WAYS.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card static"><span className="ib"><I size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
      </section>
      <section id="join" className="alt"><div className="w sec split">
        <Reveal><p className="eyebrow">Join us</p><h2 className="h2">Tell us how you would like to help.</h2>
          <p className="lead">Share a little about yourself and we will get in touch.</p>
          <img className="pic" loading="lazy" src={farmer} alt="A farmer holding dried crop on cracked, parched earth" style={{ marginTop: 24, aspectRatio: '4/3', objectPosition: '70% 35%' }} /></Reveal>
        <Reveal delay={0.1}>
          <DemoForm button="Send volunteer interest" thanks="Thank you for offering to help."
            consent="I agree that the VoiceOfVillage team may contact me about volunteering."
            fields={[['name', 'Name', { required: true, placeholder: 'Your full name' }], ['email', 'Email', { required: true, type: 'email', placeholder: 'you@example.com' }], ['place', 'Village / district (optional)', { placeholder: 'e.g. village, taluka, district' }], ['way', 'I would like to', { options: WAYS.map((w) => w[1]) }], ['skills', 'Your skills and availability', { rows: 4, placeholder: 'Tell us how you can help' }]]} />
        </Reveal>
      </div></section>
      <section className="band"><div className="w sec center">
        <Reveal><h2 className="h2">Prefer to share a story first?</h2><p className="lead">Farmers, women, families and community workers: your experience is unique and we are eager to listen.</p>
          <Link to="/ground-reality" className="btn inv">Ground Reality</Link></Reveal>
      </div></section>
      <section id="faq" className="w sec"><Reveal><p className="eyebrow">FAQ</p><h2 className="h2">Good to know.</h2><Faq pick={[5, 4]} /></Reveal></section>
    </main>
  )
}
