// import { createRoot } from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'
// import './styles/style.css'
// import './styles/enhance.css'
// import App from './App.jsx'
// createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>)
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './styles/style.css'
import './styles/enhance.css'
import App from './App.jsx'
import { initTheme } from './components/ThemeToggle.jsx'

initTheme()
createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>)