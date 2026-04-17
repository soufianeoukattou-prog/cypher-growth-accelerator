import { Link } from "react-router-dom";
import logo from "@/assets/cypherdigi-mark.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-edge py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Cypherdigi logo" width={28} height={28} className="w-7 h-7 invert brightness-0" style={{ filter: "brightness(0) invert(1)" }} />
            <span className="font-serif text-lg tracking-tight">CYPHERDIGI</span>
          </div>
          <p className="font-serif text-2xl leading-snug max-w-md text-balance">
            Hormozi frameworks, engineered for SaaS.
          </p>
          <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] opacity-60">
            EST. 2024 / IMPLEMENTATION PARTNER
          </p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-4">Navigate</p>
          <ul className="space-y-2 font-mono text-sm">
            <li><Link to="/" className="hover:opacity-70">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:opacity-70">How It Works</Link></li>
            <li><Link to="/scorecard" className="hover:opacity-70">Scorecard</Link></li>
            <li><Link to="/about" className="hover:opacity-70">About</Link></li>
            <li><Link to="/contact" className="hover:opacity-70">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-4">Contact</p>
          <ul className="space-y-2 font-mono text-sm">
            <li><a href="mailto:hello@cypherdigi.com" className="hover:opacity-70">hello@cypherdigi.com</a></li>
            <li className="opacity-60">5 clients per month, max.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-edge py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} Cypherdigi</span>
          <span>Hormozi Implementation Partner</span>
        </div>
      </div>
    </footer>
  );
};
