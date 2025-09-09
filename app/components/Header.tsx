import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-bold">
          [Your Name]
        </a>
        <nav className="hidden md:flex gap-4">
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About</a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Projects</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contact</a>
        </nav>
        <Button asChild>
          <a href="/cv.pdf" download>Download CV</a>
        </Button>
      </div>
    </header>
  );
}
