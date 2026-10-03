import { useEffect } from 'react'

const SITE = 'https://tokito-dev.netlify.app'

function upsertMeta(attr, key, value, content) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * SEO — per-route title/description/canonical for this SPA.
 * Usage: <SEO title="About" description="..." path="/about" />
 */
const SEO = ({ title, description, path = '/', image = `${SITE}/og-image.png`, noindex = false }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} — Tokito Dev (t4tokito)` : 'Tokito Dev (t4tokito) — Vikas Maurya | Frontend Developer'
    document.title = fullTitle

    const url = `${SITE}${path}`
    if (description) {
      upsertMeta('name', 'description', true, description)
      upsertMeta('property', 'og:description', true, description)
      upsertMeta('name', 'twitter:description', true, description)
    }
    upsertMeta('property', 'og:title', true, fullTitle)
    upsertMeta('property', 'og:url', true, url)
    upsertMeta('property', 'og:image', true, image)
    upsertMeta('name', 'twitter:title', true, fullTitle)
    upsertMeta('name', 'twitter:image', true, image)
    upsertMeta('name', 'robots', true, noindex ? 'noindex, follow' : 'index, follow')
    if (!noindex) upsertLink('canonical', url)
  }, [title, description, path, image, noindex])

  return null
}

export default SEO
