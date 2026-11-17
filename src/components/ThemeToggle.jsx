import { useEffect, useState } from 'react'

const KEY = 'vov-theme'
export const getTheme = () =>
  (typeof document !== 'undefined' && document.documentElement.dataset.theme) || 'green'

export function applyTheme(t) {
  document.documentElement.dataset.theme = t
  try { localStorage.setItem(KEY, t) } catch (e) {}
  window.dispatchEvent(new CustomEvent('vov-theme', { detail: t }))
}

// Call once before the app renders (see main.jsx) so there is no colour flash.
export function initTheme() {
  let t = 'green'
  try { t = localStorage.getItem(KEY) || 'green' } catch (e) {}
  document.documentElement.dataset.theme = t === 'blue' ? 'blue' : 'green'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme())
  useEffect(() => {
    const on = (e) => setTheme(e.detail)
    window.addEventListener('vov-theme', on)
    return () => window.removeEventListener('vov-theme', on)
  }, [])
  const next = theme === 'green' ? 'blue' : 'green'
  return (
    <button
      type="button"
      className="thm"
      role="switch"
      aria-checked={theme === 'green'}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={() => applyTheme(next)}
    >
      <span className="d b" />
      <span className="d g" />
      <span className="k" />
    </button>
  )
}