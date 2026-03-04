import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
              <div className="relative flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-primary text-xs font-display tracking-[0.2em] uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body font-light leading-relaxed max-w-xl mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 text-primary font-display text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
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
