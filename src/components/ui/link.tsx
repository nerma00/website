import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-foreground underline decoration-line decoration-1 underline-offset-4 transition-colors duration-300 hover:decoration-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
