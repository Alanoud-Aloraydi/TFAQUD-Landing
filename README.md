# Tafaqod Landing Page | صفحة تفقُد

The landing page for [Tafaqod](https://github.com/Alanoud-Aloraydi/TFAQUD-Portfolio), our Holberton School Portfolio Project. Arabic by default, with an English switch.

Live page: https://alanoud-aloraydi.github.io/TFAQUD-Landing/

## Files

| Path | Contents |
|---|---|
| `index.html` | Page content (Arabic) |
| `css/style.css` | Liquid glass styles |
| `js/i18n.js` | English texts and the language switch |
| `js/main.js` | Scroll reveal, active nav, beta signup form |
| `assets/screens/` | App screenshots: `circle.webp`, `plan.webp`, `simple.webp` |
| `assets/video/` | Demo video as an HLS stream: `1080/` is the original file split into short pieces, `720/` is for slow connections, `master.m3u8` lists both |
| `assets/demo-poster.webp` | Video cover frame |

## Beta signup form

Signups are sent to a Google Form in the background.

1. Create a Google Form with five **Short answer** questions: Platform, Model, Name, Email, For who.
2. Open **⋮ → Get pre-filled link**, type any value in each question, and click **Get link**.
3. The link holds `entry.123456789=...` for each question. Put each id in `GOOGLE_FORM.fields` in `js/main.js`.
4. Copy the form id from the link (`/forms/d/e/<id>/viewform`) into `GOOGLE_FORM.action`.
5. Answers appear in the form's **Responses** tab, or in a linked Google Sheet.

## Publish

Settings → Pages → Deploy from a branch → `main` / `(root)`.
