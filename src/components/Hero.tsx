import { ArrowRight } from "lucide-react";
import { personalInfo, socialLinks, stats } from "@/data/portfolio";
import GridBackground from "./ui/GridBackground";
import Button from "./ui/Button";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      <GridBackground />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <p className="animate-fade-up mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
          {personalInfo.title}
        </p>

        <h1 className="animate-fade-up animation-delay-100 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
          {personalInfo.tagline}
        </p>

        <p className="animate-fade-up animation-delay-200 mt-3 max-w-xl text-sm text-neutral-500">
          MERN · TypeScript · Next.js
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary">
            View work
            <ArrowRight size={14} className="ml-2" />
          </Button>
          <Button href={personalInfo.resumeUrl} target="_blank" variant="secondary">
            Resume
          </Button>
        </div>

        <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 sm:max-w-md">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black px-4 py-5 text-center sm:px-6"
            >
              <p className="font-mono text-lg font-medium text-white sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up animation-delay-400 mt-10 flex items-center gap-1">
          {socialLinks.map((link) => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
