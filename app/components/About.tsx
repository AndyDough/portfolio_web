import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage src="https://github.com/shadcn.png" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I love working with modern technologies to bring ideas to life. When I'm not coding, you can find me exploring new hiking trails.
          </p>
        </div>
      </div>
    </section>
  );
}
