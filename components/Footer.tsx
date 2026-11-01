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
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>Código de Conducta • Política de Privacidad</p>
        </div>
      </div>
    </footer>
  );
}
