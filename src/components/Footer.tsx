import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-neutral-500">{personalInfo.title}</p>
        </div>

        <ul className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-neutral-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-neutral-600">
          © {year} {personalInfo.name}
        </p>
        <p className="font-mono text-xs text-neutral-600">
          Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
