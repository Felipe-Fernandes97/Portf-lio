interface SideNavProps {
  activeSection: number
  onNavigate: (index: number) => void
}

const sections = ['Início', 'Sobre Mim', 'Tech Stack', 'Projetos', 'Experiência']

export default function SideNav({ activeSection, onNavigate }: SideNavProps) {
  return (
    <nav className="fixed right-[40px] top-1/2 -translate-y-1/2 z-[1000] flex flex-col gap-5">
      {sections.map((label, i) => (
        <div
          key={i}
          className={`nav-dot rounded-full cursor-pointer transition-all duration-300 relative hover:bg-white/60 hover:scale-130 ${
            activeSection === i
              ? 'bg-[#e5e7eb] shadow-[0_0_15px_#e5e7eb] w-4 h-4'
              : 'bg-white/30 w-3 h-3'
          }`}
          data-tooltip={label}
          onClick={() => onNavigate(i)}
        />
      ))}
    </nav>
  )
}
