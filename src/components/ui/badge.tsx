import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[var(--letter-spacing-wide)] transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)]',
        primary:
          'border-[color:var(--color-primary)]/40 bg-[color:var(--color-primary)]/15 text-[color:var(--color-accent)]',
        secondary:
          'border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] text-[color:var(--color-muted)]',
        accent:
          'border-[color:var(--color-accent)]/35 bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
