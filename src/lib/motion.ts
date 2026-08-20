/** Card hover: scale + 2 px lift, 230 ms ease-out cubic-bezier. */
export const cardHover = {
  whileHover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.23, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

/** Standard section-header fade-up reveal (use once, viewport-triggered). */
export const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.55, ease: 'easeOut' },
} as const;

/** Staggered grid/list item reveal. Pass the item index for the delay. */
export function staggerReveal(index: number) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.45, delay: index * 0.07, ease: 'easeOut' },
  } as const;
}
