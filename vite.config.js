import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { routes, SITE_URL } from './src/seo/routes.js'

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * After the build, write dist/<route>.html for every route with that page's
 * <title>, description, Open Graph tags and canonical URL baked in (English copy).
 * Link previews (WhatsApp, Facebook, LinkedIn...) don't run JavaScript, so this is
 * what makes e.g. /music shareable with its own title and description.
 * Vercel serves these static files before applying the SPA rewrite in vercel.json.
 */
function seoPages() {
  let outDir = 'dist'
  return {
    name: 'seo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const en = JSON.parse(fs.readFileSync(path.join(outDir, 'locales/en/translation.json'), 'utf8'))

      for (const { path: route, seoKey } of routes) {
        const seo = en.seo?.[seoKey]
        if (!seo) throw new Error(`[seo-pages] missing seo.${seoKey} in en/translation.json`)
        const url = `${SITE_URL}${route}`
        const title = escapeAttr(seo.title)
        const description = escapeAttr(seo.description)

        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/(name="description" content=")[^"]*"/, `$1${description}"`)
          .replace(/(property="og:title" content=")[^"]*"/, `$1${title}"`)
          .replace(/(property="og:description" content=")[^"]*"/, `$1${description}"`)
          .replace(/(property="og:url" content=")[^"]*"/, `$1${url}"`)
          .replace(/(rel="canonical" href=")[^"]*"/, `$1${url}"`)

        // /music -> music.html; served at /music thanks to "cleanUrls" in vercel.json.
        const target = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, `${route.slice(1)}.html`)
        fs.writeFileSync(target, html)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
})
