import { personalInfo, skills } from "@/data/portfolio";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  const allSkills = skills.flatMap((g) => g.items);

  return (
    <section id="about" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <SectionHeader
          label="About"
          title="Engineering products end to end."
          description={personalInfo.bio}
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 lg:grid-cols-2">
          <div className="card-hover bg-black p-8 sm:p-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              Focus
            </p>
            <p className="text-lg leading-relaxed text-neutral-300">
              Full stack development with an emphasis on type safety, performance,
              and clean architecture.
            </p>
          </div>

          <div className="card-hover bg-black p-8 sm:p-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              Location
            </p>
            <p className="text-lg text-neutral-300">{personalInfo.location}</p>
            <p className="mt-4 text-sm text-neutral-500">
              Open to remote roles and freelance projects.
            </p>
          </div>

          <div className="card-hover col-span-full bg-black p-8 sm:p-10">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-neutral-800 px-3 py-1.5 font-mono text-xs text-neutral-400 transition-colors hover:border-neutral-600 hover:text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
