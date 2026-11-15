import { useState } from 'react'
// Validated demo form: nothing is saved or sent until the backend is connected.
// fields: [key, label, { type, placeholder, rows, options, required, optional }]
export default function DemoForm({ fields, consent, button = 'Submit', thanks = 'Thank you.' }) {
  const init = Object.fromEntries(fields.map(([k, , o = {}]) => [k, o.options ? o.options[0] : '']))
  const [v, setV] = useState({ ...init, consent: false }); const [err, setErr] = useState({}); const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const submit = (e) => {
    e.preventDefault(); const x = {}
    fields.forEach(([k, , o = {}]) => {
      if (!o.required) return
      if (o.type === 'email' ? !/^\S+@\S+\.\S+$/.test(v[k]) : v[k].trim().length < (o.min || 2)) x[k] = o.type === 'email' ? 'Please enter a valid email address.' : 'Please fill in this field.'
    })
    if (!v.consent) x.consent = 'Please agree so we may respond to you.'
    setErr(x); if (!Object.keys(x).length) setSent(true)
  }
  if (sent) return (
    <div className="xnote"><h3>{thanks}</h3><p><b>Demo only.</b> Nothing was sent or saved, because the backend is not connected yet. Once it is, this form will reach our team.</p>
      <button className="btn ghost" onClick={() => { setV({ ...init, consent: false }); setSent(false) }}>Fill in again</button></div>
  )
  return (
    <form className="frm cf" onSubmit={submit} noValidate>
      {fields.map(([k, label, o = {}]) => {
        const T = o.options ? 'select' : o.rows ? 'textarea' : 'input'
        return (
          <label key={k} className="fld">{label}{o.required ? '*' : ''}
            <T value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} type={T === 'input' ? o.type || 'text' : undefined} rows={o.rows} placeholder={o.placeholder}>
              {o.options && o.options.map((x) => <option key={x}>{x}</option>)}
            </T>
            {err[k] && <span className="err" role="alert">{err[k]}</span>}
          </label>
        )
      })}
      <label className="chk"><input type="checkbox" checked={v.consent} onChange={set('consent')} /> {consent}</label>
      {err.consent && <span className="err" role="alert">{err.consent}</span>}
      <button className="btn" type="submit">{button}</button>
      <p className="mut">Demo form: nothing is saved until the backend is connected.</p>
    </form>
  )
}
