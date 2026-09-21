import Link from "next/link";
import { Socials } from "@/components/socials";
import { SOCIALS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary pt-6 text-sm text-secondary flex justify-between">
      <div>
        <span>© 2026 nerma</span>
        <p className="mt-3 text-xs text-muted/70">built with next 16</p>
      </div>
      <div>
        <Socials
          socials={SOCIALS}
          className="flex justify-end items-start gap-3"
        />
        <div className="mt-3 text-xs text-muted/70 flex justify-end items-start gap-3">
          <Link href="/" className="transition-colors hover:text-foreground">
            home
          </Link>
          <Link
            href="/thanks"
            className="transition-colors hover:text-foreground"
          >
            thanks
          </Link>
        </div>
      </div>
    </footer>
  );
}
