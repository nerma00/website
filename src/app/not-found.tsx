import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-sm leading-tight text-foreground">
      <h1 className="text-2xl font-semibold leading-tight text-accent">
        Not Found
      </h1>
      <p className="mt-0.5">this page doesn’t exist</p>
      <Link
        href="/"
        className="mt-4 inline-block text-foreground underline decoration-line decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-accent hover:text-accent"
      >
        go home
      </Link>
    </div>
  );
}
