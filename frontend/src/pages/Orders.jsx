import React from "react";
import {
  ShoppingBag,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
  const orders = [
    {
      id: "#MT-1024",
      item: "Custom Formal Shirt",
      tailor: "Royal Stitch Studio",
      date: "12 Sep 2026",
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "#MT-0987",
      item: "Traditional Kurta",
      tailor: "Perfect Fit Tailors",
      date: "28 Aug 2026",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "#MT-0942",
      item: "Blazer Alteration",
      tailor: "Classic Cuts",
      date: "16 Aug 2026",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
            <ShoppingBag size={20} />
          </div>

          <div>

            <p className="text-sm font-semibold text-gray-400">
              YOUR ACTIVITY
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-950">
              My Orders
            </h1>

          </div>

        </div>

        <p className="mt-4 text-gray-500">
          Track your tailoring orders and previous purchases.
        </p>


        <div className="mt-8 space-y-4">

          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
            >

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                <img
                  src={order.image}
                  alt={order.item}
                  className="h-28 w-full rounded-xl object-cover sm:h-24 sm:w-28"
                />

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="text-xs font-semibold text-gray-400">
                      {order.id}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        order.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {order.status === "Completed" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <Clock3 size={12} />
                      )}

                      {order.status}
                    </span>

                  </div>

                  <h2 className="mt-2 font-semibold text-gray-950">
                    {order.item}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {order.tailor}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Ordered {order.date}
                  </p>

                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">

                  View
                  <ArrowRight size={15} />

                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
      <Footer/>
    </div>
  );
};

export default Orders;