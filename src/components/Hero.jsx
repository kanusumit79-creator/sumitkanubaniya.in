export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-8 inline-block">
          <div className="w-28 h-28 mx-auto rounded-full glass flex items-center justify-center overflow-hidden animate-float">
            <span className="text-4xl font-bold text-purple-400">SK</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-white">SUMIT KANU</span>{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            BANIYA
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-3 font-mono">
          &gt; just a newbie starter
        </p>

        <p className="text-base text-gray-500 mb-10 max-w-md mx-auto">
          Learning new skills, one line of code at a time. Exploring web development, programming, and building things from scratch.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg glass text-gray-300 font-medium text-sm hover:text-purple-400 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
