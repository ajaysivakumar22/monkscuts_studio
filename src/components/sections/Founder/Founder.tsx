import { founder, type SkillTag } from "@/data/founder";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { MonkFace } from "@/components/brand/MonkFace";
import { Target, Layers, PlayCircle, AudioLines, Sparkles } from "lucide-react";

/** Map icon strings from founder data to Lucide icons */
function renderSkillIcon(iconName: string) {
  const iconProps = { className: "h-4 w-4 text-[var(--color-monk)]" };
  switch (iconName) {
    case "Target":
      return <Target {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    case "PlayCircle":
      return <PlayCircle {...iconProps} />;
    case "AudioLines":
      return <AudioLines {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export function Founder() {
  const topSkills = founder.skills.slice(0, 3);
  const bottomSkills = founder.skills.slice(3);

  return (
    <Section id="founder" className="bg-[var(--bg-founder)] relative overflow-hidden">
      
      {/* Subtle Warm Orange Radial Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_20%_40%,rgba(255,85,0,0.06)_0%,transparent_60%)] opacity-80"
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-stretch">
          
          {/* Left Column: Editorial Founder Portrait Stage */}
          <Reveal className="h-full">
            <div className="relative flex h-full min-h-[580px] flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[#0c0c10] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              
              {/* Background Ambient Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,85,0,0.12)_0%,transparent_65%)]"
              />

              {/* Vertical Oversized Outlined "FOUNDER" Typography */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-8 font-mono text-6xl sm:text-7xl font-bold uppercase tracking-[0.25em] text-transparent opacity-15 select-none [writing-mode:vertical-lr] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]"
              >
                FOUNDER
              </div>

              {/* Top Right Section Number Tag */}
              <div className="flex justify-end relative z-10">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-monk)]">
                  [01]
                </span>
              </div>

              {/* Center / Media Area */}
              <div className="relative z-10 my-auto py-12 pl-12 sm:pl-16">
                {founder.imageSrc ? (
                  /* Real Founder Photograph Container when provided */
                  <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-white/10 shadow-2xl">
                    <img
                      src={founder.imageSrc}
                      alt="Studio Founder & Creative Director"
                      className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                ) : (
                  /* Editorial Placeholder Architecture */
                  <div className="space-y-6">
                    <MonkFace
                      showCut={false}
                      outerColor="var(--color-monk-face)"
                      innerColor="#0c0c10"
                      className="h-14 w-14 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="flex items-start gap-3 border-l-2 border-[var(--color-monk)] pl-4">
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                          PORTRAIT PLACEHOLDER
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-dim)]">
                          READY FOR FOUNDER IMAGERY
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lower Right Radar/Crosshair Graphic Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 bottom-28 hidden sm:flex h-24 w-24 items-center justify-center rounded-full border border-white/10 opacity-60"
              >
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-monk)] shadow-[0_0_10px_rgba(255,85,0,0.8)] animate-ping" />
                  <span className="absolute h-2 w-2 rounded-full bg-[var(--color-monk)]" />
                </div>
                <span className="absolute h-full w-[1px] bg-white/10" />
                <span className="absolute w-full h-[1px] bg-white/10" />
              </div>

              {/* Bottom 3-Column Metadata Pillars Bar */}
              <div className="relative z-10 border-t border-white/10 pt-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {founder.pillars.map((pillar) => (
                    <div key={pillar.title} className="space-y-1.5">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-monk)]">
                        {pillar.title}
                      </p>
                      <p className="text-[11px] leading-relaxed text-[var(--color-dim)] font-mono">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Founder Information & Expertise System */}
          <Reveal delay={0.1} className="flex flex-col justify-between py-2">
            
            {/* Top Text Header & Bio */}
            <div className="space-y-6">
              <Eyebrow>{founder.eyebrow}</Eyebrow>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.94] tracking-tight text-[var(--color-text)]">
                {founder.statementLine1}
                <br />
                <span className="text-[var(--color-monk)] drop-shadow-[0_0_20px_rgba(255,85,0,0.3)]">
                  {founder.statementLine2}
                </span>
              </h2>

              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)] pt-2">
                {founder.name}
              </p>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                {founder.bio}
              </p>
            </div>

            {/* Structured Capability & Expertise System */}
            <div className="mt-8 space-y-3">
              {/* Row 1: 3 Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {topSkills.map((skill: SkillTag) => (
                  <div
                    key={skill.label}
                    className="group relative flex items-center gap-3 rounded-lg border border-white/10 bg-[#121218] p-3.5 transition-all duration-300 hover:border-[var(--color-monk)]/50 hover:bg-[#161622] hover:-translate-y-0.5 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#1a1a24] text-[var(--color-monk)] transition-colors duration-300 group-hover:bg-[var(--color-monk)]/20">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bottomSkills.map((skill: SkillTag) => (
                  <div
                    key={skill.label}
                    className="group relative flex items-center gap-3 rounded-lg border border-white/10 bg-[#121218] p-3.5 transition-all duration-300 hover:border-[var(--color-monk)]/50 hover:bg-[#161622] hover:-translate-y-0.5 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#1a1a24] text-[var(--color-monk)] transition-colors duration-300 group-hover:bg-[var(--color-monk)]/20">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GET IN TOUCH Editorial CTA Line */}
            <div className="mt-10 flex items-center gap-4 pt-2">
              <a
                href={founder.profileHref}
                className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)] hover:text-[var(--color-monk)] transition-colors"
              >
                <span>{founder.profileLabel}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-[var(--color-monk)]">&rarr;</span>
              </a>
              <span className="h-[2px] w-28 rounded-full bg-[var(--color-monk)] shadow-[0_0_10px_rgba(255,85,0,0.6)]" />
            </div>

          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
