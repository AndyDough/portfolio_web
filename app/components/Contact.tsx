import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Connect</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          I'm always open to discussing new projects and opportunities. Feel free to reach out!
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <a href="mailto:your-email@example.com">Say Hello</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
