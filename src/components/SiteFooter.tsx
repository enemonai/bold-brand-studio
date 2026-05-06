import enemonaLogo from "../assets/ENEMONA1.png";

const SiteFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <img src={enemonaLogo} alt="Onoja" className="h-[20px] w-auto" />
        </a>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Onoja Enemona Isaac. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
