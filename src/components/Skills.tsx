import { skills } from "@/data/portfolio";
import SectionHeader from "./ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <SectionHeader
          label="Capabilities"
          title="What I work with."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className=" group bg-black p-8"
            >
              <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between text-sm text-neutral-300"
                  >
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
