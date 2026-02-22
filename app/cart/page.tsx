'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mi Carrito</h1>
        <p className="text-gray-500 mb-8">El carrito está vacío</p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mi Carrito</h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-blue-600 font-medium">{formatPrice(item.price)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              <div className="text-right min-w-[90px]">
                <p className="font-bold text-gray-900">
                  {formatPrice(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 text-sm transition-colors mt-1"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen</h2>
            <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
              <span>Total</span>
              <span className="text-blue-600">{formatPrice(totalPrice)}</span>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Proceder al checkout
            </button>
            <Link
              href="/"
              className="block text-center mt-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
