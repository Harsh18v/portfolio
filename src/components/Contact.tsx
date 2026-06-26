"use client";

import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import SectionHeader from "./ui/SectionHeader";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeader
              label="Contact"
              title="Let's build something."
              description="Have a project, role, or idea? Send a message — I typically respond within 24 hours."
            />

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-neutral-300"
            >
              {personalInfo.email}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <p className="mt-2 font-mono text-xs text-neutral-500">
              {personalInfo.location}
            </p>

            <div className="mt-8 flex items-center gap-1">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} link={link} />
              ))}
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              window.location.href = `mailto:harsh17v@gmail.com?subject=Portfolio — ${name}&body=${message}%0A%0AFrom: ${email}`;
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-neutral-800 bg-black px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-neutral-800 bg-black px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-md border border-neutral-800 bg-black px-4 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-600"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
