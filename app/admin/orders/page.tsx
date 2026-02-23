import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "@/types/product";

export default async function AdminOrdersPage() {
  const session = await auth();

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/");
  }

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { name: true, email: true },
      },
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <a
          href="/admin"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Panel admin
        </a>
        <h1 className="text-3xl font-bold text-gray-900">Órdenes</h1>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-500">
          No hay órdenes registradas.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const items = order.items as unknown as CartItem[];
            return (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-900">{order.user.name ?? order.user.email}</p>
                    <p className="text-sm text-gray-500">{order.user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">{formatPrice(order.total)}</p>
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400 mb-3">
                    {new Date(order.createdAt).toLocaleString("es-ES")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {item.name} × {item.quantity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
