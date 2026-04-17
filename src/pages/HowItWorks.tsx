import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    tag: "Diagnostic",
    desc: "We tear down your current offer and ship a written rebuild plan.",
    features: [
      "Offer teardown (90 min)",
      "Written Grand Slam Offer rewrite",
      "Pricing recommendation",
      "Loom walkthrough",
    ],
    accent: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    tag: "Most chosen",
    desc: "The full offer + lead system rebuild. The one that moves the needle for most SaaS founders.",
    features: [
      "Everything in Starter",
      "Lead generation system (2 channels)",
      "Sales call framework + objection scripts",
      "30-day implementation support",
    ],
    accent: true,
  },
  {
    name: "Full System",
    price: "$6,000",
    tag: "Done-with-you",
    desc: "Six weeks of building together. We sit inside the work and ship the entire money model.",
    features: [
      "Everything in Growth",
      "Money model + upsell ladder",
      "Weekly working sessions (6 weeks)",
      "Team training on new playbook",
      "60-day support window",
    ],
    accent: false,
  },
];

const weeks = [
  { n: "01", title: "Diagnostic", body: "Audit current offer, pricing, sales calls, and lead sources. Identify the binding constraint." },
  { n: "02", title: "Grand Slam Offer", body: "Rewrite the offer around outcome and risk-reversal. Stack value. Define the guarantee." },
  { n: "03", title: "Lead System", body: "Pick 2 channels. Build messaging, sequences, and a tracker. Start outputs in week 4." },
  { n: "04", title: "Sales Playbook", body: "Document the call framework. Write scripts for the top 5 objections you hear today." },
  { n: "05", title: "Money Model", body: "Tier the offer. Design the upsell. Add continuity. Engineer LTV before scaling spend." },
  { n: "06", title: "Handoff", body: "Train the team on the new system. Set the dashboard. Ship the playbook document." },
];

const HowItWorks = () => {
  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-edge pt-24 pb-20 lg:pt-32 lg:pb-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ◆ How It Works
            </p>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-balance text-white">
              Three engagements. One outcome: a growth system you actually run.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pl-10 border-l border-white/15">
            <p className="font-mono text-sm text-white/70 leading-relaxed pl-6 lg:pl-10">
              Cypherdigi doesn't sell strategy decks. Every engagement ends with assets your team can run on Monday morning —
              written offers, scripts, and a working pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="container-edge py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <article
                className={`h-full bg-background border border-border p-8 hover-lift relative ${
                  t.accent ? "border-l-2 border-l-primary" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t.tag}
                  </span>
                  {t.accent && (
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2 py-1">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-3xl">{t.name}</h3>
                <div className="mt-2 font-serif text-5xl text-primary">{t.price}</div>
                <p className="mt-4 font-mono text-sm text-muted-foreground min-h-[3rem]">
                  {t.desc}
                </p>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 font-mono text-sm">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-colors ${
                    t.accent
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "border border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Start with {t.name}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 border-t border-border">
        <div className="container-edge">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ◆ Six-Week Delivery
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl text-balance">
              Built, documented, and handed off in six weeks.
            </h2>
          </Reveal>
        </div>

        {/* desktop horizontal scroll, mobile stack */}
        <div className="mt-14 overflow-x-auto lg:overflow-visible">
          <div className="container-edge">
            <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 min-w-max lg:min-w-0">
              {weeks.map((w, i) => (
                <Reveal key={w.n} delay={i * 0.06}>
                  <div className="relative bg-secondary p-6 min-h-[220px] w-[260px] lg:w-auto overflow-hidden hover-lift">
                    <div
                      aria-hidden
                      className="absolute -bottom-6 -right-2 font-serif text-primary/10 leading-none select-none"
                      style={{ fontSize: "120px" }}
                    >
                      {w.n}
                    </div>
                    <div className="relative">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Week {w.n}
                      </p>
                      <h3 className="mt-4 font-serif text-2xl">{w.title}</h3>
                      <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                        {w.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="container-edge grid lg:grid-cols-12 gap-10 items-center">
          <p className="lg:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            ◆ The Guarantee
          </p>
          <div className="lg:col-span-9">
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
              If you don't feel the new positioning is dramatically stronger,
              <span className="text-accent"> we refund you. </span>
              Full stop.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center px-7 py-4 bg-white text-primary text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-colors"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
