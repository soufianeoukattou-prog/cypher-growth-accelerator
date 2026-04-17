import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { Reveal, StaggerLines } from "@/components/Reveal";
import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="font-serif text-6xl md:text-8xl text-white leading-none">
        {v}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-white/50 max-w-[16rem]">
        {label}
      </div>
    </div>
  );
};

const problems = [
  {
    n: "01",
    label: "Weak offer built on features",
    body: "You list integrations, dashboards, and modules. Prospects can't see why you're worth 3x the competitor charging for the same feature list.",
  },
  {
    n: "02",
    label: "No consistent lead pipeline",
    body: "Leads come from random referrals and one-off LinkedIn posts. You can't predict next month's pipeline, so you can't hire or invest.",
  },
  {
    n: "03",
    label: "Undercharging for the value you deliver",
    body: "You priced based on what felt safe. Now every deal feels small and you're trapped servicing too many low-paying accounts to grow.",
  },
];

const steps = [
  { n: "01", title: "Grand Slam Offer Rebuild", desc: "Reposition around outcome, not features. Stack value until price is irrelevant." },
  { n: "02", title: "Lead Generation System", desc: "Two channels, documented, with weekly outputs you can measure and scale." },
  { n: "03", title: "Sales Scripts + Conversion", desc: "Discovery → demo → close framework with objection scripts your team can run." },
  { n: "04", title: "Pricing & Money Model", desc: "Tier the offer, add upsells and continuity. Engineer the LTV before scaling spend." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left text column */}
        <div className="lg:col-span-7 container-edge pt-20 pb-16 lg:py-28 flex flex-col justify-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              Hormozi Implementation Partner / Est. 2024
            </p>
          </Reveal>

          <StaggerLines
            lines={["SaaS Founders Who", "Sell Features", "Are Losing."]}
            className="font-serif text-5xl md:text-7xl xl:text-8xl leading-[1.02] tracking-tight text-foreground"
          />

          <Reveal delay={0.4} className="mt-8 max-w-xl">
            <p className="font-mono text-base text-muted-foreground leading-relaxed">
              We translate the Hormozi framework into a system that gets you more clients,
              higher prices, and consistent leads.
            </p>
          </Reveal>

          <Reveal delay={0.55} className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Build My Growth System
            </Link>
            <Link
              to="/scorecard"
              className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-foreground"
            >
              <span className="border-b border-foreground pb-0.5">Take the Free Scorecard</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Right navy block */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative bg-primary min-h-[40vh] lg:min-h-full overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -bottom-10 -right-6 font-serif text-white/[0.06] leading-none select-none"
            style={{ fontSize: "clamp(180px, 28vw, 380px)" }}
          >
            01
          </div>
          <div className="absolute top-10 left-10 right-10 text-white/70 font-mono text-xs uppercase tracking-[0.3em]">
            <div className="flex justify-between border-b border-white/15 pb-3">
              <span>Chapter</span>
              <span>01 / 04</span>
            </div>
            <p className="mt-6 max-w-xs leading-relaxed text-white/60">
              The offer is the product of every other decision in the business.
              Fix it first.
            </p>
          </div>
          <div className="absolute bottom-10 left-10 text-white font-serif text-2xl max-w-xs leading-snug">
            "If your offer is weak, every other tactic is multiplied by zero."
          </div>
        </motion.div>
      </section>

      {/* TICKER */}
      <Marquee
        items={[
          "OFFER DESIGN",
          "LEAD GENERATION",
          "PRICING STRATEGY",
          "SALES SYSTEMS",
          "HORMOZI FRAMEWORK",
          "SAAS GROWTH",
        ]}
      />

      {/* PROBLEM */}
      <section className="container-edge py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-8">
            ◆ The Problem
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-[1.05] max-w-4xl text-balance">
            You read the books. You just don't know how to apply them to software.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-8">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div className="border-t-2 border-primary pt-6">
                <div className="font-serif text-7xl md:text-[80px] text-primary leading-none">
                  {p.n}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{p.label}</h3>
                <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="grid grid-cols-1 lg:grid-cols-10 border-t border-border">
        <div className="lg:col-span-4 bg-secondary relative min-h-[40vh] lg:min-h-[600px] flex items-center justify-center py-20">
          <div
            className="vertical-text font-serif text-6xl md:text-7xl text-primary leading-none tracking-tight"
          >
            THE SYSTEM
          </div>
          <div className="absolute bottom-8 left-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            04 components / 1 outcome
          </div>
        </div>

        <div className="lg:col-span-6 px-8 md:px-14 py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ◆ The Solution
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-xl text-balance">
              Four components. Built into your business in six weeks.
            </h2>
          </Reveal>

          <ul className="mt-12 divide-y divide-border">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="grid grid-cols-12 gap-4 py-6 group">
                  <span className="col-span-2 font-mono text-sm text-accent pt-1">{s.n} —</span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SOCIAL PROOF / RESULTS */}
      <section className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="container-edge">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 mb-12">
              ◆ Engagement at a glance
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <Stat value={6} suffix=" wk" label="From kickoff to a documented, running growth system." />
            <Stat value={3500} suffix=" $" label="Average investment for the Growth tier engagement." />
            <Stat value={3} label="Concrete deliverables: offer, lead system, sales playbook." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-28 lg:py-36 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto text-balance">
            Ready to stop competing on features?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </Reveal>
      </section>
    </>
  );
};

export default Index;
