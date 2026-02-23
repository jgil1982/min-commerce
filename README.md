# Min-Commerce

E-commerce moderno construido con Next.js 16, NextAuth v5 y Prisma.

## Features

- OAuth login (GitHub)
- Shopping cart
- Role-based access control
- Admin dashboard
- Orders persistence
- Protected routes
- Prisma + PostgreSQL

## Roles

| Rol   | Acceso                              |
|-------|-------------------------------------|
| USER  | Compra productos, ve sus órdenes    |
| ADMIN | Panel de administración completo    |

## Rutas protegidas

| Ruta        | Acceso requerido |
|-------------|-----------------|
| `/cart`     | Autenticado     |
| `/checkout` | Autenticado     |
| `/orders`   | Autenticado     |
| `/admin/*`  | Rol ADMIN       |

## Stack

- **Framework**: Next.js 16 (App Router)
- **Auth**: NextAuth v5 (GitHub OAuth)
- **ORM**: Prisma 5
- **Base de datos**: PostgreSQL (Neon)
- **Estilos**: Tailwind CSS 4
- **Deploy**: Vercel

## Setup local

```bash
npm install
npx prisma db push
npm run dev
```

## Variables de entorno

```
DATABASE_URL=
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

## Admin Panel

Accede en `/admin` con un usuario con rol `ADMIN`.

Para promover un usuario a ADMIN:

```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'tu@email.com';
```

## Estructura del proyecto

```
min-commerce/
├── auth.ts                        # NextAuth + Prisma Adapter + role callback
├── middleware.ts                  # Protección de rutas
├── prisma/
│   └── schema.prisma             # User, Account, Session, Order + Role enum
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth handlers
│   │   └── orders/route.ts       # API de órdenes
│   ├── cart/page.tsx             # Carrito (protegida)
│   ├── checkout/page.tsx         # Checkout (protegida)
│   ├── orders/page.tsx           # Historial del usuario
│   └── admin/
│       ├── page.tsx              # Dashboard admin
│       └── orders/page.tsx       # Órdenes admin
├── components/
│   └── Header.tsx                # Con link Admin condicional
├── types/
│   └── next-auth.d.ts           # Augmentation para session.user.role
└── context/CartContext.tsx
```

## Deploy

Vercel + Neon PostgreSQL
