// OPC Startup Framework — Lean Questionnaire
// `guide` field shows persistent category structure for multi-info textareas.
// `placeholder` shows example that disappears when user types.

window.OPC_QUESTIONS = {
  sections: [

    {
      id: 'A',
      layer: 1,
      title: 'Founder',
      subtitle: 'Who you are.',
      questions: [
        { id: 'a1_name', label: 'Your name', type: 'text', required: true, placeholder: 'e.g., John Doe' },
        { id: 'a3_subniche', label: 'What\'s your business?', type: 'textarea', rows: 2, required: true, placeholder: 'e.g., Wireless LED costume systems for live performance' },
        { id: 'a5_hours', label: 'How many hours you work per week?', type: 'number', required: true, placeholder: 'e.g., 40' },
        {
          id: 'a2_stage', label: 'Your stage', type: 'radio', required: true,
          options: ['Idea / pre-revenue', 'Early ($0-$100k/yr)', 'Growing ($100k-$1M/yr)']
        }
      ]
    },

    {
      id: 'B',
      layer: 2,
      title: 'Vision',
      subtitle: 'The game you\'re playing.',
      questions: [
        { id: 'b1_vision', label: 'Your end picture', type: 'textarea', rows: 2, required: true, placeholder: 'e.g., Become the best Mobile stage LED tech.' },
        { id: 'b3_pains', label: 'Top 3 problems in your industry', type: 'textarea', rows: 5, required: true, guide: 'Problem 1 · Problem 2 · Problem 3', placeholder: 'e.g.,\n1. Software is hard to learn\n2. Hardware breaks under stress\n3. Old systems don\'t talk to modern lighting consoles' },
        { id: 'b4_unfair', label: 'What\'s your biggest advantage? What you have, others don\'t.', type: 'textarea', rows: 3, required: true, placeholder: 'e.g., 10 years experience on Light dance show industry by using your system.' }
      ]
    },

    {
      id: 'C',
      layer: 3,
      title: 'Target Customers',
      subtitle: 'Who you serve.',
      questions: [
        { id: 'c1_ecosystem', label: 'Your full picture system', type: 'textarea', rows: 3, required: true, guide: 'Component 1 · Component 2 · Component 3', placeholder: 'e.g., Software + Hardware + Community\nor: Instagram + Website + Email list' },
        { id: 'c2_tiers', label: 'Main target audience', type: 'textarea', rows: 4, required: true, guide: 'Location · Age · Gender · Interest', placeholder: 'e.g.,\nLocation: Hong Kong + Asia\nAge: 25-45\nGender: all\nInterest: live performance, K-pop, theme park entertainment' },
        { id: 'c3_promise', label: 'What you promise customers', type: 'textarea', rows: 2, required: true, placeholder: 'e.g., We compressed 10 years of staging into the system, so you get pro-grade results without 10 years of practice.' },
        { id: 'c4_motion', label: 'How customers find you & buy', type: 'textarea', rows: 2, required: true, guide: 'Find · Buy', placeholder: 'e.g., Find via YouTube tutorials + Instagram. Buy via Email & WhatsApp.' },
        { id: 'c5_proofs', label: '5 advantages you have', type: 'textarea', rows: 7, required: true, guide: 'Clients · Experience · Service · Technology · Reliability', placeholder: 'e.g.,\nClients: Disneyland HK, K-pop world tours\nExperience: 10 years on tour, 47 shows delivered\nService: 24h response, dedicated POC\nTechnology: 25ms latency, supports DMX/sACN/Art-Net\nReliability: 99.2% uptime across 200+ deployments' }
      ]
    },

    {
      id: 'D',
      layer: 4,
      title: 'Products / Service',
      subtitle: 'What you offer.',
      questions: [
        { id: 'd1_core', label: 'Core value of your products or service', type: 'text', required: true, placeholder: 'e.g., Reliability + Innovation' },
        { id: 'd2_form', label: 'Main products or service features', type: 'textarea', rows: 4, required: true, guide: 'Hardware · Software · Service', placeholder: 'e.g.,\nHardware: idiot-proof, plug-and-play, no manual needed\nSoftware: Apple-style simplicity, ≤7 nav items\nService: 24h response, dedicated POC' },
        { id: 'd3_needs', label: 'Top 3 things customers need', type: 'textarea', rows: 3, required: true, guide: 'Technical · Experiential · Customization', placeholder: 'e.g.,\n1. Saving their time\n2. Solving their technical problems\n3. Customization for their use case' }
      ]
    },

    {
      id: 'E',
      layer: 5,
      title: 'Operating',
      subtitle: 'How you run.',
      questions: [
        {
          id: 'e4_base_type', label: 'Type of your business', type: 'radio', required: true,
          options: ['B2B (selling to businesses)', 'B2C (selling to consumers)', 'Hybrid']
        },
        {
          id: 'e_where_buy', label: 'Where do customers buy?', type: 'radio', required: true,
          options: ['Online store', 'Local / physical store', 'Hybrid (online + local)']
        },
        {
          id: 'e_departments', label: 'Departments you want', type: 'textarea', rows: 3,
          guide: 'Delivery · Admin · Customer service · Marketing',
          placeholder: 'e.g., delivery, admin, customer service, marketing'
        }
      ]
    },

    {
      id: 'F',
      layer: 6,
      title: 'Money',
      subtitle: 'What you sell, how you scale.',
      questions: [
        { id: 'f1_starving', label: 'Why are customers willing to pay?', type: 'textarea', rows: 4, required: true, placeholder: 'e.g., Our product is unique — solves the pain point of unreliable wireless systems. Competitors charge 3x for less reliable solutions.' },
        { id: 'f2_dream', label: 'What does the customer get after using your products or service?', type: 'textarea', rows: 3, required: true, placeholder: 'e.g., No more concern about technical issues. They run flawless shows that wow audiences without staying up till 3am debugging.' },
        {
          id: 'f4_pricing', label: 'How do you charge?', type: 'radio', required: true,
          options: ['One-time', 'Subscription', 'Project-based', 'Hybrid']
        },
        { id: 'f4_pricing_details', label: 'Specifically, how?', type: 'textarea', rows: 2, placeholder: 'e.g., $5k flat per project + $500/month maintenance. Volume discount for 10+ units.' }
      ]
    },

    {
      id: 'G',
      layer: 7,
      title: 'Research',
      subtitle: 'To prove your idea.',
      questions: [
        { id: 'g_pending', label: 'What you need to verify first', type: 'textarea', rows: 5, required: true, guide: 'Audience size · Competitors · Pain point search data', placeholder: 'e.g.,\n1. How big is your target audience?\n2. Any existing competitor in this niche?\n3. Search data on your customer pain points' }
      ]
    },

    {
      id: 'H',
      layer: 8,
      title: 'Roadmap',
      subtitle: 'Next 12 months.',
      questions: [
        { id: 'h1_12mo', label: 'Target income after this year', type: 'text', placeholder: 'e.g., $30k/mo' },
        { id: 'h2_bottleneck', label: 'What\'s stuck right now?', type: 'textarea', rows: 3, required: true, placeholder: 'e.g., No clients / no direction / no time / lead generation slow.' },
        { id: 'h3_priorities', label: 'Top priorities next 3 months', type: 'textarea', rows: 5, required: true, guide: 'Priority 1 · Priority 2 · Priority 3', placeholder: 'e.g.,\n1. Automate my existing workflow with AI\n2. Build my website\n3. Reach out to 50 potential customers' }
      ]
    }

  ]
};

window.OPC_QUESTIONS_FLAT = window.OPC_QUESTIONS.sections.flatMap(s => s.questions);
