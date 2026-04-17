import { Reveal } from "@/components/Reveal";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="container-edge pt-20 pb-24 lg:pt-28 grid lg:grid-cols-12 gap-12">
      {/* Pull quote left */}
      <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">
          ◆ Booking
        </p>
        <Reveal>
          <p className="font-serif text-3xl md:text-4xl leading-tight text-balance">
            "We only work with 5 clients per month. This keeps the work exceptional."
          </p>
        </Reveal>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          — Cypherdigi Team
        </p>

        <div className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Prefer email?
          </p>
          <a
            href="mailto:hello@cypherdigi.com"
            className="inline-flex items-center gap-2 font-mono text-base text-foreground hover:text-accent transition-colors"
          >
            <Mail size={16} />
            hello@cypherdigi.com
          </a>
        </div>
      </aside>

      {/* Calendly area right */}
      <div className="lg:col-span-8">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Book a free 30-minute strategy call.
          </h1>
          <p className="mt-6 font-mono text-base text-muted-foreground max-w-xl leading-relaxed">
            We'll audit your current offer, pricing, and lead system live on the call. You'll
            walk away with at least one tactical change you can ship this week — whether or
            not we work together.
          </p>
        </Reveal>

        <div className="mt-12 border border-border bg-secondary">
          {/* Calendly embed placeholder.
              Drop the Calendly inline-widget script here, e.g.:
              <div class="calendly-inline-widget" data-url="https://calendly.com/your-handle/intro" />
              <script src="https://assets.calendly.com/assets/external/widget.js" async /> */}
          <div
            id="calendly-embed"
            className="min-h-[640px] flex items-center justify-center text-center px-8 py-16"
          >
            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Calendly embed slot
              </p>
              <p className="mt-4 font-serif text-2xl text-foreground leading-snug">
                Drop your Calendly inline widget into <span className="text-accent">#calendly-embed</span> and the booking flow appears here.
              </p>
              <a
                href="mailto:hello@cypherdigi.com"
                className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                Email Us Instead
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div className="border-t border-border pt-4">
            <p className="text-foreground">30 min</p>
            <p className="mt-1 normal-case tracking-normal text-muted-foreground">Free strategy call</p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-foreground">No deck</p>
            <p className="mt-1 normal-case tracking-normal text-muted-foreground">We diagnose live</p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-foreground">No pitch</p>
            <p className="mt-1 normal-case tracking-normal text-muted-foreground">If we're not a fit, we'll say so</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
