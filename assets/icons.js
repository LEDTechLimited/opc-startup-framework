// Apple-style minimal SVG icons for each Layer.
// Single-color (currentColor) — picks up gold from CSS.

window.OPC_ICONS = {

  // Layer 1 — Founder: a single dot radiating outward (the originator)
  1: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.18"/>
    <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.32"/>
    <circle cx="40" cy="40" r="11" fill="none" stroke="currentColor" stroke-width="1" opacity="0.55"/>
    <circle cx="40" cy="40" r="3.5" fill="currentColor"/>
  </svg>`,

  // Layer 2 — Vision: North Star above horizon
  2: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="6" y1="60" x2="74" y2="60" stroke="currentColor" stroke-width="1" opacity="0.35"/>
    <path d="M40 14 L42 30 L58 32 L42 34 L40 50 L38 34 L22 32 L38 30 Z" fill="currentColor"/>
    <line x1="40" y1="50" x2="40" y2="60" stroke="currentColor" stroke-width="0.75" opacity="0.4" stroke-dasharray="2 2"/>
  </svg>`,

  // Layer 3 — Pillars: 5 vertical columns on a base
  3: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="16" y1="20" x2="16" y2="60" stroke="currentColor" stroke-width="1.75"/>
    <line x1="28" y1="20" x2="28" y2="60" stroke="currentColor" stroke-width="1.75"/>
    <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" stroke-width="1.75"/>
    <line x1="52" y1="20" x2="52" y2="60" stroke="currentColor" stroke-width="1.75"/>
    <line x1="64" y1="20" x2="64" y2="60" stroke="currentColor" stroke-width="1.75"/>
    <line x1="10" y1="62" x2="70" y2="62" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  </svg>`,

  // Layer 4 — Engine (Golden Triangle): triangle with vertex circles
  4: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="40,14 12,62 68,62" fill="none" stroke="currentColor" stroke-width="1.25" opacity="0.6"/>
    <circle cx="40" cy="14" r="4" fill="currentColor"/>
    <circle cx="12" cy="62" r="4" fill="currentColor"/>
    <circle cx="68" cy="62" r="4" fill="currentColor"/>
  </svg>`,

  // Layer 5 — Operating: orbital loop with marker (continuous cadence)
  5: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" stroke-width="1.25" stroke-dasharray="4 4" opacity="0.7"/>
    <circle cx="40" cy="40" r="2.5" fill="currentColor" opacity="0.4"/>
    <circle cx="40" cy="12" r="4" fill="currentColor"/>
  </svg>`,

  // Layer 6 — Money: Value Equation (numerator over denominator)
  6: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="22" r="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <line x1="14" y1="40" x2="66" y2="40" stroke="currentColor" stroke-width="1.75"/>
    <circle cx="40" cy="58" r="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  </svg>`,

  // Layer 7 — Bridge: arc connecting two points (gap to cross)
  7: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 56 Q40 14, 66 56" fill="none" stroke="currentColor" stroke-width="1.25" stroke-dasharray="3 3" opacity="0.55"/>
    <circle cx="14" cy="56" r="4" fill="currentColor"/>
    <circle cx="66" cy="56" r="4" fill="currentColor"/>
  </svg>`,

  // Layer 8 — Roadmap: horizontal timeline with milestones
  8: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="8" y1="40" x2="72" y2="40" stroke="currentColor" stroke-width="1.25"/>
    <circle cx="16" cy="40" r="4" fill="currentColor"/>
    <circle cx="40" cy="40" r="4" fill="currentColor"/>
    <circle cx="64" cy="40" r="4" fill="currentColor"/>
  </svg>`
};
