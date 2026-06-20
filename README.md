# Ali Demirbaş — Personal Site

Personal portfolio / CV site for Ali Demirbaş (Growth Marketer), built with
Next.js (App Router) and `next/font` (Inter). No UI framework — styling lives in
`src/app/globals.css`.

## Pages

- `/` — Home (hero, about summary, content highlights, contact)
- `/about` — Bio + experience timeline
- `/content` — Content highlights
- `/stack` — Tools, grouped
- `/contact` — Contact links

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Notes

- The profile photo lives at `public/foto.webp`. The committed file is a
  placeholder — replace it with the real photo (square, e.g. 600×600) keeping
  the same path and filename.
- Company / tool logos are loaded from [Simple Icons](https://simpleicons.org)
  via their CDN.
