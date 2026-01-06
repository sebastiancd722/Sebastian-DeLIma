export type WorkTag = 'Sections' | 'Cards' | 'Systems' | 'Experiments';

export type WorkItem = {
  id: string;
  title: string;
  date: string;
  tags: WorkTag[];
  rating: number;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  tools?: string[];
  notes?: string[];
};

export const workItems: WorkItem[] = [
  {
    id: 'profile-insight-cards',
    title: 'Profile Insight Cards',
    date: '2024-05-02',
    tags: ['Cards'],
    rating: 9,
    thumbnail: '/placeholders/profile-insight-cards.svg',
    images: ['/placeholders/profile-insight-cards.svg', '/placeholders/profile-insight-cards-alt.svg'],
    shortDescription: 'Data-rich cards balancing hierarchy, micro-interactions, and dense stats for quick scanning.',
    tools: ['Figma'],
    notes: ['Button microcopy stays under 16 characters', 'Spacing locks to 8px grid'],
  },
  {
    id: 'modular-billing-system',
    title: 'Modular Billing System',
    date: '2024-04-18',
    tags: ['Systems'],
    rating: 10,
    thumbnail: '/placeholders/modular-billing-system.svg',
    images: ['/placeholders/modular-billing-system.svg'],
    shortDescription: 'Token-driven billing surfaces with audit-ready tables, summaries, and state-aware empty cases.',
    tools: ['Figma', 'Zeroheight'],
    notes: ['Color tokens map to status-only usage', 'Table density adapts to viewport width'],
  },
  {
    id: 'feedback-loop-cta',
    title: 'Feedback Loop CTA Strip',
    date: '2024-03-30',
    tags: ['Sections'],
    rating: 8,
    thumbnail: '/placeholders/feedback-loop-cta.svg',
    images: ['/placeholders/feedback-loop-cta.svg'],
    shortDescription: 'Concise CTA band with credibility proof-points and progression arrows for product feedback loops.',
    tools: ['Figma'],
  },
  {
    id: 'workspace-switcher',
    title: 'Workspace Switcher Cards',
    date: '2024-03-12',
    tags: ['Cards', 'Experiments'],
    rating: 8,
    thumbnail: '/placeholders/workspace-switcher.svg',
    images: ['/placeholders/workspace-switcher.svg'],
    shortDescription: 'Card-based workspace selection with keyboard-friendly focus states and compact metadata.',
    tools: ['Figma'],
  },
  {
    id: 'observability-dashboard',
    title: 'Observability Overview',
    date: '2024-02-28',
    tags: ['Sections', 'Systems'],
    rating: 9,
    thumbnail: '/placeholders/observability-dashboard.svg',
    images: ['/placeholders/observability-dashboard.svg'],
    shortDescription: 'Grid of health metrics, status badges, and escalations for operations teams.',
    tools: ['Figma'],
    notes: ['Use semantic coloring only for alerts', 'Charts align to 12-column grid'],
  },
  {
    id: 'activation-journey',
    title: 'Activation Journey Section',
    date: '2024-02-10',
    tags: ['Sections'],
    rating: 7,
    thumbnail: '/placeholders/activation-journey.svg',
    images: ['/placeholders/activation-journey.svg'],
    shortDescription: 'Side-by-side journey visualization and KPI stack for onboarding cohorts.',
  },
  {
    id: 'plan-comparison-cards',
    title: 'Plan Comparison Cards',
    date: '2024-01-22',
    tags: ['Cards'],
    rating: 8,
    thumbnail: '/placeholders/plan-comparison-cards.svg',
    images: ['/placeholders/plan-comparison-cards.svg'],
    shortDescription: 'Pricing comparison with toggles, feature tiers, and sticky CTA alignment.',
    notes: ['CTA always aligned bottom', 'Toggle labels explicit, no abbreviations'],
  },
  {
    id: 'pattern-library-shell',
    title: 'Pattern Library Shell',
    date: '2023-12-05',
    tags: ['Systems'],
    rating: 9,
    thumbnail: '/placeholders/pattern-library-shell.svg',
    images: ['/placeholders/pattern-library-shell.svg'],
    shortDescription: 'Documentation shell with navigation rails, live component previews, and status chips.',
    tools: ['Figma', 'Notion'],
  },
  {
    id: 'controls-experiment',
    title: 'Controls Microinteraction Lab',
    date: '2023-11-16',
    tags: ['Experiments'],
    rating: 7,
    thumbnail: '/placeholders/controls-experiment.svg',
    images: ['/placeholders/controls-experiment.svg'],
    shortDescription: 'Toggle, checkbox, and input experiments exploring feedback timings and shadows.',
  },
  {
    id: 'signal-empty-states',
    title: 'Signal Empty States',
    date: '2023-10-01',
    tags: ['Sections'],
    rating: 8,
    thumbnail: '/placeholders/signal-empty-states.svg',
    images: ['/placeholders/signal-empty-states.svg'],
    shortDescription: 'Empty state collection showing error, loading, and success scaffolds for admin tools.',
    notes: ['Icons never exceed 64px', 'Keep copy to one sentence'],
  },
];
