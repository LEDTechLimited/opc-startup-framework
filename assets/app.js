// OPC Startup Framework — Alpine.js components

const STORAGE_KEY = 'opc_questionnaire_v1';

document.addEventListener('alpine:init', () => {

  // ============= QUESTIONNAIRE COMPONENT =============
  Alpine.data('questionnaire', () => ({
    sections: window.OPC_QUESTIONS.sections,
    currentSection: 0,
    answers: {},
    saved: false,
    savedTimer: null,
    showReview: false,
    output: { md: '', prompt: '', businessName: '' },

    init() {
      this.loadFromStorage();

      // Auto-save on any change
      this.$watch('answers', () => {
        this.saveToStorage();
      }, { deep: true });

      // Keyboard nav
      window.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        if (e.key === 'ArrowRight') this.nextSection();
        if (e.key === 'ArrowLeft') this.prevSection();
      });
    },

    loadFromStorage() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          this.answers = parsed.answers || {};
          this.currentSection = parsed.currentSection || 0;
        }
      } catch (e) {
        console.warn('Could not load saved progress', e);
      }
    },

    saveToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          answers: this.answers,
          currentSection: this.currentSection,
          updatedAt: new Date().toISOString()
        }));
        this.saved = true;
        clearTimeout(this.savedTimer);
        this.savedTimer = setTimeout(() => { this.saved = false; }, 1500);
      } catch (e) {
        console.warn('Could not save progress', e);
      }
    },

    section(idx) {
      return this.sections[idx];
    },

    sectionAnswered(sectionIdx) {
      const section = this.sections[sectionIdx];
      const required = section.questions.filter(q => q.required);
      if (required.length === 0) {
        // No required — count as complete if any answered
        return section.questions.some(q => this.hasAnswer(q.id));
      }
      return required.every(q => this.hasAnswer(q.id));
    },

    hasAnswer(questionId) {
      const v = this.answers[questionId];
      if (v === undefined || v === null) return false;
      if (Array.isArray(v)) return v.length > 0;
      return String(v).trim().length > 0;
    },

    progress() {
      const total = this.sections.flatMap(s => s.questions).length;
      const answered = Object.entries(this.answers).filter(([_, v]) => {
        if (v === undefined || v === null) return false;
        if (Array.isArray(v)) return v.length > 0;
        return String(v).trim().length > 0;
      }).length;
      return Math.round((answered / total) * 100);
    },

    nextSection() {
      if (this.currentSection < this.sections.length - 1) {
        this.currentSection++;
        this.scrollToTop();
      } else {
        this.startReview();
      }
    },

    prevSection() {
      if (this.currentSection > 0) {
        this.currentSection--;
        this.scrollToTop();
      }
    },

    goTo(idx) {
      this.currentSection = idx;
      this.showReview = false;
      this.scrollToTop();
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    startReview() {
      this.showReview = true;
      this.output.md = window.OPCBlueprintGenerator.generate(this.answers);
      const businessName = (this.answers.a3_subniche || this.answers.a1_name || 'Your Business').split(',')[0].trim();
      this.output.businessName = businessName;
      this.output.prompt = window.OPCBlueprintGenerator.generatePrompt(this.answers, businessName);
      this.scrollToTop();
    },

    // ===== Output actions =====

    downloadMd() {
      const filename = window.OPCBlueprintGenerator.filename(this.answers) + '_master_blueprint.md';
      this.downloadText(this.output.md, filename, 'text/markdown');
      this.toast('Master Blueprint downloaded as .md');
    },

    async downloadPdf() {
      const filename = window.OPCBlueprintGenerator.filename(this.answers) + '_master_blueprint.pdf';

      // Build a print-friendly HTML container
      const container = document.createElement('div');
      container.style.cssText = 'padding:40px;font-family:Inter,sans-serif;color:#000;background:#fff;max-width:780px;margin:0 auto;line-height:1.55;font-size:12pt;';
      container.innerHTML = marked.parse(this.output.md);
      // Style headings
      container.querySelectorAll('h1').forEach(el => el.style.cssText = 'font-family:Fraunces,Georgia,serif;font-size:24pt;margin:24px 0 16px;font-weight:600;');
      container.querySelectorAll('h2').forEach(el => el.style.cssText = 'font-family:Fraunces,Georgia,serif;font-size:18pt;margin:24px 0 12px;font-weight:600;border-bottom:1px solid #ccc;padding-bottom:6px;');
      container.querySelectorAll('h3').forEach(el => el.style.cssText = 'font-family:Fraunces,Georgia,serif;font-size:14pt;margin:18px 0 8px;font-weight:600;');
      container.querySelectorAll('table').forEach(el => el.style.cssText = 'border-collapse:collapse;width:100%;margin:12px 0;font-size:10pt;');
      container.querySelectorAll('th,td').forEach(el => el.style.cssText = 'border:1px solid #ccc;padding:6px 10px;text-align:left;');
      container.querySelectorAll('th').forEach(el => el.style.cssText += 'background:#f4f1eb;font-weight:600;');
      container.querySelectorAll('code').forEach(el => el.style.cssText = 'background:#f5f3ee;padding:1px 4px;border-radius:3px;font-size:0.9em;');
      container.querySelectorAll('pre').forEach(el => el.style.cssText = 'background:#f5f3ee;padding:12px;border-radius:4px;overflow-x:auto;font-size:9pt;line-height:1.4;');
      container.querySelectorAll('hr').forEach(el => el.style.cssText = 'border:none;border-top:1px solid #ddd;margin:24px 0;');

      const opt = {
        margin: [12, 12, 14, 12],
        filename: filename,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      this.toast('Generating PDF... (this can take 10-20 sec)');
      try {
        await html2pdf().set(opt).from(container).save();
        this.toast('PDF downloaded.');
      } catch (e) {
        this.toast('PDF generation failed: ' + e.message);
      }
    },

    copyPrompt() {
      navigator.clipboard.writeText(this.output.prompt).then(() => {
        this.toast('AI System Prompt copied. Paste into Claude Project / Custom GPT / Gemini Gem.');
      });
    },

    openClaude() {
      // Open Claude.ai with a starter — user pastes blueprint themselves
      const starterText = `I'm setting up my Strategic Co-Pilot project using the OPC Startup Framework. I'll attach my Master Blueprint as project knowledge. Once attached, please confirm you've loaded it and tell me which Layer I should focus on next.`;
      const url = 'https://claude.ai/new?q=' + encodeURIComponent(starterText);
      window.open(url, '_blank');
      this.toast('Claude.ai opened. Create a new Project, paste the prompt as instructions, and attach your downloaded blueprint.');
    },

    downloadAll() {
      this.downloadMd();
      setTimeout(() => this.copyPromptToFile(), 400);
    },

    copyPromptToFile() {
      const filename = window.OPCBlueprintGenerator.filename(this.answers) + '_ai_system_prompt.md';
      this.downloadText(this.output.prompt, filename, 'text/markdown');
    },

    // Helpers

    downloadText(text, filename, mime) {
      const blob = new Blob([text], { type: mime || 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },

    toast(message) {
      const existing = document.querySelector('.toast');
      if (existing) existing.remove();
      const t = document.createElement('div');
      t.className = 'toast';
      t.textContent = message;
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 3500);
    },

    resetAll() {
      if (!confirm('This will erase all your answers. Continue?')) return;
      localStorage.removeItem(STORAGE_KEY);
      this.answers = {};
      this.currentSection = 0;
      this.showReview = false;
      this.toast('Reset complete.');
      this.scrollToTop();
    },

    toggleCheckbox(qid, value) {
      if (!Array.isArray(this.answers[qid])) {
        this.answers[qid] = [];
      }
      const idx = this.answers[qid].indexOf(value);
      if (idx > -1) this.answers[qid].splice(idx, 1);
      else this.answers[qid].push(value);
    },

    isChecked(qid, value) {
      return Array.isArray(this.answers[qid]) && this.answers[qid].includes(value);
    }
  }));

  // ============= MARKDOWN RENDER COMPONENT =============
  Alpine.data('mdRender', (sourcePath) => ({
    rendered: '<p class="muted">Loading...</p>',
    headings: [],
    activeHeading: null,

    async init() {
      try {
        const res = await fetch(sourcePath);
        if (!res.ok) throw new Error('Failed to load: ' + sourcePath);
        const md = await res.text();
        this.rendered = marked.parse(md);
        await this.$nextTick();
        this.buildToc();
        this.observeHeadings();
      } catch (e) {
        this.rendered = '<p style="color:var(--red)">Error loading content: ' + e.message + '</p>';
      }
    },

    buildToc() {
      const container = this.$el.querySelector('.md-content');
      if (!container) return;
      const heads = container.querySelectorAll('h2, h3');
      this.headings = Array.from(heads).map((h, i) => {
        const id = 'h-' + i + '-' + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        h.id = id;
        return {
          id: id,
          text: h.textContent.replace(/^[\d.]+\s*/, ''),
          level: h.tagName === 'H2' ? 2 : 3
        };
      });
    },

    observeHeadings() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) this.activeHeading = e.target.id;
        });
      }, { rootMargin: '-100px 0px -70% 0px' });
      this.headings.forEach(h => {
        const el = document.getElementById(h.id);
        if (el) observer.observe(el);
      });
    }
  }));
});
