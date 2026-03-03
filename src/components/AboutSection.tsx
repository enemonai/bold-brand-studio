import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              About
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
              Strategy First.<br />
              <span className="text-gradient">Design Second.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-body font-light">
              I'm <span className="text-foreground font-medium">Onoja Enemona Isaac</span> — a strategic brand designer
              who builds identities that don't just look good, but work. Every logo, every packaging system,
              every brand touchpoint is engineered to create market leadership.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body font-light">
              I believe great design starts with deep strategy. Before a single pixel is placed, I dive into
              your market, your audience, and your competitive landscape to craft brands that command attention
              and build trust.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-sm mt-1 font-body">Brands Built</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">5+</p>
                <p className="text-muted-foreground text-sm mt-1 font-body">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-sm mt-1 font-body">Client Satisfaction</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">4</p>
                <p className="text-muted-foreground text-sm mt-1 font-body">Industries Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
