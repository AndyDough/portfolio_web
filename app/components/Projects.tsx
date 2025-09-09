import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projectData = [
  {
    title: "Project One",
    description: "A brief description of the first project, highlighting its purpose and key features.",
    image: "https://placehold.co/600x400/0a0a0a/ededed?text=Project+One",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of the second project, highlighting its purpose and key features.",
    image: "https://placehold.co/600x400/0a0a0a/ededed?text=Project+Two",
    stack: ["React", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projectData.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-t-lg object-cover w-full aspect-video"/>
                <CardTitle className="pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
