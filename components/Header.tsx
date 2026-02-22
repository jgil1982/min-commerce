'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

export default function Header() {
  const { totalItems } = useCart();
  const { data: session, status } = useSession();

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
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
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

            {status === 'loading' ? (
              <div className="w-24 h-8 bg-gray-700 rounded-lg animate-pulse" />
            ) : status === 'authenticated' ? (
              <div className="flex items-center gap-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name ?? 'Usuario'}
                    className="w-8 h-8 rounded-full border-2 border-blue-400"
                  />
                )}
                <span className="text-sm text-gray-300 hidden sm:block">
                  {session.user?.name}
                </span>
                <SignOutButton />
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
