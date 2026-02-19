export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl font-bold">Min-Commerce</h1>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              Catálogo
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              Ofertas
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              Contacto
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
