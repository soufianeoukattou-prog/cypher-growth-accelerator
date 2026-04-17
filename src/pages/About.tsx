import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Check, X } from "lucide-react";

const fitFor = [
  "B2B SaaS founders doing $20k–$200k MRR",
  "Teams who already have a working product and some traction",
  "Founders willing to rewrite their offer and pricing",
  "Operators who want a system, not a strategy deck",
];

const notFor = [
  "Pre-product or pre-revenue startups",
  "Founders looking for a marketing agency to 'run their ads'",
  "Companies that want consultants to nod at their existing offer",
  "Teams unwilling to change pricing or positioning",
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="container-edge pt-24 pb-16 lg:pt-32 lg:pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-2">
          <p
            className="vertical-text font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            About / 02
          </p>
        </div>
        <div className="lg:col-span-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            ◆ Who We Are
          </p>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-balance max-w-5xl">
            We are a two-person implementation team obsessed with one thing: making Hormozi's frameworks actually work inside SaaS businesses.
          </h1>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-border grid lg:grid-cols-12">
        <div className="lg:col-span-5 bg-secondary p-10 lg:p-16 flex items-center">
          <p className="font-serif text-3xl lg:text-4xl leading-snug text-primary text-balance">
            "Most consultants give you theory. We build you the system."
          </p>
        </div>
        <div className="lg:col-span-7 p-10 lg:p-16 space-y-6 font-mono text-base text-muted-foreground leading-relaxed">
          <Reveal>
            <p>
              The market is full of people who will sell you a 60-page strategy deck.
              You read it, agree with it, file it, and your business looks identical six months later.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              We don't do decks. Every engagement ends with three things in your hands:
              a written offer your salespeople can read on a call, a documented lead system that runs without us,
              and a pricing model engineered around your actual unit economics.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              That's why we cap at five clients per month. Implementation is heavier than advice — and we'd rather
              do the work right for a few SaaS founders than spread thin across dozens.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container-edge grid lg:grid-cols-12 gap-10 items-center">
          <p className="lg:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            ◆ The Guarantee
          </p>
          <p className="lg:col-span-9 font-serif text-3xl md:text-5xl leading-tight text-balance">
            If you don't feel the new positioning is dramatically stronger,
            <span className="text-accent"> we refund you. </span>
            Full stop.
          </p>
        </div>
      </section>

      {/* FIT / NOT FIT */}
      <section className="container-edge py-24 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-success mb-6">
            ◆ Who this is for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">If this sounds like you, we should talk.</h2>
          <ul className="space-y-4">
            {fitFor.map((f) => (
              <li key={f} className="flex gap-4 border-t border-border pt-4">
                <Check className="text-success shrink-0 mt-0.5" size={18} />
                <span className="font-mono text-sm text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-destructive mb-6">
            ◆ Who this is NOT for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">We'll waste your time and ours otherwise.</h2>
          <ul className="space-y-4">
            {notFor.map((f) => (
              <li key={f} className="flex gap-4 border-t border-border pt-4">
                <X className="text-destructive shrink-0 mt-0.5" size={18} />
                <span className="font-mono text-sm text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-edge py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance">
            Still reading? Take the scorecard.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/scorecard"
            className="mt-10 inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Take the Free Scorecard →
          </Link>
        </Reveal>
      </section>
    </>
  );
};

export default About;
