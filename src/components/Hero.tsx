import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import GridBackground from "@/components/ui/GridBackground";
import Button from "@/components/ui/Button";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-neutral-800 lg:flex-row lg:items-center">
      <GridBackground />

      <div className="relative w-full px-6 py-12 sm:px-8 sm:py-16 lg:w-1/2 lg:pb-20 lg:pt-20">
        <p className="animate-fade-up mb-6 font-mono text-xs uppercase tracking-wide text-neutral-400 sm:text-sm">
          {personalInfo.title}
        </p>

        <div className="flex items-center gap-4 lg:gap-0">
          <div className="flex lg:hidden shrink-0">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              width={140}
              height={140}
              quality={100}
              priority
              className="h-28 w-28 object-cover rounded-full border border-neutral-400"
            />
          </div>
          <h1 className="animate-fade-up animation-delay-100 text-3xl font-semibold leading-[1.08] tracking-tighter sm:text-4xl lg:text-6xl">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
        </div>

        <p className="animate-fade-up animation-delay-200 mt-4 text-base leading-relaxed text-neutral-400 sm:mt-6 sm:text-lg">
          {personalInfo.tagline}
        </p>

        <div className='mt-8 mb-8 flex items-center gap-2 animate-fade-up animation-delay-100 sm:mt-10 sm:mb-10'>
          <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse '></div>
          <span className='text-xs text-neutral-400 tracking-widest sm:text-sm'>
            Available for Full-Time Roles
          </span>
        </div>

        <div className="animate-fade-up animation-delay-300 flex flex-wrap items-center gap-3">
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

      <div className="hidden w-full py-8 flex-col items-center justify-center lg:flex lg:w-1/2 lg:pb-20 lg:pt-20">
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          width={280}
          height={280}
          priority
          quality={100}
          className="h-80 w-80 object-cover rounded-full border border-neutral-400"
          style={{ objectPosition: "center 20%" }}
        />
      </div>
    </section>
  );
}
