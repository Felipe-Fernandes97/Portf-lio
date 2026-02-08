interface HeaderProps {
  visible: boolean
}

export default function Header({ visible }: HeaderProps) {
  return (
    <header
      className={`fixed top-[30px] left-[40px] right-[40px] z-[1000] flex justify-between items-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-[1.8rem] font-bold text-white tracking-[0.5px]">
        Felipe Fernandes
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/felipe-fernandes-467435238/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-[50px] h-[50px] flex items-center justify-center bg-transparent text-white text-[1.5rem] transition-all duration-300 hover:bg-white/20 hover:-translate-y-[5px] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)]"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/Felipe-Fernandes97"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="w-[50px] h-[50px] flex items-center justify-center bg-transparent text-white text-[1.5rem] transition-all duration-300 hover:bg-white/20 hover:-translate-y-[5px] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)]"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5519992536793&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="w-[50px] h-[50px] flex items-center justify-center bg-transparent text-white text-[1.5rem] transition-all duration-300 hover:bg-white/20 hover:-translate-y-[5px] hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)]"
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
      </div>
    </header>
  )
}
