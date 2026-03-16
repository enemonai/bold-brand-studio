import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Projects | Enemona Isaac's Design Portfolio" />
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground font-body font-light max-w-xl text-lg"
          >
            A curated collection of brand identity systems, packaging design, and strategic rebrands.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, visibleCount).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="group block relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-primary text-xs font-display tracking-[0.2em] uppercase mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-body font-light text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-display text-sm tracking-wider uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Case Study</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visibleCount < projects.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display tracking-wider text-sm uppercase hover:bg-primary/90 transition-colors"
              >
                Show More Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Projects;
