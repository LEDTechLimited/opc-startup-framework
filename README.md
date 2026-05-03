# OPC Startup Framework — Web Tool

Interactive web version of the OPC Startup Framework. Founders answer ~30 questions and get a downloadable Master Blueprint + customized AI System Prompt.

**Live demo**: (deploy to GitHub Pages — see below)

---

## What it is

A static web app (HTML + Tailwind-style CSS + Alpine.js) that:

1. Renders the framework reference (`00_Framework_Reference.md`) as a readable site
2. Walks founders through an 8-section questionnaire (~30 questions)
3. Auto-saves progress to browser localStorage
4. Generates a customized Master Blueprint as `.md` and `.pdf`
5. Generates a customized AI System Prompt for Claude Project / Custom GPT / Gemini Gem
6. Provides one-click integration with Claude.ai

**No backend. No analytics. No tracking.** All data stays in the user's browser.

---

## File structure

```
OPC_Startup_Framework_Web/
├── README.md                # This file
├── .nojekyll                # Tells GitHub Pages to skip Jekyll processing
├── index.html               # Landing page
├── framework.html           # Framework reference (renders MD)
├── questionnaire.html       # Interactive questionnaire app
├── about.html               # About page
└── assets/
    ├── style.css            # Editorial dark theme
    ├── app.js               # Alpine.js components
    ├── questions.js         # Question schema (edit to update questionnaire)
    ├── blueprint-generator.js  # MD/Prompt generation logic
    └── content/
        ├── framework_reference.md   # Source of /framework
        ├── how_to_use.md            # Adoption guide (referenced in About)
        └── ai_system_prompt.md      # Reference prompt template
```

---

## Local preview

No build step. Just open `index.html` in a browser, or serve with any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

---

## Deploy to GitHub Pages

### One-time setup

1. **Create a GitHub repo**:
   ```bash
   cd "/Users/wallchan/Desktop/LED/00 Claude Code/01 BluePrint/00_Shared_Frameworks/OPC_Startup_Framework_Web"
   git init
   git add .
   git commit -m "Initial: OPC Startup Framework web tool v1.0"
   ```

2. **Create the GitHub repo** on github.com (e.g., `opc-startup-framework`)

3. **Push to GitHub**:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/opc-startup-framework.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Save

5. **Visit your site** at: `https://YOUR_USERNAME.github.io/opc-startup-framework/`

   Allow ~1-2 min for first build.

### Custom domain (optional)

To use e.g. `opcstartup.com`:

1. Add a `CNAME` file at the repo root containing just: `opcstartup.com`
2. In your DNS provider, point `opcstartup.com` to GitHub Pages:
   - A records to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME `www.opcstartup.com` to `YOUR_USERNAME.github.io`
3. In repo Settings → Pages → enter custom domain + check "Enforce HTTPS"

---

## Updating the framework

The web tool reads from markdown files in `assets/content/`. To update content:

1. Edit `00_Framework_Reference.md` in the parent `OPC_Startup_Framework/` folder
2. Copy updated version into `assets/content/framework_reference.md`
3. Commit and push — GitHub Pages auto-rebuilds

To update questionnaire questions:

1. Edit `assets/questions.js`
2. Update `assets/blueprint-generator.js` if new fields need to appear in output
3. Commit and push

---

## Tech stack

- **HTML5** — semantic markup
- **Tailwind-style CSS** — custom CSS, no Tailwind dependency for max portability
- **Alpine.js v3** — reactive components, ~15 KB via CDN
- **marked.js** — markdown rendering
- **html2pdf.js** — client-side PDF generation
- **localStorage** — progress save

All deps loaded via CDN. No build step, no node_modules, no package.json.

**Total page weight**: ~250 KB first load (mostly fonts + libs from CDN). Subsequent navigation: instant.

---

## License

This framework is freely shareable. If you adapt it for client work or workshops, attribution appreciated.

---

## Support

This is a v1 release. If you hit bugs or have suggestions, fork the repo and open a PR.

*Built for founders, by founders.*
