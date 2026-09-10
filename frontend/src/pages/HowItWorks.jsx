import React from "react";
import {
  Search,
  Phone,
  Ruler,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={23} />,
      title: "Find a tailor",
      text: "Search for skilled tailors near your location and explore their profiles.",
    },
    {
      number: "02",
      icon: <Phone size={23} />,
      title: "Connect directly",
      text: "Call the tailor directly to discuss your requirements and preferences.",
    },
    {
      number: "03",
      icon: <Ruler size={23} />,
      title: "Share measurements",
      text: "Use saved measurements or choose the measurement method that works for you.",
    },
    {
      number: "04",
      icon: <CheckCircle2 size={23} />,
      title: "Get your perfect fit",
      text: "Place your order and work directly with your chosen tailor.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HEADER */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold tracking-wider text-gray-400">
            SIMPLE PROCESS
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            How MeraTailor Works
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            From discovering a tailor to getting your perfect
            fit, everything starts in a few simple steps.
          </p>

        </div>

      </section>


      {/* IMAGE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="relative h-[380px] overflow-hidden rounded-3xl">

          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=85"
            alt="Tailoring process"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gray-950/30" />

          <div className="absolute bottom-8 left-8 max-w-lg text-white">

            <h2 className="text-3xl font-bold">
              Your tailor is closer than you think.
            </h2>

            <p className="mt-3 text-gray-200">
              Discover local craftsmanship through MeraTailor.
            </p>

          </div>

        </div>

      </section>


      {/* STEPS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold text-gray-300">
                  {step.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white">
                  {step.icon}
                </div>

              </div>

              <h2 className="mt-8 text-lg font-semibold text-gray-950">
                {step.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </section>
      <Footer/>

    </div>
  );
};

export default HowItWorks;