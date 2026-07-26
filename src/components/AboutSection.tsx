import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import onojaPortraitFallback from "@/assets/2H0A0127.jpg";
import { siteContent } from "@/data/site-content.generated";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { about } = siteContent;
  const imageSrc = about.imageUrl.trim() || onojaPortraitFallback;

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden min-h-[500px]"
          >
            <img
              src={imageSrc}
              alt={about.imageAlt}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div>
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                {about.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
                {about.headingLine1}
                <br />
                <span className="text-gradient">{about.headingHighlight}</span>
              </h2>
            </div>

            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-lg leading-relaxed font-body font-light"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              {about.stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`}>
                  <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
