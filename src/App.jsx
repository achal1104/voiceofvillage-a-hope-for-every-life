// import { useState, useEffect } from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import { MotionConfig, AnimatePresence, motion } from 'framer-motion'
// import ScrollProgress from './components/ScrollProgress.jsx'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'
// import Placeholder from './pages/Placeholder.jsx'
// import About from './pages/About.jsx'
// import Villages from './pages/Villages.jsx'
// import GroundReality from './pages/GroundReality.jsx'
// import Impact from './pages/Impact.jsx'
// import NgoCsr from './pages/NgoCsr.jsx'
// import Contact from './pages/Contact.jsx'
// import Register from './pages/Register.jsx'
// import Support from './pages/Support.jsx'
// import Volunteer from './pages/Volunteer.jsx'
// import Adopt from './pages/Adopt.jsx'
// import Emergency from './pages/Emergency.jsx'

// export default function App() {
//   const [lang, setLang] = useState('en')
//   const location = useLocation(); const { pathname } = location
//   useEffect(() => { window.scrollTo(0, 0) }, [pathname])
//   const real = { '/about': About, '/villages': Villages, '/ground-reality': GroundReality, '/impact': Impact, '/ngo-csr': NgoCsr, '/contact': Contact, '/register': Register, '/support': Support, '/volunteer': Volunteer, '/adopt': Adopt, '/emergency': Emergency }
//   return (
//     <MotionConfig reducedMotion="user">
//       <ScrollProgress />
//       <Header lang={lang} setLang={setLang} />
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div className="pg" key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
//           <Routes location={location}>
//             <Route path="/" element={<Home />} />
//             {Object.entries(real).map(([p, C]) => <Route key={p} path={p} element={<C />} />)}
//             <Route path="*" element={<Placeholder title="Page not found" />} />
//           </Routes>
//         </motion.div>
//       </AnimatePresence>
//       <Footer lang={lang} />
//     </MotionConfig>
//   )
// }
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig, AnimatePresence, motion } from 'framer-motion'
import ScrollProgress from './components/ScrollProgress.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'
import About from './pages/About.jsx'
import Villages from './pages/Villages.jsx'
import GroundReality from './pages/GroundReality.jsx'
import Impact from './pages/Impact.jsx'
import NgoCsr from './pages/NgoCsr.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import Support from './pages/Support.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Adopt from './pages/Adopt.jsx'
import Emergency from './pages/Emergency.jsx'
import Funding from './pages/Funding.jsx'
import Story from './pages/Story.jsx'

export default function App() {
  const [lang, setLang] = useState('en')
  const location = useLocation(); const { pathname } = location
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const real = { '/about': About, '/villages': Villages, '/ground-reality': GroundReality, '/impact': Impact, '/ngo-csr': NgoCsr, '/contact': Contact, '/register': Register, '/support': Support, '/volunteer': Volunteer, '/adopt': Adopt, '/emergency': Emergency, '/fund-a-village': Funding, '/stories/:slug': Story }
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header lang={lang} setLang={setLang} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className="pg" key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            {Object.entries(real).map(([p, C]) => <Route key={p} path={p} element={<C />} />)}
            <Route path="*" element={<Placeholder title="Page not found" />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer lang={lang} />
    </MotionConfig>
  )
}