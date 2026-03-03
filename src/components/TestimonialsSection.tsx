import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Onoja didn't just design our logo — he built an entire brand system that transformed how our customers perceive us. Our conversions increased 40% after the rebrand.",
    name: "Adamu K.",
    role: "CEO, NexaPay",
  },
  {
    quote: "The packaging design was next level. Every detail was intentional, strategic, and premium. Our products now stand out on every shelf.",
    name: "Grace O.",
    role: "Founder, Botanica Labs",
  },
  {
    quote: "Working with Onoja was a game-changer. He thinks like a strategist and executes like an artist. Our brand identity is now our strongest competitive advantage.",
    name: "Michael T.",
    role: "CMO, Atlas Industries",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Client <span className="text-gradient">Words</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-500"
            >
              <Quote className="text-primary/30 mb-6" size={28} />
              <p className="text-muted-foreground font-body font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-muted-foreground text-sm font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
