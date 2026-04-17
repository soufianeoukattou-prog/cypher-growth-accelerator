import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { Reveal, StaggerLines } from "@/components/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-growth.jpg";

const Stat = ({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="font-serif text-6xl md:text-7xl text-primary leading-none">
        {v}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground max-w-[16rem]">
        {label}
      </div>
    </div>
  );
};

const problems = [
  {
    n: "01",
    label: "Your offer sounds like everyone else's",
    body: "You list features, integrations, and dashboards. Prospects can't tell why you're worth more than the cheaper tool that does the same thing.",
  },
  {
    n: "02",
    label: "Leads come in by accident",
    body: "Pipeline depends on referrals and the occasional viral post. You can't forecast next month, so you can't hire, invest, or sleep.",
  },
  {
    n: "03",
    label: "You're charging far below your value",
    body: "Pricing was a guess. Now you're stuck servicing too many low-ticket accounts to ever break out of the grind.",
  },
];

const steps = [
  { n: "01", title: "Offer Rebuild", desc: "Reposition around outcome and ROI. Stack value until price stops being the conversation." },
  { n: "02", title: "Lead Generation System", desc: "Two channels, documented end-to-end, producing measurable weekly output." },
  { n: "03", title: "Sales Playbook", desc: "Discovery, demo, and close framework — with objection scripts your team can run." },
  { n: "04", title: "Pricing & Money Model", desc: "Tier the offer, add upsells and continuity. Engineer LTV before you scale spend." },
];

const Index = () => {
  return (
    <>
      {/* HERO — white bg, image LEFT, text RIGHT */}
      <section className="relative bg-background text-foreground overflow-hidden border-b border-border">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-20 pb-20 lg:pt-24 lg:pb-28 items-center">
          {/* Left image column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="SaaS founder reviewing growth metrics"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 border-t border-white/40 pt-4 flex items-center justify-between text-white">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Live engagement</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">01 / 04</span>
              </div>
            </div>
          </motion.div>

          {/* Right text column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-8">
                ◆ Cypherdigi / Growth Partner for SaaS
              </p>
            </Reveal>

            <StaggerLines
              lines={["More clients.", "Higher prices.", "Predictable leads."]}
              className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-primary"
            />

            <Reveal delay={0.4} className="mt-8 max-w-xl">
              <p className="font-mono text-base text-muted-foreground leading-relaxed">
                Cypherdigi rebuilds your offer, pricing and lead system so SaaS founders stop competing on features
                and start closing premium deals — on repeat.
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
                <span className="border-b border-foreground/60 pb-0.5">Take the Free Scorecard</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            <Reveal delay={0.7} className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-6">
              <div>
                <div className="font-serif text-3xl text-primary">+47%</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">avg close rate lift</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-primary">2.3x</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">avg price increase</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-primary">6 wk</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">to a running system</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TICKER (primary) */}
      <Marquee
        items={[
          "OFFER DESIGN",
          "LEAD GENERATION",
          "PRICING STRATEGY",
          "SALES SYSTEMS",
          "SAAS GROWTH",
          "RETENTION & LTV",
        ]}
      />

      {/* PROBLEM (white) */}
      <section className="container-edge py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-8">
            ◆ The Problem
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl leading-[1.05] max-w-4xl text-balance text-primary">
            You've built a great product. Growth still feels like a coin flip.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-8">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div className="border-t-2 border-accent pt-6">
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

      {/* SOLUTION (primary) */}
      <section className="grid grid-cols-1 lg:grid-cols-10 border-t border-border">
        <div className="lg:col-span-4 bg-primary text-primary-foreground relative min-h-[40vh] lg:min-h-[600px] p-10 lg:p-14 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ◆ The System
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white text-balance">
              Four components. One growth engine.
            </h2>
            <p className="mt-6 font-mono text-sm text-white/70 max-w-sm leading-relaxed">
              Each piece is built, documented, and handed to your team — not left in a slide deck.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 mt-10">
            04 components / 1 outcome
          </div>
        </div>

        <div className="lg:col-span-6 px-8 md:px-14 py-20 bg-background">
          <ul className="divide-y divide-border">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="grid grid-cols-12 gap-4 py-6 group">
                  <span className="col-span-2 font-mono text-sm text-accent pt-1">{s.n} —</span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
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

      {/* SOCIAL PROOF / RESULTS (secondary surface — light blue tint) */}
      <section className="bg-secondary text-foreground py-24 lg:py-32 border-t border-border">
        <div className="container-edge">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-12">
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

      {/* CTA (primary — strong close) */}
      <section className="bg-primary text-primary-foreground py-28 lg:py-36 text-center">
        <div className="container-edge">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto text-balance text-white">
              Ready to stop competing on features?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-colors"
            >
              Book a Free Strategy Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
