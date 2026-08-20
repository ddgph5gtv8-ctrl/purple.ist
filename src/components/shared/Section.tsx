import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-[var(--spacing-16)] sm:py-[var(--spacing-20)] lg:py-[var(--spacing-24)]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
