import React, { useState } from "react";
import {
  MapPin,
  Star,
  Phone,
  Scissors,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tailors = [
  {
    name: "Royal Stitch Studio",
    location: "Vaishali Nagar",
    specialty: "Men's Wear",
    rating: "4.9",
    reviews: 128,
    distance: "1.2 km",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Perfect Fit Tailors",
    location: "Malviya Nagar",
    specialty: "Ladies Wear",
    rating: "4.8",
    reviews: 94,
    distance: "2.4 km",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Classic Cuts",
    location: "C-Scheme",
    specialty: "Suits & Blazers",
    rating: "4.7",
    reviews: 76,
    distance: "3.1 km",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Urban Stitch",
    location: "Mansarovar",
    specialty: "Custom Clothing",
    rating: "4.9",
    reviews: 156,
    distance: "4.2 km",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Gentleman's Tailor",
    location: "Raja Park",
    specialty: "Formal Wear",
    rating: "4.8",
    reviews: 83,
    distance: "4.8 km",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Needle & Thread",
    location: "Tonk Road",
    specialty: "Ethnic Wear",
    rating: "4.6",
    reviews: 61,
    distance: "5.3 km",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
  },
];

const FindTailors = () => {
  const [search, setSearch] = useState("");

  const filteredTailors = tailors.filter((tailor) =>
    `${tailor.name} ${tailor.location} ${tailor.specialty}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold tracking-wider text-gray-400">
            DISCOVER
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Find Tailors
          </h1>

          <p className="mt-4 text-gray-600">
            Discover skilled tailoring professionals near you
            and connect with them directly.
          </p>

        </div>


        {/* SEARCH */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

            <Search
              size={20}
              className="text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tailor, location or specialty..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

          </div>

          <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm">
            <SlidersHorizontal size={17} />
            Filters
          </button>

        </div>


        {/* RESULT COUNT */}
        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            {filteredTailors.length} tailors found
          </p>

          <button className="text-sm font-medium text-gray-700">
            Sort: Recommended
          </button>

        </div>


        {/* TAILOR GRID */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {filteredTailors.map((tailor) => (
            <div
              key={tailor.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-gray-100">

                <img
                  src={tailor.image}
                  alt={tailor.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur">
                  {tailor.distance}
                </div>

              </div>


              {/* CONTENT */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h2 className="font-semibold text-gray-950">
                      {tailor.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {tailor.specialty}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">

                    <Star
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />

                    {tailor.rating}

                  </div>

                </div>


                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">

                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {tailor.location}
                  </span>

                  <span>
                    {tailor.reviews} reviews
                  </span>

                </div>


                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                  <Phone size={15} />
                  View Tailor
                </button>

              </div>

            </div>
          ))}

        </div>


        {filteredTailors.length === 0 && (
          <div className="py-20 text-center">

            <Scissors
              size={42}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-5 font-semibold text-gray-950">
              No tailors found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try another search term.
            </p>

          </div>
        )}

      </main>
      <Footer/>
    </div>
  );
};

export default FindTailors;