import CardProject from "@/components/cardProject";

function Projects() {
  return (
    <main className="min-h-screen min-w-screen bg-lilac">
      <h1 className="text-4xl font-bold">Projetos</h1>
      <section className="flex items-center justify-center">
        <CardProject
          name="Login Social"
          description="Uma plataforma onde e possivel fazer posts"
          typeProject="Project Fullstack"
          image="/loginSocial.png"
          repo="https://github.com/ElieltonRamos/project-fullstack-login-social"
          deploy="login-social-one.vercel.app/"
        />
      </section>
    </main>
  )
}

export default Projects;