import { Pacifico, Permanent_Marker } from "next/font/google";
import Image from "next/image";

const pacifico = Permanent_Marker({ subsets: ["latin"], weight: '400' });

function Home() {
  return (
    <main className="flex min-w-80">

      <Image className="fixed" src="./desktop.svg" width={300} height={300} alt="desktop-ilustration" />

      <div className="bg-light-fade min-h-screen w-1/4" >
        <Image src="./nome.svg" alt="name" width={300} height={300} />
      </div>

      <div className="bg-slate-blue min-h-screen w-3/4">

        <nav>
          <button>Home</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </nav>

        <section>
          <p>👋 Hi, I am Elielton</p>
          <p>I am a software engineer and I love to build things.</p>
        </section>

      </div>

    </main>
  )
}

export default Home;