import Image from "next/image";
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
              className="card-hover relative bg-black"
            >
              <div className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 lg:max-w-[55%]">
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

                  <div className="mt-6 flex shrink-0 items-center gap-2">
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

                {project.imageSrc && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    className="group w-full overflow-hidden rounded-lg border border-neutral-800 lg:w-[42%]"
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt || `${project.title} preview`}
                      width={1200}
                      height={700}
                      className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
