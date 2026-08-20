import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-semibold tracking-[var(--letter-spacing-tight)]', {
  variants: {
    level: {
      h1: 'text-4xl sm:text-5xl lg:text-6xl leading-[var(--line-height-tight)]',
      h2: 'text-3xl sm:text-4xl leading-[var(--line-height-snug)]',
      h3: 'text-2xl sm:text-3xl leading-[var(--line-height-snug)]',
      h4: 'text-xl sm:text-2xl leading-[var(--line-height-normal)]',
      h5: 'text-lg sm:text-xl leading-[var(--line-height-normal)]',
      h6: 'text-base sm:text-lg leading-[var(--line-height-relaxed)]',
    },
    tone: {
      default: 'text-[color:var(--color-text)]',
      muted: 'text-[color:var(--color-muted)]',
      accent: 'text-[color:var(--color-accent)]',
    },
  },
  defaultVariants: {
    level: 'h2',
    tone: 'default',
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
  };

function Heading({ as: Component = 'h2', level, tone, className, children, ...props }: HeadingProps) {
  return (
    <Component className={cn(headingVariants({ level, tone, className }))} {...props}>
      {children}
    </Component>
  );
}

export { Heading, headingVariants };
