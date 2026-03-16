export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          Amiro <span className="text-purple font-medium">Health</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#features" className="text-sm font-medium text-text-secondary hover:text-text transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-sm font-medium text-text-secondary hover:text-text transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-text transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a href="#contact" className="btn-primary">
              Book a Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
