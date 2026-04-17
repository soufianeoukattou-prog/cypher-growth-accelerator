import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";

type Section = "Offer" | "Lead Gen" | "Conversion" | "Pricing";

interface Q {
  section: Section;
  q: string;
  options: { label: string; text: string; pts: number }[];
}

const questions: Q[] = [
  // Offer
  {
    section: "Offer",
    q: "How do you currently describe what your software does?",
    options: [
      { label: "A", text: "We lead with features and functionality", pts: 0 },
      { label: "B", text: "We lead with the problem we solve", pts: 1 },
      { label: "C", text: "We lead with the specific outcome and ROI", pts: 3 },
      { label: "D", text: "We have multiple inconsistent descriptions", pts: 2 },
    ],
  },
  {
    section: "Offer",
    q: "How do prospects typically react to your pricing?",
    options: [
      { label: "A", text: "They always say it's too expensive", pts: 0 },
      { label: "B", text: "They sometimes push back on price", pts: 1 },
      { label: "C", text: "Price rarely comes up as an objection", pts: 3 },
      { label: "D", text: "We don't have consistent pricing", pts: 2 },
    ],
  },
  {
    section: "Offer",
    q: "How differentiated is your offer from competitors?",
    options: [
      { label: "A", text: "We're basically the same, we compete on price", pts: 0 },
      { label: "B", text: "We have some differences but they're hard to explain", pts: 1 },
      { label: "C", text: "We have a clear, unique mechanism they don't have", pts: 3 },
      { label: "D", text: "We don't really know what competitors offer", pts: 2 },
    ],
  },
  {
    section: "Offer",
    q: "Do you have a defined guarantee or risk-reversal?",
    options: [
      { label: "A", text: "No guarantee at all", pts: 0 },
      { label: "B", text: "A basic money-back guarantee", pts: 1 },
      { label: "C", text: "A performance-based guarantee tied to outcomes", pts: 3 },
      { label: "D", text: "Something unconventional that removes all risk", pts: 2 },
    ],
  },
  // Lead Gen
  {
    section: "Lead Gen",
    q: "Where do most of your new clients come from?",
    options: [
      { label: "A", text: "Random referrals we didn't engineer", pts: 0 },
      { label: "B", text: "One channel that works inconsistently", pts: 1 },
      { label: "C", text: "2+ channels running consistently", pts: 3 },
      { label: "D", text: "We honestly don't know", pts: 2 },
    ],
  },
  {
    section: "Lead Gen",
    q: "How many qualified conversations do you have per month?",
    options: [
      { label: "A", text: "0–2", pts: 0 },
      { label: "B", text: "3–5", pts: 1 },
      { label: "C", text: "6–10", pts: 3 },
      { label: "D", text: "10+", pts: 2 },
    ],
  },
  {
    section: "Lead Gen",
    q: "Do you have a documented outreach or content system?",
    options: [
      { label: "A", text: "No, it's all ad hoc", pts: 0 },
      { label: "B", text: "We have a rough process but it's not written down", pts: 1 },
      { label: "C", text: "Yes, fully documented and running", pts: 3 },
      { label: "D", text: "We have a team member responsible for this", pts: 2 },
    ],
  },
  // Conversion
  {
    section: "Conversion",
    q: "What is your approximate close rate on sales calls?",
    options: [
      { label: "A", text: "Under 10%", pts: 0 },
      { label: "B", text: "10–25%", pts: 1 },
      { label: "C", text: "25–40%", pts: 3 },
      { label: "D", text: "Over 40%", pts: 2 },
    ],
  },
  {
    section: "Conversion",
    q: "Do you have a defined sales call framework?",
    options: [
      { label: "A", text: "No, every call is different", pts: 0 },
      { label: "B", text: "I have a rough structure in my head", pts: 1 },
      { label: "C", text: "Yes, I follow the same structure every time", pts: 3 },
      { label: "D", text: "We have scripts and trained our team on it", pts: 2 },
    ],
  },
  {
    section: "Conversion",
    q: "How do you handle common objections like 'too expensive'?",
    options: [
      { label: "A", text: "I don't have a good answer for that", pts: 0 },
      { label: "B", text: "I improvise depending on the situation", pts: 1 },
      { label: "C", text: "I have specific scripts for the top 5 objections", pts: 3 },
      { label: "D", text: "We track objections and update scripts regularly", pts: 2 },
    ],
  },
  // Pricing
  {
    section: "Pricing",
    q: "How did you arrive at your current pricing?",
    options: [
      { label: "A", text: "We guessed based on what felt reasonable", pts: 0 },
      { label: "B", text: "We looked at competitors and matched them", pts: 1 },
      { label: "C", text: "We based it on the value/ROI we deliver", pts: 3 },
      { label: "D", text: "We've A/B tested pricing and have data", pts: 2 },
    ],
  },
  {
    section: "Pricing",
    q: "Do you have upsell or continuity offers after the initial sale?",
    options: [
      { label: "A", text: "No, it's a one-time deal", pts: 0 },
      { label: "B", text: "We sometimes mention additional services", pts: 1 },
      { label: "C", text: "Yes, we have a defined upsell path", pts: 3 },
      { label: "D", text: "We have a full money model with continuity revenue", pts: 2 },
    ],
  },
  {
    section: "Pricing",
    q: "When is the last time you raised your prices?",
    options: [
      { label: "A", text: "Never", pts: 0 },
      { label: "B", text: "Over a year ago", pts: 1 },
      { label: "C", text: "In the last 6 months", pts: 3 },
      { label: "D", text: "We test price increases regularly", pts: 2 },
    ],
  },
];

const sections: Section[] = ["Offer", "Lead Gen", "Conversion", "Pricing"];

interface Tier {
  range: [number, number];
  label: string;
  color: string;
  blurb: string;
  bullets: string[];
  cta: string;
}

const tiers: Tier[] = [
  {
    range: [0, 13],
    label: "Critical",
    color: "destructive",
    blurb: "Your system has major gaps. You're losing clients and revenue every month.",
    bullets: [
      "Your offer is feature-led — prospects can't justify your price.",
      "No predictable lead source means revenue depends on luck.",
      "Without scripts and a money model, every deal is a coin flip.",
    ],
    cta: "Book a call urgently",
  },
  {
    range: [14, 26],
    label: "Leaking",
    color: "warning",
    blurb: "You have the foundation but it's leaking. One system rebuild could double your close rate.",
    bullets: [
      "Pieces are working — but not connected into one system.",
      "A rebuild of the offer alone usually doubles close rate.",
      "Tightening pricing and upsells unlocks immediate revenue.",
    ],
    cta: "Book a call",
  },
  {
    range: [27, 39],
    label: "Dialed",
    color: "success",
    blurb: "You're close to dialed in. Small tweaks could unlock your next revenue tier.",
    bullets: [
      "Your fundamentals are strong — you don't need a rebuild.",
      "Refining the money model is your next leverage point.",
      "A strategic review will surface the 1–2 biggest wins.",
    ],
    cta: "Get a strategic review",
  },
];

const tierColorMap = {
  destructive: { bg: "bg-destructive", text: "text-destructive", chip: "bg-destructive/10 text-destructive" },
  warning:     { bg: "bg-warning",     text: "text-warning",     chip: "bg-warning/10 text-warning" },
  success:     { bg: "bg-success",     text: "text-success",     chip: "bg-success/10 text-success" },
} as const;

const ScoreReveal = ({ score }: { score: number }) => {
  const { ref, value } = useCountUp(score, 1400);
  return (
    <div ref={ref} className="font-serif text-[120px] md:text-[180px] leading-none text-primary">
      {value}
      <span className="text-muted-foreground text-4xl md:text-6xl font-mono ml-2">/ 39</span>
    </div>
  );
};

const Scorecard = () => {
  const [step, setStep] = useState(0); // 0..questions.length (last = results)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const totalSteps = questions.length;
  const isResults = step >= totalSteps;
  const progress = isResults ? 100 : Math.round((step / totalSteps) * 100);

  const score = useMemo(
    () => answers.reduce<number>((acc, a, i) => acc + (a !== null ? questions[i].options[a].pts : 0), 0),
    [answers]
  );

  const tier = useMemo(
    () => tiers.find((t) => score >= t.range[0] && score <= t.range[1]) || tiers[0],
    [score]
  );

  const select = (idx: number) => {
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
  };

  const goNext = () => {
    if (answers[step] === null) return;
    setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const current = questions[step];

  return (
    <section className="container-edge pt-12 pb-24 lg:pt-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Cypherdigi Scorecard / 5 min
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          {isResults ? "Results" : `${step + 1} / ${totalSteps}`}
        </p>
      </div>

      {/* Progress */}
      <div className="h-1 bg-border mb-10 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        />
      </div>

      {/* Section pills */}
      {!isResults && (
        <div className="flex flex-wrap gap-2 mb-12">
          {sections.map((s) => {
            const active = current.section === s;
            return (
              <span
                key={s}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {s}
              </span>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isResults ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
              {current.q}
            </h2>

            <div className="mt-10 grid gap-3">
              {current.options.map((opt, i) => {
                const selected = answers[step] === i;
                return (
                  <button
                    key={opt.label}
                    onClick={() => select(i)}
                    className={`text-left border p-5 md:p-6 transition-all flex gap-5 items-start group ${
                      selected
                        ? "border-primary bg-secondary"
                        : "border-border hover:border-primary/40 hover:bg-secondary/50"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm w-8 h-8 inline-flex items-center justify-center border ${
                        selected
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground group-hover:border-primary/40"
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="font-mono text-base text-foreground leading-relaxed pt-1">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={goBack}
                disabled={step === 0}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground disabled:opacity-30"
              >
                ← Back
              </button>
              <button
                onClick={goNext}
                disabled={answers[step] === null}
                className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step === totalSteps - 1 ? "See My Score" : "Next →"}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Your Score
            </p>
            <ScoreReveal score={score} />

            <div className="mt-6 flex items-center gap-3">
              <span className={`font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 ${tierColorMap[tier.color as keyof typeof tierColorMap].chip}`}>
                ● {tier.label}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Range {tier.range[0]}–{tier.range[1]}
              </span>
            </div>

            <p className="mt-8 font-serif text-2xl md:text-3xl max-w-2xl leading-snug text-balance">
              {tier.blurb}
            </p>

            <ul className="mt-10 space-y-4 max-w-2xl">
              {tier.bullets.map((b, i) => (
                <li key={i} className="grid grid-cols-12 gap-4 border-t border-border pt-4">
                  <span className="col-span-1 font-mono text-xs text-accent pt-1">0{i + 1}</span>
                  <span className="col-span-11 font-mono text-sm text-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Form */}
            <div className="mt-14 bg-secondary p-8 md:p-10 border border-border">
              <h3 className="font-serif text-2xl md:text-3xl">{tier.cta}</h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                Drop your details. We'll send your detailed results and book a 30-minute strategy call.
              </p>

              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 grid md:grid-cols-2 gap-4"
                >
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="bg-background border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="bg-background border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="md:col-span-2 inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
                  >
                    Book My Free Strategy Call
                  </button>
                  <p className="md:col-span-2 font-mono text-xs text-muted-foreground">
                    Your results will be sent to your email.
                  </p>
                </form>
              ) : (
                <div className="mt-6 border-l-2 border-success bg-background p-6">
                  <p className="font-serif text-2xl text-foreground">Got it, {form.name || "founder"}.</p>
                  <p className="mt-2 font-mono text-sm text-muted-foreground">
                    We'll send your full results to <span className="text-foreground">{form.email}</span> within the hour.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
                  >
                    Pick a time now →
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-10">
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers(questions.map(() => null));
                  setSubmitted(false);
                }}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                ← Retake the scorecard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Scorecard;
