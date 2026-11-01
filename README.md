# Vedanta Hazra — Personal Portfolio

A responsive single-page academic portfolio built with React, Vite, Tailwind CSS v4, and Lucide React. It is configured for GitHub Pages. The About section appears immediately below the navigation, and the header uses the full name **Vedanta Hazra**.

## 1. Run locally

Install Node.js (22 LTS recommended), then open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite (normally http://localhost:5173).

## 2. Add your profile photograph

Copy your portrait to:

`public/assets/profile/vedanta-hazra.jpg`

The About section is already configured to look for this path. If you prefer a different filename or image format, update `profile.photo` near the top of `src/data.js`. The image is displayed next to your full name. Until the image file is added, the layout hides the missing image rather than showing a broken-image icon.

## 3. Add research paper PDFs and presentation links

The Publications section already supports a separate paper PDF, DOI link, and presentation link for every publication. Put paper PDFs you are permitted to share in `public/assets/papers/`, then set the matching `pdf` field in `src/data.js`.

Suggested filenames and example values:

| Publication | Place file at | Set `pdf` to |
|---|---|---|
| Liquid-Gait (IEEE VR 2026) | `public/assets/papers/liquid-gait.pdf` | `/assets/papers/liquid-gait.pdf` |
| ISMAR 2026 | `public/assets/papers/ismar-paper.pdf` | `/assets/papers/ismar-paper.pdf` |
| ISEMV 2026 | `public/assets/papers/isemv-paper.pdf` | `/assets/papers/isemv-paper.pdf` |

For example, in the Liquid-Gait entry:

```js
pdf: '/assets/papers/liquid-gait.pdf',
presentationUrl: '/assets/presentations/ieee-vr-2026.pdf',
```

Use `presentationUrl` for a local slide/poster PDF or a public external presentation URL. The Liquid-Gait DOI is already included. Add the official DOI/publication page for the other papers only when you have verified URLs. Do not upload a publisher PDF unless its sharing terms permit it; an accepted manuscript or official publication link may be more appropriate.

## 4. Add XR project screenshots and demonstration videos

The project cards already support an image gallery and a demonstration link. For EduScape XR, place screenshots in:

`public/assets/projects/eduscape/`

For example, add `screenshot-01.jpg`, `screenshot-02.jpg`, and `screenshot-03.jpg`, then update the EduScape entry in `src/data.js`:

```js
images: [
  '/assets/projects/eduscape/screenshot-01.jpg',
  '/assets/projects/eduscape/screenshot-02.jpg',
  '/assets/projects/eduscape/screenshot-03.jpg',
],
demoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
```

The same `images` and `demoUrl` fields are available for the other projects. Leave `images: []` and `demoUrl: ''` until you have files or links to add; the existing abstract project artwork will remain visible in the meantime.

## 5. Google Scholar

Google Scholar is intentionally left blank because you do not have a profile yet. No empty Scholar link is shown on the website. When you create a profile, add its URL to `profile.links.scholar` in `src/data.js`.

## 6. CV and contact details

The CV link points to `public/CV_Vedanta_Hazra.pdf`. Replace that file when you update your CV, keeping the same filename. Review your email and social links in `src/data.js` before publishing. Anything in `public/` is publicly accessible once deployed.

## 7. Create your GitHub repository

Create a **public** repository named exactly `vedantahazra.github.io` (the GitHub username in the current project is `vedantahazra`). From the project folder, run:

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/vedantahazra/vedantahazra.github.io.git
git push -u origin main
```

If a remote named `origin` already exists, use:

```bash
git remote set-url origin https://github.com/vedantahazra/vedantahazra.github.io.git
```

## 8. Enable GitHub Pages

1. Open `https://github.com/vedantahazra/vedantahazra.github.io`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and check that `Deploy portfolio to GitHub Pages` completes successfully.
5. Visit `https://vedantahazra.github.io/`.

The included workflow builds the Vite app and publishes the `dist` folder on every push to `main`.

## 9. Update the website later

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions automatically rebuilds and republishes the website.

## Notes

- Vite `base: '/'` is correct for the user-site repository `vedantahazra.github.io`.
- Google Scholar is left blank by design for now.
- Verify publication titles, author order, venue status, DOIs, and PDF sharing permissions before launch.
- Never commit passwords, API keys, or other secrets.
