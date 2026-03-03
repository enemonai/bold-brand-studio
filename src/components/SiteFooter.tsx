const SiteFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg font-bold tracking-tight">
          ONOJA<span className="text-primary">.</span>
        </p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Onoja Enemona Isaac. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
