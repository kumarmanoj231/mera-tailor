import React from "react";
import {
  Building2,
  Package,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Bulk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white">

        <img
          src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=2000&q=85"
          alt="Garment production"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gray-950/70" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-300">
              <Building2 size={15} />
              MeraTailor for Business
            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl">
              Bulk clothing,
              <span className="block text-gray-500">
                made simpler.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Connect your business with skilled tailoring
              professionals for uniforms, collections and
              large-scale custom orders.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200">
              Post a Requirement
              <ArrowRight size={17} />
            </button>

          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          <BusinessCard
            icon={<Users size={23} />}
            title="Find the right tailor"
            text="Discover professionals who handle the type and scale of work your business needs."
          />

          <BusinessCard
            icon={<Package size={23} />}
            title="Get multiple quotes"
            text="Share your requirements and compare proposals from suitable tailors."
          />

          <BusinessCard
            icon={<Building2 size={23} />}
            title="Manage production"
            text="Keep your bulk orders organized from requirement to completion."
          />

        </div>

      </section>


      {/* PROCESS */}
      <section className="bg-gray-50">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold tracking-wider text-gray-400">
                FOR BUSINESSES
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-950">
                From requirement to production.
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  "Tell us what you need",
                  "Receive suitable tailor proposals",
                  "Compare and connect",
                  "Track your production",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-emerald-600"
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl">

              <img
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80"
                alt="Clothing production"
                className="h-[420px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      <Footer/>

    </div>
  );
};


const BusinessCard = ({
  icon,
  title,
  text,
}) => {
  return (
    <>
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 text-white">
        {icon}
      </div>

      <h2 className="mt-6 text-lg font-semibold text-gray-950">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>
    

    </div>

      
    </>
    
  );
};

export default Bulk;