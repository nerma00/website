export const BIRTHDAY: Date = new Date(2008, 10, 13);

export type SocialLabel = "github" | "telegram";

export type Social = {
  label: SocialLabel;
  href: string;
};

export const SOCIALS: readonly Social[] = [
  { label: "github", href: "https://github.com/nerma00" },
  { label: "telegram", href: "https://t.me/nerma00" },
];
