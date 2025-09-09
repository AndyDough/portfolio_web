import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center py-20">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Hi, I'm [Your Name]
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        I build modern web experiences.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button>View My Work</Button>
      </div>
    </section>
  );
}
