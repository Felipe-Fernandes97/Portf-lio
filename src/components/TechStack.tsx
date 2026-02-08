import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../data/skills'

function TechItem({ name, icon, isImage, level = 1 }: { name: string; icon: string; isImage?: boolean; level?: number }) {
  return (
    <div
      className="flex flex-col items-center gap-[15px] min-w-[120px] transition-all duration-300 hover:scale-120 hover:!opacity-100"
      style={{ opacity: level }}
    >
      {isImage ? (
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain transition-all duration-300 brightness-0 invert"
        />
      ) : (
        <i className={`${icon} text-[4rem] text-white transition-all duration-300`} />
      )}
      <span className="text-white text-base font-semibold text-center">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollAnimation(titleRef, 'fade-up')
  useScrollAnimation(containerRef, 'fade-up')

  const midPoint = Math.ceil(skills.length / 2)
  const row1 = skills.slice(0, midPoint)
  const row2 = skills.slice(midPoint)

  const tripled1 = [...row1, ...row1, ...row1]
  const tripled2 = [...row2, ...row2, ...row2]

  return (
    <section id="section-2" className="min-h-screen flex flex-col justify-center py-10 overflow-hidden">
      <h2 ref={titleRef} className="text-center text-[2.5rem] text-white mb-15 scroll-animate fade-up">
        Tech Stack & Skills
      </h2>
      <div ref={containerRef} className="w-full overflow-hidden py-10 flex flex-col gap-10 scroll-animate fade-up">
        <div className="tech-marquee-row-left flex gap-20 w-fit">
          {tripled1.map((skill, i) => (
            <TechItem key={`r1-${i}`} {...skill} />
          ))}
        </div>
        <div className="tech-marquee-row-right flex gap-20 w-fit">
          {tripled2.map((skill, i) => (
            <TechItem key={`r2-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
