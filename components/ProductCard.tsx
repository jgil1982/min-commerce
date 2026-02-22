'use client';

import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${
        !product.inStock ? 'opacity-60' : ''
      }`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Agotado
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
            {product.category}
          </span>
          {product.inStock && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-green-600 font-medium">Disponible</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>

        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
