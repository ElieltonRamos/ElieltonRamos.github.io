import CardProject from "@/components/cardProject";

function Projects() {
  return (
    <main className="min-h-screen min-w-screen bg-lilac">
      <h1 className="text-4xl font-bold">Projetos</h1>
      <section className="flex flex-col items-center justify-center">
        <CardProject />
      </section>
    </main>
  )
}

export default Projects;