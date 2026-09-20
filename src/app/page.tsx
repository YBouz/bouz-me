import { ArrowUpRight, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { LocalTime } from "@/components/local-time";

const VENTURE_FACTS = [
  { label: "Established", value: "2016" },
  { label: "Regulation", value: "FSC" },
  { label: "Instruments", value: "100+" },
  { label: "Execution", value: "A-Book STP" },
];

const LINKS = [
  { label: "Email", href: "mailto:youssef@bouz.me", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ybouz/", icon: LinkedInIcon },
  { label: "X", href: "https://x.com/YBooouz", icon: XIcon },
  { label: "GitHub", href: "https://github.com/YBouz", icon: GitHubIcon },
];

const LABEL =
  "font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground";

export default function Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6 py-10 sm:px-8 sm:py-12">
        {/* Status line */}
        <header className="enter flex items-center justify-between gap-4 border-b border-border pb-4">
          <p className={LABEL}>
            <span className="sm:hidden">Dubai, UAE</span>
            <span className="hidden sm:inline">
              Dubai &middot; United Arab Emirates
            </span>
          </p>
          <p
            className={LABEL + " whitespace-nowrap"}
            aria-label="Local time in Dubai"
          >
            <LocalTime />
          </p>
        </header>

        {/* Identity */}
        <section
          className="enter pt-12 sm:pt-16"
          style={{ animationDelay: "60ms" }}
        >
          <p className={LABEL}>Founder &amp; Chief Executive</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Youssef Bouz
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground sm:text-xl">
            I build and run{" "}
            <span className="text-foreground">GCC Brokers</span> — a multi-asset
            brokerage, and the infrastructure underneath it.
          </p>
        </section>

        {/* Background */}
        <section
          className="enter mt-10 flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-12 sm:text-base"
          style={{ animationDelay: "120ms" }}
        >
          <p>
            Computer science at the American University of Sharjah, then an MBA
            in global business. I came up through engineering and never really
            left it — I still write the software the brokerage runs on.
          </p>
          <p>
            Most of that work sits out of sight: execution and clearing
            infrastructure, risk and reporting systems, and the internal tooling
            that keeps a multi-entity brokerage honest about its own numbers.
          </p>
        </section>

        {/* Principal venture */}
        <section
          className="enter mt-10 sm:mt-14"
          style={{ animationDelay: "180ms" }}
        >
          <p className={LABEL}>Principal venture</p>

          <a
            href="https://gccbrokers.com"
            target="_blank"
            rel="noreferrer"
            className="group mt-4 block overflow-hidden rounded-lg border border-border bg-surface/70 transition-colors hover:border-border-strong hover:bg-surface-raised/70"
          >
            <div className="flex flex-col gap-5 p-6 sm:p-7">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  GCC Brokers
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">
                  Forex, metals and indices with A-Book STP execution routed to
                  institutional liquidity — on a stack we build and operate
                  ourselves rather than rent.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
                {VENTURE_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex min-w-0 flex-col gap-1 bg-surface px-4 py-3"
                  >
                    <dt className={LABEL}>{fact.label}</dt>
                    <dd className="truncate font-mono text-sm text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border bg-surface/40 px-6 py-4 transition-colors group-hover:bg-surface-raised/60 sm:px-7">
              <span className="font-mono text-xs tracking-wide text-accent">
                gccbrokers.com
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground">
                Visit
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </a>
        </section>

        {/* Contact */}
        <section
          className="enter mt-10 pb-14 sm:mt-12"
          style={{ animationDelay: "240ms" }}
        >
          <p className={LABEL}>Elsewhere</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:bg-surface-raised hover:text-foreground"
                >
                  <link.icon aria-hidden className="size-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="enter mt-auto flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className={LABEL}>
            GCC Brokers Ltd. &middot; FSC regulated &middot; Est. 2016
          </p>
          <p className={LABEL}>bouz.me</p>
        </footer>
      </div>
    </main>
  );
}
