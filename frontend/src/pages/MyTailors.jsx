import React from "react";
import {
  Heart,
  MapPin,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyTailors = () => {
  const tailors = [
    {
      name: "Royal Stitch Studio",
      specialty: "Men's Wear",
      location: "Vaishali Nagar",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Perfect Fit Tailors",
      specialty: "Ladies Wear",
      location: "Malviya Nagar",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Cuts",
      specialty: "Suits & Blazers",
      location: "C-Scheme",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
            <Heart
              size={21}
              className="fill-red-500"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-400">
              YOUR COLLECTION
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-950">
              My Tailors
            </h1>
          </div>

        </div>

        <p className="mt-4 text-gray-500">
          Your trusted tailoring professionals in one place.
        </p>


        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {tailors.map((tailor) => (
            <div
              key={tailor.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >

              <div className="relative h-52 overflow-hidden">

                <img
                  src={tailor.image}
                  alt={tailor.name}
                  className="h-full w-full object-cover"
                />

                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm">

                  <Heart
                    size={18}
                    className="fill-red-500 text-red-500"
                  />

                </button>

              </div>


              <div className="p-5">

                <h2 className="font-semibold text-gray-950">
                  {tailor.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {tailor.specialty}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={13} />
                    {tailor.location}
                  </span>

                  <span className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                    <Star
                      size={13}
                      className="fill-amber-400 text-amber-400"
                    />
                    {tailor.rating}
                  </span>

                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800">

                  <Phone size={15} />

                  Call Tailor

                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
      <Footer></Footer>
    </div>
  );
};

export default MyTailors;