import type { Social } from "@/lib/types";

type SocialsProps = {
  socials: readonly Social[];
  className?: string;
};

export function Socials({
  socials,
  className = "flex items-start gap-3",
}: SocialsProps) {
  return (
    <div className={className}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="transition-colors hover:text-foreground"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}
