import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

export const StaggerLines = ({ lines, className = "", lineClassName = "" }: StaggerLinesProps) => (
  <div className={className}>
    {lines.map((line, i) => (
      <div key={i} className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={lineClassName}
        >
          {line}
        </motion.div>
      </div>
    ))}
  </div>
);
