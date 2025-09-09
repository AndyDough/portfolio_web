import { Badge } from "@/components/ui/badge";

const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"];
const backendSkills = ["Node.js", "Express", "Python", "FastAPI"];
const tools = ["Git", "Docker", "Figma", "Vercel"];

export function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Frontend</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {frontendSkills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Backend</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {backendSkills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Tools & Platforms</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {tools.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
