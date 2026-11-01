export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            {['Youtube', 'Instagram', 'LinkedIn', 'Luma'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{item}</span>
                <span className="text-sm font-medium">{item}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col items-center space-y-4 text-center text-sm text-gray-400">
          <p>Código de Conducta • Política de Privacidad</p>
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-xs text-gray-400">
            <span>📦 Archivo histórico DevFest Santiago 2025</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>
              Sitio elaborado por{' '}
              <span className="text-gray-300 font-medium">GDG Santiago de Chile</span>{' '}
              en colaboración con{' '}
              <a
                href="https://github.com/erasmoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4285F4] hover:text-blue-300 font-medium hover:underline transition-colors"
              >
                Erasmo Hernandez (@erasmoh)
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
