import { experience } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <SectionHeader
          label="Experience"
          title="Professional Experience."
        />

        <div className="divide-y divide-neutral-800 rounded-lg border border-neutral-800">
          {experience.map((item) => (
            <div
              key={item.role}
              className="card-hover flex flex-col gap-4 p-8 sm:flex-row sm:items-start sm:justify-between sm:p-10"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-neutral-400">{item.company}</p>

                <h4 className="mt-6 font-medium text-white">Selected Works</h4>
                <p className="mt-4 max-w-lg text-md leading-relaxed text-neutral-300">
                  {item.works.client} :
                </p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-400">
                  {item.works.description}
                </p>  
                
              </div>
              <p className="shrink-0 font-mono text-xs text-neutral-300">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
