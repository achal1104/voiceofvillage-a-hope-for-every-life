// import { useState, useEffect, useRef } from 'react'
// import { NavLink, Link, useLocation } from 'react-router-dom'
// import { Menu, X, ArrowRight, Heart, ChevronDown } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { LANGS } from '../data/content.js'
// import { MENUS } from '../data/nav.js'
// import { Brand } from './Logo.jsx'

// const paths = (m) => m.cols.flatMap((c) => c.items.map((i) => i[0]))

// function Item({ it, onGo }) {
//   const [to, Icon, t, d] = it
//   return (
//     <NavLink to={to} className="ddi" onClick={onGo}>
//       <span className="ddic"><Icon size={19} /></span>
//       <span><b>{t}</b><small>{d}</small></span>
//     </NavLink>
//   )
// }

// export default function Header({ lang, setLang }) {
//   const [open, setOpen] = useState(false)
//   const [menu, setMenu] = useState(null)
//   const [acc, setAcc] = useState(null)
//   const [scrolled, setScrolled] = useState(false)
//   const [bar, setBar] = useState(true)
//   const { pathname } = useLocation()
//   const root = useRef(null); const timer = useRef(null)

//   useEffect(() => {
//     const f = () => setScrolled(window.scrollY > 12)
//     f(); window.addEventListener('scroll', f, { passive: true })
//     return () => window.removeEventListener('scroll', f)
//   }, [])
//   useEffect(() => { setMenu(null); setOpen(false); setAcc(null) }, [pathname])
//   useEffect(() => {
//     const out = (e) => { if (root.current && !root.current.contains(e.target)) setMenu(null) }
//     const esc = (e) => { if (e.key === 'Escape') { setMenu(null); setOpen(false) } }
//     document.addEventListener('mousedown', out); document.addEventListener('keydown', esc)
//     return () => { document.removeEventListener('mousedown', out); document.removeEventListener('keydown', esc) }
//   }, [])
//   const enter = (k) => { clearTimeout(timer.current); setMenu(k) }
//   const leave = () => { timer.current = setTimeout(() => setMenu(null), 140) }
//   const close = () => { setOpen(false); setMenu(null) }

//   return (
//     <header className={'hd' + (scrolled ? ' sc' : '')} ref={root}>
//       {bar && (
//         <div className="ybar"><div className="w">
//           <span className="vp"><i />Live</span>
//           <span className="yt">A Voice for Every Village. A Hope for Every Life.</span>
//           <Link to="/register" className="yl">Register Your Village <ArrowRight size={14} /></Link>
//           <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value)}>{LANGS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
//           <button className="yx" aria-label="Dismiss announcement" onClick={() => setBar(false)}><X size={16} /></button>
//         </div></div>
//       )}
//       <div className="w hdi3">
//         <Brand onClick={close} />
//         <nav className="nv" aria-label="Main">
//           {MENUS.map((m) => {
//             const on = menu === m.key
//             const here = paths(m).includes(pathname)
//             return (
//               <div key={m.key} className={'dd' + (on ? ' open' : '') + (here ? ' here' : '') + (m.badge ? ' nw' : '')} onMouseEnter={() => enter(m.key)} onMouseLeave={leave}>
//                 <button type="button" className="ddt" aria-haspopup="true" aria-expanded={on} onClick={() => setMenu(on ? null : m.key)}>
//                   {m.label}{m.badge && <em className="nb">{m.badge}</em>}<ChevronDown size={14} className="chv" />
//                 </button>
//                 <AnimatePresence>
//                   {on && (
//                     <motion.div className={'ddp' + (m.mega ? ' mega' : '')} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}>
//                       {m.cols.map((c, ci) => (
//                         <div key={ci} className="ddc">
//                           {c.title && <p className="ddh">{c.title}</p>}
//                           {c.items.map((it) => <Item key={it[0]} it={it} onGo={close} />)}
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )
//           })}
//         </nav>
//         <div className="hda">
//           <Link to="/register" className="hl">Register Your Village</Link>
//           <Link to="/support" className="btn"><Heart size={16} /> Support a Village</Link>
//         </div>
//         <button className="bg" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
//       </div>
//       <AnimatePresence>
//         {open && (
//           <motion.div className="mob" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
//             {MENUS.map((m) => (
//               <div key={m.key} className="macc">
//                 <button type="button" className="mah" aria-expanded={acc === m.key} onClick={() => setAcc(acc === m.key ? null : m.key)}>
//                   <span>{m.label}{m.badge && <em className="nb">{m.badge}</em>}</span><ChevronDown size={18} className={acc === m.key ? 'rot' : ''} />
//                 </button>
//                 {acc === m.key && <div className="mab">{m.cols.map((c, ci) => <div key={ci}>{c.title && <p className="ddh">{c.title}</p>}{c.items.map((it) => <Item key={it[0]} it={it} onGo={close} />)}</div>)}</div>}
//               </div>
//             ))}
//             <Link to="/register" className="btn ghost" onClick={close}>Register Your Village</Link>
//             <Link to="/support" className="btn" onClick={close}><Heart size={16} /> Support a Village</Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Heart, HandHeart, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LANGS } from '../data/content.js'
import { MENUS } from '../data/nav.js'
import { Brand } from './Logo.jsx'


const paths = (m) => m.cols.flatMap((c) => c.items.map((i) => i[0]))

function Item({ it, onGo }) {
  const [to, Icon, t, d] = it
  return (
    <NavLink to={to} className="ddi" onClick={onGo}>
      <span className="ddic"><Icon size={19} /></span>
      <span><b>{t}</b><small>{d}</small></span>
    </NavLink>
  )
}

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)
  const [acc, setAcc] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [bar, setBar] = useState(true)
  const { pathname } = useLocation()
  const root = useRef(null); const timer = useRef(null)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { setMenu(null); setOpen(false); setAcc(null) }, [pathname])
  useEffect(() => {
    const out = (e) => { if (root.current && !root.current.contains(e.target)) setMenu(null) }
    const esc = (e) => { if (e.key === 'Escape') { setMenu(null); setOpen(false) } }
    document.addEventListener('mousedown', out); document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', out); document.removeEventListener('keydown', esc) }
  }, [])
  const enter = (k) => { clearTimeout(timer.current); setMenu(k) }
  const leave = () => { timer.current = setTimeout(() => setMenu(null), 140) }
  const close = () => { setOpen(false); setMenu(null) }

  return (
    <header className={'hd' + (scrolled ? ' sc' : '')} ref={root}>
      {bar && (
        <div className="ybar"><div className="w">
          <span className="vp"><i />Live</span>
          <span className="yt">A Voice for Every Village. A Hope for Every Life.</span>
          <Link to="/register" className="yl">Register Your Village <ArrowRight size={14} /></Link>
          <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value)}>{LANGS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>
          <button className="yx" aria-label="Dismiss announcement" onClick={() => setBar(false)}><X size={16} /></button>
        </div></div>
      )}
      <div className="w hdi3">
        <Brand onClick={close} />
        <nav className="nv" aria-label="Main">
          <div className={'dd' + (pathname === '/' ? ' here' : '')}>
            <NavLink to="/" end className="ddt" onClick={close}>Home</NavLink>
          </div>
          {MENUS.map((m) => {
            const on = menu === m.key
            const here = paths(m).includes(pathname)
            return (
              <div key={m.key} className={'dd' + (on ? ' open' : '') + (here ? ' here' : '') + (m.badge ? ' nw' : '')} onMouseEnter={() => enter(m.key)} onMouseLeave={leave}>
                <button type="button" className="ddt" aria-haspopup="true" aria-expanded={on} onClick={() => setMenu(on ? null : m.key)}>
                  {m.label}{m.badge && <em className="nb">{m.badge}</em>}<ChevronDown size={14} className="chv" />
                </button>
                <AnimatePresence>
                  {on && (
                    <motion.div className={'ddp' + (m.mega ? ' mega' : '')} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}>
                      {m.cols.map((c, ci) => (
                        <div key={ci} className="ddc">
                          {c.title && <p className="ddh">{c.title}</p>}
                          {c.items.map((it) => <Item key={it[0]} it={it} onGo={close} />)}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>
                <div className="hda">
          <Link to="/register" className="hl">Register Your Village</Link>
          <Link to="/volunteer" className="btn ghost nav-cta"><HandHeart size={16} /> Become a Volunteer</Link>
          <Link to="/support" className="btn"><Heart size={16} /> Support a Village</Link>
        </div>
        <button className="bg" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mob" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div className="macc"><NavLink to="/" end className="mah homel" onClick={close}>Home</NavLink></div>
            {MENUS.map((m) => (
              <div key={m.key} className="macc">
                <button type="button" className="mah" aria-expanded={acc === m.key} onClick={() => setAcc(acc === m.key ? null : m.key)}>
                  <span>{m.label}{m.badge && <em className="nb">{m.badge}</em>}</span><ChevronDown size={18} className={acc === m.key ? 'rot' : ''} />
                </button>
                {acc === m.key && <div className="mab">{m.cols.map((c, ci) => <div key={ci}>{c.title && <p className="ddh">{c.title}</p>}{c.items.map((it) => <Item key={it[0]} it={it} onGo={close} />)}</div>)}</div>}
              </div>
            ))}
                     <Link to="/register" className="btn ghost" onClick={close}>Register Your Village</Link>
            <Link to="/volunteer" className="btn ghost" onClick={close}><HandHeart size={16} /> Become a Volunteer</Link>
            <Link to="/support" className="btn" onClick={close}><Heart size={16} /> Support a Village</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}