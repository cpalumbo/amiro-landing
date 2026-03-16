export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[13px] text-text-secondary">
          &copy; 2026 Amiro Health. All rights reserved.
        </p>
        <ul className="flex gap-6">
          {[
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'hello@amiro.health', href: 'mailto:hello@amiro.health' },
          ].map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-[13px] text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
