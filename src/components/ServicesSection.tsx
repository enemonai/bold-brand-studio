import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, PenTool, Package, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Complete visual identity systems — from logo to guidelines — designed to create instant recognition and lasting market presence.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Strategic logomarks crafted through research and refined through iterations. Every line has purpose, every curve tells a story.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Premium packaging systems that elevate shelf presence and transform products into brand experiences people remember.",
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "Deep market research, competitive analysis, and positioning strategy that gives your brand a clear path to industry leadership.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What I <span className="text-gradient">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-8 md:p-10 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:glow-accent"
            >
              <service.icon className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
