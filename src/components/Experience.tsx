import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface TimelineItem {
  icon: string
  title: string
  company: string
  period: string
  tasks: string[]
}

const experiences: TimelineItem[] = [
  {
    icon: 'fa-solid fa-headset',
    title: 'Suporte Técnico',
    company: 'Multi360',
    period: 'Jul 2025 – Sep 2025',
    tasks: [
      'Criação e configuração de Chatbot',
      'Suporte às funcionalidades da plataforma',
      'Treinamento de plataforma'
    ]
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'Suporte – Engenheiro de Prompt IA',
    company: 'Multi360',
    period: 'Nov 2025 – Present',
    tasks: [
      'Manutenção e suporte técnico de soluções inteligentes',
      'Desenvolvimento de sistemas internos que otimizam processos e melhoram a tomada de decisão',
      'Criando e otimizando prompts para melhorar a performance'
    ]
  }
]

export default function Experience() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useScrollAnimation(titleRef, 'fade-up')
  useScrollAnimation(timelineRef, 'fade-up')

  return (
    <section id="section-4" className="min-h-screen flex flex-col justify-center py-10 px-10">
      <h2 ref={titleRef} className="text-center text-[2.5rem] text-white mb-15 scroll-animate fade-up">
        Experiência Profissional
      </h2>

      <div ref={timelineRef} className="relative max-w-[700px] mx-auto w-full scroll-animate fade-up">
        {/* Linha vertical central */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/5 via-white/20 to-white/5" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-14 group">
              {/* Dot na timeline */}
              <div className="absolute left-[10px] top-1 w-[20px] h-[20px] rounded-full border-2 border-white/30 bg-[#050508] flex items-center justify-center group-hover:border-white/70 transition-colors duration-300">
                <div className="w-[8px] h-[8px] rounded-full bg-white/30 group-hover:bg-white/80 transition-colors duration-300" />
              </div>

              {/* Conteúdo */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <i className={`${exp.icon} text-white/50 text-[1.1rem] group-hover:text-white/90 transition-colors duration-300`} />
                  <h3 className="text-white text-[1.4rem] font-semibold">{exp.title}</h3>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/60 text-[0.95rem]">{exp.company}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/40 text-[0.9rem]">{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-white/60 text-[1rem] leading-[1.7] group-hover:text-white/80 transition-colors duration-300">
                      <span className="text-white/30 mt-[2px] flex-shrink-0">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
