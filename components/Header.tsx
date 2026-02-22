'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold">Min-Commerce</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Catálogo
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span>Carrito</span>
              {totalItems > 0 && (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
