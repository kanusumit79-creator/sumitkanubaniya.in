const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Python', 'Node.js'
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Hey, I'm <span className="text-purple-400 font-semibold">Sumit Kanu Baniya</span>. I'm just a newbie who's passionate about technology and building things for the web.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm currently learning full-stack web development, exploring React, and picking up new skills every day. This portfolio is my little corner of the internet to document my journey.
            </p>
            <p className="text-gray-500 leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, reading about startups, or planning my next project. I believe every expert was once a beginner — and I'm owning the journey.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 gradient-border">
            <h3 className="text-white font-semibold text-lg mb-4">Currently Learning</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Web Development</span>
                  <span className="text-purple-400">40%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">React</span>
                  <span className="text-purple-400">30%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-purple-400">35%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[35%] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center text-white font-semibold text-xl mb-6">Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-sm glass text-gray-300 hover:text-purple-400 hover:border-purple-500/30 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
