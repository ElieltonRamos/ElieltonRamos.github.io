'use client'
import { Permanent_Marker, Caveat, Lilita_One } from "next/font/google";
import NavBar from "./navBar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const googleFontMarker = Permanent_Marker({ subsets: ["latin"], weight: '400' });
const googleFontLilita = Lilita_One({ subsets: ["latin"], weight: '400' });

function Hello() {
  return (
    <main className="flex min-w-80 bg-slate-blue">

      <div className="z-0 bg-light-fade min-h-screen w-2/4 max-w-330" >
        <Image
          className="ml-5 mt-10"
          width={435}
          height={100}
          src="https://readme-typing-svg.demolab.com?font=Permanent+Marker&size=180&pause=1000&color=7A69EF&random=false&width=740&height=275&lines=Elielton"
          unoptimized
          alt="Typing SVG"
        />
        <DotLottieReact
          className="mr-180n mt-16 w-40"
          src="./animations/desktop.lottie"
          loop
          autoplay
          width={300}
          height={300}
        />
      </div>

      <NavBar />
      <div className="min-h-screen w-3/5 flex flex-col itens-center mt-20 ml-10">
        <p className={`${googleFontMarker.className} rotate-[-3deg] py-3 md:py-8 text-responsive`}>👋 Olá, eu me chamo Elielton</p>
        <p className={`${googleFontLilita.className} text-responsive`}>Sou Desenvolvedor Web Full Stack apaixonado por tecnologia.
          <br />
          Estou sempre à procura de oportunidades, formado na Trybe, tenho conhecimentos em JavaScript, TypeScript, Kotlin e Python
        </p>

        <div className="flex flex-col md:flex-row w-full h-14 mt-5">
          <div className="flex">
            <DotLottieReact
              className="min-w-14 h-14"
              src="./animations/javascript.json"
              loop
              autoplay
              width={100}
              height={100}
            />
            <DotLottieReact
              className="min-w-14 h-14"
              src="./animations/kotlin.lottie"
              loop
              autoplay
              width={100}
              height={100}
            />
            <DotLottieReact
              className="min-w-14 h-14"
              src="./animations/python.lottie"
              loop
              autoplay
              width={100}
              height={100}
            />
            <DotLottieReact
              className="min-w-14 h-14"
              src="./animations/react.lottie"
              loop
              autoplay
              width={100}
              height={100}
            />
          </div>
          <div className="flex">
            <DotLottieReact
              className="min-w-14 h-14"
              src="./animations/docker.lottie"
              loop
              autoplay
              width={100}
              height={100}
            />
            <Image
              className="w-10 h-10 ml-3"
              src="/animations/typescript.gif"
              alt="typescript"
              width={40}
              height={40}
            />
            <Image
              className="w-10 h-12 ml-3 animate-bounce"
              src="/linux.png"
              alt="linux"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Hello;