'use client'
import Image from 'next/image';
import './style.css'
import Link from 'next/link';
import { redirect } from 'next/navigation';


type CardProjectProps = {
  name: string;
  description: string;
  typeProject: string;
  image: string;
  repo: string;
  deploy: string;
}

function CardProject({ name, description, typeProject, image, repo, deploy }: CardProjectProps) {

  return (
    <div className="card h-[357px] w-[275px]">
      <div className="card__title">{name}</div>
      <div className="card__img">
        <Image className='img-project rounded-lg border-2 border-blue-900 z-10' src={image} alt={name} width={275} height={200} />
      </div>
      <div className="card__subtitle">{typeProject}</div>
      <p className="z-10 text-xs">{description}</p>
      <div className="card__wrapper">
        <div className="card__icon">
          <Link href={deploy} target="_blank" rel="noopener noreferrer">
            <svg color="rgb(224, 223, 220)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(224, 223, 220)', flexShrink: 0, cursor: 'auto' }} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <g color="rgb(224, 223, 220)">
                <circle opacity="0.2" r="96" cy="128" cx="128">
                </circle>
                <circle stroke-width="16" stroke-miterlimit="10" stroke="rgb(224, 223, 220)" fill="none" r="96" cy="128" cx="128">
                </circle>
                <polyline stroke-width="16" stroke-linejoin="round" stroke-linecap="round" stroke="rgb(224, 223, 220)" fill="none" points="134.1 161.9 168 128 134.1 94.1">
                </polyline>
                <line stroke-width="16" stroke-linejoin="round" stroke-linecap="round" stroke="rgb(224, 223, 220)" fill="none" y2="128" x2="168" y1="128" x1="88">
                </line>
              </g>
            </svg>
          </Link>
        </div>
        <Link className='z-10' href={repo} target="_blank" rel="noopener noreferrer">
          <Image className='z-10 hover:bg-accent rounded-full bg-white cursor-pointer shadow-black shadow-md' src="/github.svg" alt="github" width={70} height={80} />
        </Link>
      </div>
    </div>
  );
}

export default CardProject;