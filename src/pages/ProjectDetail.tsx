import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, getAdjacentProjects, Paragraph, SectionHeading } from "@/data/projects";
import { SEO } from "@/components/SEO";
import enemonaLogo from "../assets/ENEMONA1.png";

const DynamicHeading = ({
  heading,
  defaultStart,
  defaultSpecial,
  defaultEnd = "",
  className = "font-display text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-3xl",
}: {
  heading?: SectionHeading;
  defaultStart: string;
  defaultSpecial: string;
  defaultEnd?: string;
  className?: string;
}) => (
  <h2 className={className}>
    {heading?.headingTextStart ?? defaultStart}
    <span className="text-gradient">{heading?.headingTextSpecial ?? defaultSpecial}</span>
    {heading?.headingTextEnd ?? defaultEnd}
  </h2>
);

const ParagraphRender = ({ paragraphs, className = "" }: { paragraphs: Paragraph[]; className?: string }) => (
  <div className={`space-y-6 ${className}`}>
    {paragraphs.map((p, i) => (
      <div key={i}>
        {p.heading && (
          <h3 className="font-display text-xl font-bold mb-3">{p.heading}</h3>
        )}
        {(p.inlineHeading || p.text) && (
          <p className="text-muted-foreground font-body text-lg leading-relaxed font-light">
            {p.inlineHeading && (
              <span className="font-semibold text-foreground mr-2">{p.inlineHeading}</span>
            )}
            {p.text}
          </p>
        )}
        {p.bullets && p.bullets.length > 0 && (
          <ul className="list-disc list-outside ml-6 mt-4 space-y-2 text-muted-foreground font-body text-lg font-light">
            {p.bullets.map((bullet, idx) => (
              <li key={idx} className="pl-2">{bullet}</li>
            ))}
          </ul>
        )}
        {p.closing && (
          <p className="text-muted-foreground font-body text-lg leading-relaxed font-light">
            {p.closing}
          </p>
        )}
      </div>
    ))}
  </div>
);

/* ── tiny scroll-animated section wrapper ── */
const Section = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${project.title} - ${project.client} | Enemona Isaac's Design Portfolio`}
        description={project.aboutClient ? project.aboutClient[0].text : `Project for ${project.client}: ${project.description}`}
        image={project.hero}
        keywords={project.keywords}
      />
      {/* ─── Top bar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={enemonaLogo} alt="Onoja" className="h-[20px] w-auto" />
          </a>
          <Link
            to="/projects"
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back <span className="hidden md:block">to Projects</span>
          </Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              {project.industry}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-body text-lg md:text-xl font-light max-w-2xl mb-10">
              {project.description}
            </p>
            <div className="w-20 h-0.5 bg-primary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container mx-auto px-6 lg:px-12 mt-16"
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src={project.hero}
              alt={`${project.title} hero`}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </motion.div>
      </header>

      {/* ─── OVERVIEW ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Section>
            <div className="grid md:grid-cols-4 gap-8 mb-16 border-b border-border pb-16">
              {[
                { label: "Client", value: project.client },
                { label: "Industry", value: project.industry },
                { label: "Services", value: project.services.join(", ") },
                { label: "Timeline", value: project.timeline },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-foreground font-body font-light">{item.value}</p>
                </div>
              ))}
            </div>
          </Section>

          {project.aboutClient && project.aboutClient.length > 0 && (
            <Section>
              <div className="max-w-3xl mb-16">
                <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                  About the Client
                </p>
                <DynamicHeading
                  heading={project.aboutClientHeading}
                  defaultStart="Who we "
                  defaultSpecial="Worked With"
                  className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-3xl"
                />
                <ParagraphRender paragraphs={project.aboutClient} />
              </div>
            </Section>
          )}

          <Section>
            <div className="max-w-3xl">
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                Project Overview
              </p>
              <ParagraphRender paragraphs={project.summary} />
            </div>
          </Section>
        </div>
      </section>

      {/* ─── THE CHALLENGE ─── */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <Section>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              The Challenge
            </p>
            <DynamicHeading
              heading={project.challengeHeading}
              defaultStart="Identifying the "
              defaultSpecial="Brand Gap"
            />
            <ParagraphRender paragraphs={project.challenge} className="max-w-3xl" />
          </Section>
        </div>
      </section>

      {/* ─── THE STRATEGY ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Section>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              The Strategy
            </p>
            <DynamicHeading
              heading={project.strategyHeading}
              defaultStart="Strategic "
              defaultSpecial="Direction"
            />
            <ParagraphRender paragraphs={project.strategy} className="max-w-3xl" />
          </Section>
        </div>
      </section>

      {/* ─── LOGO BREAKDOWN ─── */}
      {project.logoDesign && (
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <Section>
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                Logo Design
              </p>
              <DynamicHeading
                heading={project.logoDesignHeading}
                defaultStart="Mark "
                defaultSpecial="Construction"
              />
            </Section>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Section>
                <ParagraphRender paragraphs={project.logoDesign.breakdown} />
              </Section>
              <Section delay={0.15}>
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={project.logoDesign.gridImage}
                    alt="Logo construction grid"
                    className="w-full object-cover"
                  />
                </div>
              </Section>
            </div>
          </div>
        </section>
      )}

      {/* ─── VISUAL IDENTITY ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Section>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              Visual Identity
            </p>
            <DynamicHeading
              heading={project.visualIdentityHeading}
              defaultStart="Identity "
              defaultSpecial="System"
              className="font-display text-3xl md:text-5xl font-bold leading-tight mb-16 max-w-3xl"
            />
          </Section>

          {/* Color palette */}
          <Section>
            <p className="text-foreground font-display text-sm tracking-[0.2em] uppercase mb-6">
              Color Palette
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              {project.colorPalette.map((color) => (
                <div key={color.hex} className="group">
                  <div
                    className="w-24 h-24 rounded-lg border border-border mb-3 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-foreground font-body text-xs font-medium">{color.name}</p>
                  <p className="text-muted-foreground font-body text-xs">{color.hex}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Typography */}
          <Section>
            <p className="text-foreground font-display text-sm tracking-[0.2em] uppercase mb-6">
              Typography System
            </p>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="border border-border rounded-xl p-8">
                <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-3">
                  Primary — Headlines
                </p>
                <p className="font-display text-4xl font-bold">{project.typographyPrimary}</p>
                <p className="font-display text-xl text-muted-foreground mt-2">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
              </div>
              <div className="border border-border rounded-xl p-8">
                <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-3">
                  Secondary — Body
                </p>
                <p className="font-body text-4xl font-bold">{project.typographySecondary}</p>
                <p className="font-body text-xl text-muted-foreground mt-2">
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Full identity images */}
        <div className="w-full flex flex-col">
          {project.identityImages?.map((img, idx) => (
            <Section key={idx}>
              <img
                src={img}
                alt={`Visual identity system ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </Section>
          ))}
        </div>
      </section>

      {/* ─── REAL-WORLD APPLICATIONS ─── */}
      {project.applicationsImages && project.applicationsImages.length > 0 && (
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12 mb-16">
            <Section>
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                Applications
              </p>
              <DynamicHeading
                heading={project.applicationsHeading}
                defaultStart="Brand in "
                defaultSpecial="Context"
                className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
              />
            </Section>
          </div>

          <div className="w-full flex flex-col">
            {project.applicationsImages.map((img, idx) => (
              <Section key={idx}>
                <img
                  src={img}
                  alt={`Real-world brand applications ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </Section>
            ))}
          </div>
        </section>
      )}

      {/* ─── RESULTS ─── */}
      <section className="py-24 hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <Section>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              Results & Impact
            </p>
            <DynamicHeading
              heading={project.resultsHeading}
              defaultStart="Measurable "
              defaultSpecial="Impact"
              className="font-display text-3xl md:text-5xl font-bold leading-tight mb-16 max-w-3xl"
            />
          </Section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((r, i) => (
              <Section key={r.label} delay={i * 0.1}>
                <div className="border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors duration-300">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {r.value}
                  </p>
                  <p className="text-muted-foreground font-body text-sm">{r.label}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEXT / PREV NAVIGATION ─── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to={`/project/${prev.slug}`}
              className="group flex flex-col p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <p className="text-muted-foreground font-display text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                <ArrowLeft size={14} /> Previous Project
              </p>
              <p className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                {prev.title}
              </p>
              <p className="text-muted-foreground font-body text-sm mt-1">{prev.category}</p>
            </Link>

            <Link
              to={`/project/${next.slug}`}
              className="group flex flex-col items-end text-right p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <p className="text-muted-foreground font-display text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                Next Project <ArrowRight size={14} />
              </p>
              <p className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                {next.title}
              </p>
              <p className="text-muted-foreground font-body text-sm mt-1">{next.category}</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-primary font-display text-sm tracking-[0.2em] uppercase hover:gap-3 transition-all duration-300"
            >
              View All Projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Onoja Enemona Isaac. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
