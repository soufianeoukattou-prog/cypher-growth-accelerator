import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Check, X } from "lucide-react";
import soufiane from "@/assets/founder-soufiane.jpg";
import omar from "@/assets/founder-omar.jpg";

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

const founders = [
  {
    name: "Soufiane",
    role: "Co-founder · Offer & Pricing",
    image: soufiane,
    bio: "Spent 6 years inside B2B SaaS sales orgs before building Cypherdigi. Obsessed with offer architecture and pricing math.",
  },
  {
    name: "Omar",
    role: "Co-founder · Lead Systems",
    image: omar,
    bio: "Engineer-turned-operator. Builds the outbound, content and pipeline systems that make growth predictable.",
  },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-edge pt-24 pb-20 lg:pt-32 lg:pb-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            ◆ Who We Are
          </p>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-balance max-w-5xl text-white">
            We're a two-person team that builds growth systems for SaaS founders — not slide decks.
          </h1>
          <p className="mt-8 font-mono text-base text-white/70 max-w-2xl leading-relaxed">
            Cypherdigi exists because most "growth consultants" hand you theory and disappear.
            We do the work with you and leave behind a system your team can actually run.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container-edge py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            ◆ The Founders
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl text-balance mb-16">
            Two operators. One playbook. Five clients per month, max.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.12}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={f.image}
                    alt={`${f.name}, ${f.role}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {f.role}
                    </div>
                    <h3 className="mt-2 font-serif text-4xl">{f.name}</h3>
                  </div>
                </div>
                <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">
                  {f.bio}
                </p>
              </article>
            </Reveal>
          ))}
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
              We don't do decks. Every Cypherdigi engagement ends with three things in your hands:
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
          <p className="lg:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            ◆ The Guarantee
          </p>
          <p className="lg:col-span-9 font-serif text-3xl md:text-5xl leading-tight text-balance text-white">
            If you don't feel the new positioning is dramatically stronger,
            <span className="text-accent"> we refund you. </span>
            Full stop.
          </p>
        </div>
      </section>

      {/* FIT / NOT FIT */}
      <section className="container-edge py-24 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
            ◆ Who this is for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">If this sounds like you, we should talk.</h2>
          <ul className="space-y-4">
            {fitFor.map((f) => (
              <li key={f} className="flex gap-4 border-t border-border pt-4">
                <Check className="text-accent shrink-0 mt-0.5" size={18} />
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
      <section className="bg-secondary py-24 text-center border-t border-border">
        <div className="container-edge">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance text-primary">
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
        </div>
      </section>
    </>
  );
};

export default About;
