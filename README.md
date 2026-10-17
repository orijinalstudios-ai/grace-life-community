# Grace Life Community Church 🌿

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Forijinalstudios-ai%2Fgrace-life-community)

Official web platform for **Grace Life Community Church**, Port Harcourt, Rivers State.

> *"Grace doesn't wait for you to be 'perfect' before it equips you. He gave you everything that pertains to life and godliness."* — **2 Peter 1:3** • **#EachOneReachOne**

---

## 📍 Sanctuary & Service Schedule
- **Sanctuary Address**: 50a Harold Wilson Drive, UPE Junction, Borikiri, Port Harcourt, Rivers State.
- **Lead Pastor**: Pst. Inaifie Allaputa
- **Gathering Times**:
  - **Thursday**: 5:30 PM (Midweek Word & Worship Encounter)
  - **Sunday**: 7:30 AM (1st Service — Early Manna Encounter)
  - **Sunday**: 9:00 AM (2nd Service — Celebration & Communion Service)

---

## 🌟 Key Features
- **Mobile-First Responsive Design**: Tailored viewport experiences across iPhone, Android, tablets, and desktops.
- **5 Core Values (G.R.A.C.E)**: God's Grace, Relational Authenticity, Active Worship, Compassionate Outreach, and Empowered Calling.
- **Featured Sermon & Media Suite**: Audio synthesizer preview player, downloadable study guide, and high-fidelity video modal player.
- **Giving & Partnership Hub**: Direct bank transfer coordinates, quick-copy account numbers, and debit/card partner channels.
- **Pastor's Desk & Devotionals**: Dynamic reading drawer for weekly reflections and faith articles.
- **Pastoral Admin Portal**: Dedicated single-access management dashboard located discreetly in the footer for adding events, announcements, and articles with real-time `localStorage` persistence.
- **Interactive Modals**: "Plan Your Visit" seat reservation with service time picker and "Pastoral Prayer Request" system.
- **Search System**: Global real-time search across sermon series, events, articles, and beliefs.

---

## 🚀 Deployment & Local Preview

### Local & Mobile Preview
Open `index.html` directly in any web browser, double-click `preview.bat`, or run:
```bash
node scripts/preview-server.js
```

### Vercel Deployment
Deploy with the Vercel CLI or connect this GitHub repository directly to [Vercel](https://vercel.com):
```bash
npx vercel
```
Or import the GitHub repository in the Vercel Dashboard for instant continuous deployment.

---

## 🔍 Search Engine Optimization (SEO) & Indexing

The website includes built-in enterprise-grade SEO architecture:
- **Crawler Directives**: [`robots.txt`](./robots.txt) permits all major search bots and points directly to the sitemap index.
- **XML Sitemap**: [`sitemap.xml`](./sitemap.xml) exposes key section anchors (`#about-us`, `#sermons`, `#events`, `#blog`, `#give`) with update frequencies.
- **Schema.org Structured Data**: Embedded JSON-LD schema for `Church` & `PlaceOfWorship` with sanctuary geolocation (`NG-RI`, Borikiri coordinates), service times, official email (`gracelifeauthentic@gmail.com`), and verified social channels.
- **Open Graph & Twitter Cards**: High-fidelity metadata for WhatsApp, Facebook, iMessage, and X previews.

### Submitting to Google Search Console
1. Go to **[Google Search Console](https://search.google.com/search-console)**.
2. Add your property URL: `https://grace-life-community.vercel.app/`.
3. Under **Sitemaps**, submit `https://grace-life-community.vercel.app/sitemap.xml`.
4. Click **Request Indexing** to expedite Google's initial crawl.

