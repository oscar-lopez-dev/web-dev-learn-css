# 🎨 Modern CSS Learning Catalog (`web-dev-learn-css`)

> An interactive deliberate-practice catalog and living material reference for modern CSS layout architecture, based on Google's [web.dev/learn/css](https://web.dev/learn/css).

[🌐 Live Interactive Showcase](https://oscarlopez1991.github.io/web-dev-learn-css/)

---

### 🎯 Purpose & Methodology

This repository is **not** a collection of passive tutorial snippets. It is a **living reference library built on-demand** to deeply internalize modern CSS layout standards:

1. **Deliberate Practice**: Theory from Google's `web.dev/learn/css` is converted into tactile, interactive browser playgrounds.
2. **The "Brain & Arms" Model (`/grill-with-docs`)**: Developed through human-AI pair engineering. After studying each lesson, we run a `/grill-with-docs` session where the AI stress-tests edge cases, clarifies domain terms (`CONTEXT.md`), and agrees on the challenge specification before a single line of code is written. The AI then acts as the implementation partner generating clean, framework-free web standards code.
3. **Tactile Experimentation**: Every chapter features live UI controls (sliders, toggles, metric readouts) to visually break and fix layouts in real time.
4. **Tailwind Mappings**: Every native CSS mechanic is mapped directly to its Tailwind utility equivalent for immediate production application.

---

### 🗺️ The 8-Stage Layout Radar

Curriculum layout areas covered on-demand through deliberate practice:

- [ ] **01. Cascade & Specificity** · Rule resolution, `@layer`, specificity calculation, avoiding `!important`.
- [ ] **02. Box Model** · `content`, `padding`, `border`, `margin`, `box-sizing`, overflow, margin collapsing.
- [ ] **03. Sizing Units** · Intrinsic vs extrinsic sizing, fluid math (`clamp()`, `min()`, `max()`).
- [ ] **04. Layout Flow** · Normal flow, block vs inline, formatting contexts, `display: flow-root`.
- [ ] **05. Flexbox** · 1D layouts, alignment, flex-basis/grow/shrink, gap.
- [ ] **06. Grid** · 2D layouts, tracks, `minmax()`, subgrid.
- [ ] **07. Responsive Design** · Fluid typography, media queries, preventing layout shifts.
- [ ] **08. Container Queries** · Modular component responsiveness with `@container`.

---

### 🚀 Quickstart

Clone and run the interactive catalog locally:

```bash
# Clone the repository
git clone https://github.com/oscarlopez1991/web-dev-learn-css.git
cd web-dev-learn-css

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 🛠️ Tech Stack & Philosophy
* **Vite**: Lightweight, instant HMR build tool.
* **Pure Modern CSS**: Zero utility or CSS-in-JS frameworks — 100% native web standards (Custom Properties, CSS Grid, Flexbox, Container Queries).
* **Automated CI/CD**: Automatically builds and deploys to GitHub Pages via GitHub Actions on merges to `main`.
