import CardProject from "@/components/cardProject";
import projects from "@/data/projects";

function Projects() {
  return (
    <main className="min-h-screen min-w-screen bg-lilac">
      <h1 className="text-4xl font-bold">Projetos</h1>
      <section className="flex items-center justify-center">
        {projects.map((project) => (<CardProject key={project.name} {...project} />))}
      </section>
    </main>
  )
}

export default Projects;