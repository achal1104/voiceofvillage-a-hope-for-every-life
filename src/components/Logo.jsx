// // import { Link } from 'react-router-dom'

// // export default function Logo({ size = 40 }) {
// //   return (
// //     <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
// //       <rect width="64" height="64" rx="16" fill="#2fb23a" />
// //       <path d="M32 8C23 21 17 29 17 38a15 15 0 0 0 30 0c0-9-6-17-15-30Z" fill="#fff" />
// //       <g fill="#2fb23a"><rect x="24" y="35" width="4" height="9" rx="2" /><rect x="30" y="29" width="4" height="21" rx="2" /><rect x="36" y="33" width="4" height="13" rx="2" /></g>
// //       <path d="M8 56h48" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
// //     </svg>
// //   )
// // }

// // // Logo mark + condensed wordmark, GullyCrix-style ("VOICE OF" in ink, "VILLAGE" in leaf green)
// // export function Brand({ onClick, size = 44 }) {
// //   return (
// //     <Link to="/" className="brand gb" onClick={onClick} aria-label="VoiceOfVillage home">
// //       <Logo size={size} />
// //       <span className="wm2"><b>Voice</b><i>of</i><b className="g">Village</b></span>
// //     </Link>
// //   )
// // }
// import { Link } from 'react-router-dom'
// // import logoImg from '../assets/logo.png'   // public/ madhe thevla asel tar: const logoImg = '/logo.png'
// import logoImg from '../assets/bluelogo-icon.png'
// export default function Logo({ size = 40 }) {
//   return (
//     <img
//       src={logoImg}
//       alt=""
//       aria-hidden="true"
//       width={size}
//       height={size}
//       style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
//     />
//   )
// }

// // Logo mark + condensed wordmark ("VOICE OF" in ink, "VILLAGE" in leaf green)
// export function Brand({ onClick, size = 44 }) {
//   return (
//     <Link to="/" className="brand gb" onClick={onClick} aria-label="VoiceOfVillage home">
//       <Logo size={size} />
//       <span className="wm2"><b>Voice</b><i>of</i><b className="g">Village</b></span>
//     </Link>
//   )
// }
import { Link } from 'react-router-dom'
import greenLogo from '../assets/logo.png'          // cropped green logo
import blueLogo from '../assets/bluelogo-icon.png'  // cropped blue logo

// Both logos are rendered; CSS (html[data-theme]) shows the one for the active theme.
export default function Logo({ size = 40 }) {
  return (
    <span className="lg" aria-hidden="true" style={{ width: size, height: size }}>
      <img className="lg-g" src={greenLogo} alt="" />
      <img className="lg-b" src={blueLogo} alt="" />
    </span>
  )
}

// Logo mark + condensed wordmark ("VOICE OF" in ink, "VILLAGE" in theme colour)
export function Brand({ onClick, size = 44 }) {
  return (
    <Link to="/" className="brand gb" onClick={onClick} aria-label="VoiceOfVillage home">
      <Logo size={size} />
      <span className="wm2"><b>Voice</b><i>of</i><b className="g">Village</b></span>
    </Link>
  )
}