/**
 * Curriculum Radar & Chapter Registry
 * Defines the 8-stage layout roadmap and provides dynamic module registration.
 */

export const ROADMAP = [
  {
    id: '01',
    slug: '01-cascade-specificity',
    title: 'Cascade & Specificity',
    status: 'queued',
    description: 'Rule resolution order, @layer, specificity calculation, and avoiding !important.',
  },
  {
    id: '02',
    slug: '02-box-model',
    title: 'Box Model',
    status: 'active',
    description: 'content, padding, border, margin, box-sizing, and vertical margin collapsing.',
  },
  {
    id: '03',
    slug: '03-sizing-units',
    title: 'Sizing Units',
    status: 'queued',
    description: 'Intrinsic vs extrinsic sizing, px, rem, %, vw, vh, fr, and fluid math (clamp, min, max).',
  },
  {
    id: '04',
    slug: '04-layout',
    title: 'Layout Flow',
    status: 'queued',
    description: 'Normal flow, block vs inline, formatting contexts, and display: flow-root.',
  },
  {
    id: '05',
    slug: '05-flexbox',
    title: 'Flexbox',
    status: 'queued',
    description: '1D layout, main vs cross axes, alignment, flex-grow/shrink/basis, and gap.',
  },
  {
    id: '06',
    slug: '06-grid',
    title: 'CSS Grid',
    status: 'queued',
    description: '2D layout, tracks, fr units, template areas, auto-fit/minmax, and subgrid.',
  },
  {
    id: '07',
    slug: '07-responsive-design',
    title: 'Responsive Design',
    status: 'queued',
    description: 'Fluid typography, media query breakpoints, responsive media, and layout shifts.',
  },
  {
    id: '08',
    slug: '08-container-queries',
    title: 'Container Queries',
    status: 'queued',
    description: 'Modular component-level responsiveness using @container and container units.',
  },
];

// Map of landed modules: slug -> module implementation
const registeredChapters = new Map();

/**
 * Register a completed on-demand chapter module into the catalog.
 */
export function registerChapter(slug, chapterModule) {
  registeredChapters.set(slug, chapterModule);
}

/**
 * Get all 8 roadmap stages.
 */
export function getRoadmap() {
  return ROADMAP;
}

/**
 * Get list of currently landed/active chapter modules.
 */
export function getRegisteredChapters() {
  return Array.from(registeredChapters.values());
}

/**
 * Get a specific registered chapter by slug.
 */
export function getChapter(slug) {
  return registeredChapters.get(slug);
}
