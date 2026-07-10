import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import GridBackground from "./ui/GridBackground";
import Button from "./ui/Button";


export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      <GridBackground />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pb-32 sm:pt-28">
        <p className="animate-fade-up mb-6 font-mono text-sm uppercase tracking-wide text-neutral-400">
          {personalInfo.title}
        </p>

        <h1 className="animate-fade-up animation-delay-100 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tighter sm:text-6xl lg:text-7xl">
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
          {personalInfo.tagline}
        </p>

        <div className='mt-10 mb-10  flex items-center gap-2 animate-fade-up animation-delay-100'>
          <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse '></div>
          <span className='text-sm text-neutral-400 tracking-widest'>
            Available for Full-Time Roles
          </span>
        </div>


        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary">
            View Projects
            <ArrowRight size={14} className="ml-2" />
          </Button>
          <Button href={personalInfo.resumeUrl} target="_blank" variant="secondary">
            Resume
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>


      </div>
    </section>
  );
}
