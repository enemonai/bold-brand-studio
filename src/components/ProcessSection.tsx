import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: "01", title: "Discovery", description: "Deep dive into your brand, market, audience, and competitive landscape." },
  { number: "02", title: "Strategy", description: "Define positioning, messaging framework, and visual direction." },
  { number: "03", title: "Identity Design", description: "Craft the logo, typography, color system, and visual language." },
  { number: "04", title: "Packaging", description: "Design premium packaging that elevates the brand experience." },
  { number: "05", title: "Launch", description: "Deliver final assets, brand guidelines, and launch support." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            How I <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border z-0" />
              )}
              <div className="relative p-6 rounded-lg border border-border hover:border-primary/30 bg-card transition-all duration-500 h-full">
                <span className="font-display text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
