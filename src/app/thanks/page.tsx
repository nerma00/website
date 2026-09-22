import { TextLink } from "@/components/ui/link";

type Reference = {
  label: string;
  href: string;
  githubUrl: string;
};

const REFERENCES: readonly Reference[] = [
  {
    label: "moli",
    href: "https://moli.codes",
    githubUrl: "https://github.com/lostf1sh",
  },
  {
    label: "cnrad",
    href: "https://cnrad.dev",
    githubUrl: "https://github.com/cnrad",
  },
  {
    label: "looskie",
    href: "https://looskie.com",
    githubUrl: "https://github.com/looskie",
  },
  {
    label: "alistair",
    href: "https://alistair.sh",
    githubUrl: "https://github.com/alii",
  },
];

export default function Thanks() {
  return (
    <div className="text-sm leading-tight text-foreground">
      <h1 className="text-2xl font-semibold leading-tight text-accent">
        Thanks
      </h1>
      <p className="mt-0.5">
        When creating the design, I used existing websites created by others:
      </p>
      <ul className="mt-4 space-y-1">
        {REFERENCES.map((ref) => (
          <li key={ref.label}>
            <TextLink href={ref.href}>{ref.label}</TextLink>
            {" / "}
            <TextLink href={ref.githubUrl}>github</TextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
