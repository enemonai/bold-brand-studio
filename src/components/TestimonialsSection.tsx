import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Wow, this is excellent work! The logo and designs perfectly capture what I had in mind. Your creativity, attention to detail, and professionalism really shine through. I’m really impressed with the quality and how smoothly the whole process went. Thank you for bringing my vision to life!",
    name: "Fahad Ya'u Deba",
    role: "Founder, Pixelore",
  },
  {
    quote: "Working with the design team on PureStart’s packaging was an amazing experience. They truly understood our vision of creating a clean, healthy and trustworthy brand for children’s food. \
The packaging design is visually appealing, well structured and perfectly aligned with our values. \
The colours, typography, and overall layout communicate freshness, care, and quality, while making key information clear for parents. \
The final result exceeded our expectations and has helped our brand stand out confidently on the shelf. We’re extremely happy with the outcome",
    name: "Mr Ajayi",
    role: "Founder, PureStart",
  },
  {
    quote: "I honestly love this. My brand’s logo and packaging design came out beautifully. The entire process was smooth from start to finish, and the design team carried us along at every stage, ensuring our ideas were heard and properly executed. The final result is clean, modern, and truly reflects our brand. Thank you for such an amazing experience.",
    name: "Adejoh Abigeal",
    role: "Founder, Abby's Fragrance",
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
