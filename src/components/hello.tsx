/* eslint-disable @next/next/no-img-element */

'use client'
import { Permanent_Marker, Caveat, Lilita_One } from "next/font/google";
import NavBar from "./navBar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const googleFontMarker = Permanent_Marker({ subsets: ["latin"], weight: '400' });
const googleFontLilita = Lilita_One({ subsets: ["latin"], weight: '400' });

function Hello() {
  return (
    <main className="flex min-w-80 bg-slate-blue">

      <div className="z-0 bg-light-fade min-h-screen w-2/4 max-w-330" >
        <img
          className="ml-10 mt-10"
          src="https://readme-typing-svg.demolab.com?font=Permanent+Marker&size=50&pause=1000&color=7A69EF&random=false&width=435&height=100&lines=Elielton"
          alt="Typing SVG"
        />
        <DotLottieReact
          className="mr-180n w-48"
          src="./animations/desktop.lottie"
          loop
          autoplay
          width={800}
          height={800}
        />
      </div>

      <NavBar />
      <div className="min-h-screen w-3/5 flex flex-col itens-center mt-20 ml-10">
        <p className={`${googleFontMarker.className} rotate-[-3deg] py-3 md:py-8 text-responsive`}>👋 Olá, eu me chamo Elielton</p>
        <p className={`${googleFontLilita.className} text-responsive`}>Sou Desenvolvedor Web Full Stack apaixonado por tecnologia.
          <br />
          Estou sempre à procura de oportunidades, formado na Trybe, tenho conhecimentos em JavaScript, TypeScript, Kotlin e Python
        </p>
        <div className="flex">
          <DotLottieReact
            className="w-28"
            src="./animations/javascript.json"
            loop
            autoplay
            width={800}
            height={800}
          />
          <DotLottieReact
            className="w-28"
            src="./animations/kotlin.lottie"
            loop
            autoplay
            width={800}
            height={800}
          />
          <DotLottieReact
            className="w-28"
            src="./animations/python.lottie"
            loop
            autoplay
            width={800}
            height={800}
          />
          <DotLottieReact
            className="w-24"
            src="./animations/react.lottie"
            loop
            autoplay
            width={800}
            height={800}
          />
          <DotLottieReact
            className="w-24"
            src="./animations/docker.lottie"
            loop
            autoplay
            width={800}
            height={800}
          />
        </div>
        <div className="flex">
          <img
            className="w-20 h-20 mt-3"
            src="./animations/typescript.gif"
            alt="typescript"
          />
          <img
            className="h-28"
            src="./linux.png"
            alt="linux"
          />
        </div>
      </div>

    </main>
  )
}

export default Hello;