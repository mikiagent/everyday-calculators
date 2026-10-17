# Everyday Calculators

A static site of eight everyday calculators and converters, built to run on Vercel
with Google AdSense and then be left alone.

- No framework, no build step, no dependencies. Plain HTML, CSS and JavaScript in `site/`.
- Every tool runs in the browser. There is no backend to patch or database to pay for.
- One file controls ads: `site/site.js`, the `ADSENSE_CLIENT` constant at the top.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New → Project**, import the repo and click **Deploy**.
   `vercel.json` already points Vercel at the `site/` folder and enables clean URLs.
3. Optional but strongly recommended for AdSense: add a custom domain under
   **Project → Settings → Domains**. Google approves sites on their own domain far more
   readily than on a `*.vercel.app` address.

To preview locally, run `node serve.mjs` and open http://localhost:4173.

Or without GitHub, install the CLI and run it from this folder:

```bash
npm i -g vercel && vercel --prod
```

## Before applying to AdSense (one-time, ~10 minutes)

1. Replace `https://YOUR-DOMAIN.vercel.app` in `site/sitemap.xml` and `site/robots.txt`
   with your real URL.
2. Replace `CONTACT-EMAIL@example.com` in `site/contact.html` with a real address.
3. Deploy, then let the site sit live for a couple of weeks and submit the sitemap in
   Google Search Console. AdSense reviewers reject brand-new sites with no indexed pages.
4. Apply at adsense.google.com with your domain. Approval typically takes a few days to
   a few weeks.

## After approval

1. Paste your publisher ID into `ADSENSE_CLIENT` in `site/site.js`
   (it looks like `ca-pub-1234567890123456`).
2. Uncomment the line in `site/ads.txt` and put the same ID in it.
3. In AdSense, turn on **Auto ads** for the site. No per-slot code is needed.
4. Push. Vercel redeploys automatically.

## Upkeep

There is nothing to update. If you want to add a tool later, copy any file in
`site/tools/`, change the form and the few lines of script, and add a card to
`site/index.html` plus a line in `site/sitemap.xml`.

## Revenue expectations

AdSense pays per impression and click, so income follows traffic. Calculator sites earn
roughly $1–$5 per thousand page views depending on topic and country. The finance
tools (loan, compound interest) carry the highest ad rates; the way to grow revenue
is more pages on more specific questions, each targeting a search people actually type.
