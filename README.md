# Min-Commerce

E-commerce moderno desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## Características

- ✅ TypeScript con tipado estricto
- ✅ Tailwind CSS para estilos responsivos
- ✅ App Router de Next.js
- ✅ Componentes tipados con interfaces
- ✅ Catálogo de productos con datos mock
- ✅ Layout con Header y Footer
- ✅ Cards de producto con indicadores de stock
- ✅ Formato de precios en soles peruanos (PEN)
- ✅ Grid responsivo (1/2/3 columnas)

## Estructura del Proyecto

```
min-commerce/
├── app/
│   ├── layout.tsx          # Layout principal con Header + Footer
│   ├── page.tsx            # Página del catálogo
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Barra de navegación
│   ├── Footer.tsx          # Footer del sitio
│   └── ProductCard.tsx     # Card de producto tipada
├── data/
│   └── products.ts         # Array de productos mock
├── types/
│   └── product.ts          # Interface Product
├── lib/
│   └── utils.ts            # Helper formatPrice()
└── public/                 # Recursos estáticos
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de Producción

```bash
npm run build
```

## Deploy

Este proyecto está listo para desplegarse en Vercel:

```bash
vercel
```

## Tecnologías

- Next.js 16.1.6
- React 19
- TypeScript 5
- Tailwind CSS 3
- ESLint

## Catálogo de Productos

El catálogo incluye 8 productos en 3 categorías:
- Tecnología (4 productos)
- Ropa (3 productos)
- Hogar (2 productos)

Cada producto tiene:
- Nombre y descripción
- Precio en soles (PEN)
- Imagen placeholder
- Categoría
- Indicador de disponibilidad

## Validación

✅ Sin errores de TypeScript
✅ Build exitoso
✅ Diseño responsivo
✅ Accesibilidad básica
✅ Código limpio y profesional
