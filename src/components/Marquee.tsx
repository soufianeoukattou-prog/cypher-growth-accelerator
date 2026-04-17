interface MarqueeProps {
  items: string[];
  className?: string;
}

export const Marquee = ({ items, className = "" }: MarqueeProps) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden bg-primary text-primary-foreground py-5 border-y border-white/10 ${className}`}>
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="mx-8 font-mono text-sm uppercase tracking-[0.25em] opacity-90"
          >
            {t} <span className="opacity-40 mx-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
