import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import { GitHubLinkIcon } from "./SocialIcon";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <SectionHeader
          label="Work"
          title="Selected projects."
          description="A few things I've built recently."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative bg-black"
            >
              <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-start sm:justify-between sm:p-10">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="rounded border border-neutral-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="max-w-lg text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.githubUrl}
                    aria-label={`${project.title} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-600 hover:text-white"
                  >
                    <GitHubLinkIcon size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label={`${project.title} live site`}
                    className="flex h-9 items-center gap-1.5 rounded-md border border-neutral-800 px-3 text-xs text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
                  >
                    Visit
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
