// Real photographs for each Layer — sourced from Unsplash (free embedded use).
// To swap: replace the photo ID in the _u(...) call.

const _u = (id, alt) =>
  `<img src="https://images.unsplash.com/${id}?w=1200&h=500&fit=crop&q=80&auto=format"
        srcset="https://images.unsplash.com/${id}?w=600&h=250&fit=crop&q=70&auto=format 600w,
                https://images.unsplash.com/${id}?w=1200&h=500&fit=crop&q=80&auto=format 1200w"
        sizes="(max-width: 600px) 100vw, 600px"
        alt="${alt}"
        loading="lazy">`;

window.OPC_LAYER_IMAGES = {
  // Layer 1 — Founder: pure object-only desk (laptop + coffee + notebook, no people)
  1: _u('photo-1496181133206-80ce9b88a853', 'Solo workspace'),

  // Layer 2 — Vision: distant horizon / future clarity
  2: _u('photo-1506905925346-21bda4d32df4', 'Mountain landscape — future view'),

  // Layer 3 — Target Customers: audience / crowd
  3: _u('photo-1505373877841-8d25f7d46678', 'Concert crowd — your audience'),

  // Layer 4 — Products / Service: product photography
  4: _u('photo-1505740420928-5e560c06d30e', 'Product detail'),

  // Layer 5 — Operating: automation / circuit (OPC = solo + AI, no team)
  5: _u('photo-1518770660439-4636190af475', 'Automation / OPC operations'),

  // Layer 6 — Money: finance / value flow
  6: _u('photo-1579621970795-87facc2f976d', 'Finance and value'),

  // Layer 7 — Research: data / analytics / verify
  7: _u('photo-1551288049-bebda4e38f71', 'Research and analytics'),

  // Layer 8 — Roadmap: mindmap / planning visual
  8: _u('photo-1606857521015-7f9fcf423740', 'Mindmap planning')
};
