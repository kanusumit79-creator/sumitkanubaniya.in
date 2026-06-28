export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sumit Kanu Baniya. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href="#home" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
