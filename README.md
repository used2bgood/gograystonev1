# Graystone Contracting – Simple One‑Page Site

A fast, responsive, single‑page site for Graystone Contracting (roofing, fencing, restoration).

## Structure
```
/assets              # images (logo, gallery, service photos, og image)
/css/styles.css      # styles
/js/main.js          # small JS for mobile drawer + footer year
index.html
```

## Replace Images
Place these files in `/assets/`:
- `logo-graystone.png` (transparent PNG)
- `services-roofing.jpg`
- `services-fence.jpg`
- `services-mitigation.jpg`
- `g1.jpg` … `g8.jpg` (project photos)
- `graystone-og.jpg` (1200x630 for social previews)

## Contact Form
Edit the `<form action>` in `index.html` to point to your form processor (Formspree/Basin) or use `mailto:`.

## Development
Just open `index.html` in your browser.

## Deploy (GitHub Pages)
1. Create a new GitHub repo and push these files.
2. In repo Settings → Pages, set **Deploy from Branch**, branch `main`, folder `/ (root)`.
3. Your site will be available at `https://<username>.github.io/<repo>/`.

## Deploy (Cloudflare Pages)
1. Create a new Pages project and connect this repo.
2. Build command: _none_  • Output folder: `/`.
3. Map your custom domain (e.g. graystone‑contracting.com) and set DNS to Cloudflare.
