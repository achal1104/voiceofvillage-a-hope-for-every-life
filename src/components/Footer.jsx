// import { ShieldCheck } from 'lucide-react'
// import { Brand } from './Logo.jsx'
// import { FOOT } from '../data/footer.js'

// export default function Footer({ lang }) {
//   const x = FOOT[lang] || FOOT.en
//   return (
//     <footer className="ft">
//       <div className="stripes" aria-hidden="true"><i /><i /><i /><i /></div>
//       <div className="w">
//         <div className="fg">
//           <div>
//             <Brand />
//             <p>{x.desc}</p>
//             <span className="bdg"><ShieldCheck size={14} /> {x.badge}</span>
//           </div>
//           <div><h5>{x.pTitle}</h5><ol>{x.pillars.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div>
//           <div><h5>{x.dTitle}</h5><p>{x.dDesc}</p><p className="mut">Districts will appear here once villages are listed.</p></div>
//           <div>
//             <h5>{x.hTitle}</h5>
//             <p><b>{x.gp}</b><br />{x.gpd}</p>
//             <p><b>{x.gr}</b><br />{x.grd}</p>
//             <p>{x.mail}</p>
//           </div>
//         </div>
//         <div className="cmp"><h5>{x.cTitle}</h5><p>{x.cText}</p></div>
//         <div className="bot"><span>{x.copy}</span><span>{x.links.map((l) => <a key={l} href="#/">{l}</a>)}</span></div>
//       </div>
//     </footer>
//   )
// }
import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import { Brand } from './Logo.jsx'
import { FOOT } from '../data/footer.js'

const QUICK = [['/about', 'About Us'], ['/villages', 'Explore Villages'], ['/register', 'Register Your Village'], ['/support', 'Support a Village'], ['/adopt', 'Adopt a Village'], ['/volunteer', 'Volunteer'], ['/emergency', 'Emergency Needs'], ['/ground-reality', 'Ground Reality'], ['/impact', 'Our Impact'], ['/ngo-csr', 'NGO & CSR'], ['/contact', 'Contact']]

export default function Footer({ lang }) {
  const x = FOOT[lang] || FOOT.en
  return (
    <footer className="ft">
      <div className="stripes" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="w">
        <div className="fg">
          <div>
            <Brand />
            <p>{x.desc}</p>
            <span className="bdg"><ShieldCheck size={14} /> {x.badge}</span>
          </div>
          <div><h5>{x.pTitle}</h5><ol>{x.pillars.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div>
          <div><h5>{x.dTitle}</h5><p>{x.dDesc}</p><p className="mut">Districts will appear here once villages are listed.</p></div>
          <div>
            <h5>{x.hTitle}</h5>
            <p><b>{x.gp}</b><br />{x.gpd}</p>
            <p><b>{x.gr}</b><br />{x.grd}</p>
            <p>{x.mail}</p>
          </div>
        </div>
        <nav className="fq" aria-label="Footer">
          <Link to="/">Home</Link>
          {QUICK.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}
        </nav>
        <div className="cmp"><h5>{x.cTitle}</h5><p>{x.cText}</p></div>
        <div className="bot"><span>{x.copy}</span><span>{x.links.map((l) => <Link key={l} to="/">{l}</Link>)}</span></div>
      </div>
    </footer>
  )
}