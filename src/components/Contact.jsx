import { useState } from 'react'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { business, products, phoneHref } from '../data/site.js'

const empty = { name: '', phone: '', item: products[0].name, qty: '', note: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  /*
   * There is no backend here. The enquiry is turned into a pre-filled WhatsApp
   * message so it lands on the farm's phone. Swap this for a fetch() to your own
   * API or a form service (Formspree, Getform, …) when you have one.
   */
  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 10) {
      setError('Please give a name and a 10 digit phone number.')
      return
    }
    setError('')
    const text = encodeURIComponent(
      `Enquiry from the website\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Item: ${form.item}\n` +
        `Quantity: ${form.qty || 'not specified'}\n` +
        `Note: ${form.note || '-'}`
    )
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, '_blank', 'noopener')
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <span className="pill">Get in touch</span>
          <h2>
            Call the farm — we answer the phone{' '}
            <span className="hl">ourselves</span>
          </h2>
          <p>
            Tell us the bird, the weight band and the quantity and we will give you
            today's rate and the next lifting date.
          </p>

          <ul className="contact-list">
            <li>
              <span className="ci"><Icon name="phone" size={20} /></span>
              <div>
                <small>Phone</small>
                <a href={phoneHref}>{business.phone}</a>
              </div>
            </li>
            <li>
              <span className="ci"><Icon name="mail" size={20} /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </li>
            <li>
              <span className="ci"><Icon name="pin" size={20} /></span>
              <div>
                <small>Farm address</small>
                <span>{business.address}</span>
              </div>
            </li>
            <li>
              <span className="ci"><Icon name="clock" size={20} /></span>
              <div>
                <small>Open</small>
                <span>{business.hours}</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="card contact-card" delay={120}>
          <h3>Send an enquiry</h3>
          <p className="contact-card-sub">
            This opens WhatsApp with your details filled in.
          </p>

          <form onSubmit={submit} noValidate>
            <label>
              <span>Your name</span>
              <input value={form.name} onChange={set('name')} placeholder="Ramesh Kumar" />
            </label>

            <label>
              <span>Phone number</span>
              <input
                value={form.phone}
                onChange={set('phone')}
                inputMode="tel"
                placeholder="93441 43376"
              />
            </label>

            <div className="field-row">
              <label>
                <span>What do you need?</span>
                <select value={form.item} onChange={set('item')}>
                  {products.map((p) => (
                    <option key={p.id}>{p.name}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Quantity</span>
                <input value={form.qty} onChange={set('qty')} placeholder="200 kg / 500 chicks" />
              </label>
            </div>

            <label>
              <span>Anything else</span>
              <textarea
                rows="3"
                value={form.note}
                onChange={set('note')}
                placeholder="Delivery to Salem on Sunday morning…"
              />
            </label>

            {error && <p className="form-error">{error}</p>}
            {sent && (
              <p className="form-ok">
                <Icon name="check" size={14} /> Enquiry opened in WhatsApp. We will get back to
                you shortly.
              </p>
            )}

            <button className="btn btn-primary btn-block" type="submit">
              <Icon name="whatsapp" size={18} /> Send enquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
