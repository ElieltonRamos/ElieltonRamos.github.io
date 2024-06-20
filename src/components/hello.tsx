/* eslint-disable @next/next/no-img-element */
'use client'
import { Permanent_Marker, Caveat, Lilita_One } from "next/font/google";
import NavBar from "./navBar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const googleFontMarker = Permanent_Marker({ subsets: ["latin"], weight: '400' });
const googleFontLilita = Lilita_One({ subsets: ["latin"], weight: '400' });

function Hello() {
  return (
    <main className="flex flex-col sm:flex-row min-w-80 bg-slate-blue">

      <div className="z-0 bg-light-fade min-h-screen w-2/4 max-w-[330px]" >
        <img
          className="ml-10 mt-10"
          src="https://readme-typing-svg.demolab.com?font=Permanent+Marker&size=50&pause=1000&color=7A69EF&random=false&width=435&height=100&lines=Elielton"
          alt="Typing SVG"
        />
        <DotLottieReact
          className="mr-[-180px]"
          src="./AnimationDesktop.lottie"
          loop
          autoplay
          width={800}
          height={800}
        />
      </div>

      <div className="min-h-screen w-1/2 flex flex-col itens-center justify-around ml-[25%]">
        <section className="w-[85%]">
          <NavBar />
          <p className={`${googleFontMarker.className} rotate-[-3deg] pb-6 text-4xl`}>👋 Olá, eu me chamo Elielton</p>
          <p className={`${googleFontLilita.className} text-5xl`}>Sou Desenvolvedor Web Full Stack apaixonado por tecnologia, sempre à procura de oportunidades para enfrentar novos desafios e melhorar minhas habilidades em backend e frontend.</p>
        </section>
      </div>

    </main>
  )
}

export default Hello;