import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const blocks = [
  {
    icon: 'fa-solid fa-graduation-cap',
    text: 'Tenho 21 anos e estou no último período da faculdade de Análise e Desenvolvimento de Sistemas.'
  },
  {
    icon: 'fa-solid fa-code',
    text: 'Sou Desenvolvedor Full Stack e Engenheiro de Prompt, com foco em automação e desenvolvimento de sistemas.'
  },
  {
    icon: 'fa-solid fa-robot',
    text: 'Atualmente atuo como Suporte de IA, trabalhando na criação, manutenção e suporte técnico de soluções inteligentes, além do desenvolvimento de sistemas internos voltados à otimização de processos e à melhoria da tomada de decisão.'
  },
  {
    icon: 'fa-solid fa-brain',
    text: 'Possuo conhecimento em desenvolvimento de sistemas e engenharia de prompt, criando e otimizando prompts para aumentar a performance, precisão e confiabilidade de modelos de IA aplicados a diferentes contextos de negócio.'
  }
]

export default function AboutMe() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useScrollAnimation(titleRef, 'fade-up')
  useScrollAnimation(contentRef, 'fade-up')

  return (
    <section id="section-1" className="min-h-screen flex flex-col justify-center py-10 px-10">
      <div className="max-w-[900px] mx-auto w-full">
        <h2 ref={titleRef} className="text-center text-[2.5rem] text-white mb-15 scroll-animate fade-up">
          Sobre Mim
        </h2>
        <div ref={contentRef} className="space-y-8 scroll-animate fade-up">
          {blocks.map((block, i) => (
            <div key={i} className="flex gap-5 group">
              {/* Barra vertical + ícone */}
              <div className="flex flex-col items-center pt-1">
                <i className={`${block.icon} text-white/40 text-sm mb-2 group-hover:text-white/80 transition-colors duration-300`} />
                <div className="w-[2px] flex-1 bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/50 transition-all duration-500" />
              </div>
              {/* Texto */}
              <p className="text-[1.1rem] leading-[1.8] text-[#e5e7eb]/80 text-justify group-hover:text-[#e5e7eb] transition-colors duration-300">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
