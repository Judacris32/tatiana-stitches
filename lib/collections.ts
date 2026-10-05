import type { Category, Stage } from './works';

export const chapters: { id: Exclude<Category, 'studio'>; label: string; unit: string; note: string }[] = [
  {
    id: 'editorial',
    label: 'Campaigns',
    unit: 'frames',
    note: 'Our studio shoots. Kente, Ankara and bold prints styled the way we would wear them ourselves.',
  },
  {
    id: 'heritage',
    label: 'Heritage & Ceremony',
    unit: 'looks',
    note: 'Isiagu, agbada, coral beads and the red cap. Made for weddings, title takings and family days.',
  },
  {
    id: 'senator',
    label: 'Senator & Kaftan',
    unit: 'looks',
    note: 'The everyday classic. Clean lines, sharp collars and trousers that sit right.',
  },
  {
    id: 'evening',
    label: 'Suits & After Dark',
    unit: 'looks',
    note: 'Tailored suits, blazers and black silk for dinners, parties and nights that run late.',
  },
  {
    id: 'pieces',
    label: 'On the Mannequin',
    unit: 'pieces',
    note: 'Finished pieces straight off the table, shown before they go home with their owners.',
  },
  {
    id: 'details',
    label: 'Caps & Details',
    unit: 'close ups',
    note: 'Look closer. Hand embroidery, woven caps, labels and the stitching most people never notice.',
  },
];

export const stages: { id: Stage; label: string; note: string }[] = [
  { id: 'measure', label: 'Measuring', note: 'Every outfit starts with a tape and your real numbers, taken in the studio or at your home.' },
  { id: 'cut', label: 'Marking and cutting', note: 'Patterns are drawn in chalk on the fabric by hand, checked twice, then cut.' },
  { id: 'sew', label: 'Sewing', note: 'Our tailors put each piece together on the machine, seam by seam.' },
  { id: 'fit', label: 'Fitting', note: 'You try it on. We pin, adjust and press until it sits right.' },
  { id: 'ready', label: 'Ready to go', note: 'Bagged, handed over and worn out of the door.' },
];
