import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nexova Fintech",
    category: "Brand Identity • Fintech",
    description:
      "Complete brand identity system for a next-gen fintech startup, including logo, typography system, color palette, and digital brand guidelines.",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Luxe Botanica",
    category: "Packaging Design • Luxury",
    description:
      "Premium packaging system for a luxury skincare brand, featuring foil-stamped boxes, custom typography, and sustainable material choices.",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Grain & Gather",
    category: "Brand Identity • Food & Beverage",
    description:
      "Full brand identity and packaging design for an artisanal food brand — from farm-to-table positioning to shelf-ready packaging.",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Atlas Industrial",
    category: "Brand Strategy • Industrial",
    description:
      "Strategic rebrand for an industrial manufacturing company — modernizing a 20-year-old brand for a new era of growth.",
    color: "from-primary/15 to-primary/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body max-w-md font-light">
            Each project is a strategic partnership — designed to elevate brands and drive measurable results.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <p className="text-primary text-xs font-display tracking-[0.2em] uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
