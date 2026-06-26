import { experience } from "@/data/portfolio";
import SectionHeader from "./ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <SectionHeader
          label="Experience"
          title="Where I've been."
        />

        <div className="divide-y divide-neutral-800 rounded-lg border border-neutral-800">
          {experience.map((item) => (
            <div
              key={item.role}
              className="card-hover flex flex-col gap-4 p-8 sm:flex-row sm:items-start sm:justify-between sm:p-10"
            >
              <div className="flex-1">
                <h3 className="font-medium text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-neutral-400">{item.company}</p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs text-neutral-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
