import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Ruler,
  Heart,
  ShoppingBag,
  MapPin,
  MoreHorizontal,
  Plus,
  ArrowUpRight,
} from "lucide-react";

import { useUser } from "@clerk/react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Orders");

  const name = user?.fullName || "MeraTailor User";
  const email =
    user?.primaryEmailAddress?.emailAddress || "Welcome to MeraTailor";

  const tabs = [
    { name: "Orders", icon: ShoppingBag },
    { name: "Styles", icon: Heart },
    { name: "Measurements", icon: Ruler },
    { name: "Saved", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-950">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* SEARCH */}
        <div className="mx-auto max-w-4xl pt-6">
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition focus-within:border-gray-300 focus-within:shadow-sm">
            <Search
              size={20}
              strokeWidth={1.7}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search styles, tailors, orders..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* PROFILE */}
        <section className="mx-auto mt-5 max-w-4xl">
          {/* COVER */}
          <div className="relative h-48 overflow-hidden rounded-t-[28px] sm:h-60">
            {/* Base */}
            <div className="absolute inset-0 bg-[#e8d4b8]" />

            {/* Textile pattern */}
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 12% 25%, white 0 4px, transparent 5px),
                  radial-gradient(circle at 82% 28%, white 0 5px, transparent 6px),
                  radial-gradient(circle at 55% 75%, white 0 4px, transparent 5px),
                  linear-gradient(135deg, transparent 45%, rgba(255,255,255,.45) 46%, rgba(255,255,255,.45) 49%, transparent 50%),
                  linear-gradient(45deg, transparent 45%, rgba(255,255,255,.35) 46%, rgba(255,255,255,.35) 49%, transparent 50%)
                `,
                backgroundSize:
                  "95px 95px, 120px 120px, 85px 85px, 48px 48px, 48px 48px",
              }}
            />

            {/* Decorative arches */}
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[34px] border-white/30" />

            <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full border-[38px] border-white/20" />

            <div className="absolute right-8 top-7 hidden rounded-full bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 backdrop-blur sm:block">
              Jaipur • Tailoring
            </div>

            {/* More */}
            <button className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur transition hover:bg-white">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* PROFILE BODY */}
          <div className="rounded-b-[28px] bg-white px-5 pb-8 sm:px-8">
            {/* AVATAR + STATS */}
            <div className="relative flex items-end">
              {/* BIG AVATAR */}
              <div className="-mt-20 shrink-0 sm:-mt-24">
                <div className="relative">
                  <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-[6px] border-white bg-[#eee8dd] shadow-[0_6px_25px_rgba(0,0,0,0.12)] sm:h-44 sm:w-44">
                    {user?.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-4xl font-semibold text-gray-400">
                        {name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* VERIFIED */}
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-gray-950 shadow-sm">
                    <CheckCircle2
                      size={15}
                      strokeWidth={2.5}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="mb-3 ml-5 flex items-center gap-6 sm:ml-8 sm:gap-10">
                <Stat value="12" label="Orders" />
                <Stat value="08" label="Saved" />
                <Stat value="04" label="Styles" />
              </div>
            </div>

            {/* NAME + EDIT */}
            <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-[28px]">
                    {name}
                  </h1>

                  <CheckCircle2
                    size={19}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-gray-900"
                  />
                </div>

                <p className="mt-1 text-sm text-gray-400">{email}</p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
                Edit Profile
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* BIO */}
            <div className="mt-5 max-w-2xl">
              <p className="text-sm leading-6 text-gray-600">
                Your personal tailoring profile on MeraTailor. Discover
                styles, save your measurements, and create perfectly
                tailored outfits with Jaipur's tailoring community.
              </p>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                <MapPin size={13} />
                Jaipur, Rajasthan
              </div>
            </div>

            {/* TABS */}
            <div className="mt-7 border-b border-gray-100">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.name;

                  return (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`relative flex min-w-fit items-center gap-2 px-5 py-3.5 text-sm font-medium transition ${
                        active
                          ? "text-gray-950"
                          : "text-gray-400 hover:text-gray-700"
                      }`}
                    >
                      <Icon
                        size={15}
                        strokeWidth={active ? 2 : 1.7}
                      />

                      {tab.name}

                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gray-950" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TAB CONTENT */}
            <div className="pt-7">
              {activeTab === "Orders" && <Orders />}

              {activeTab === "Styles" && <Styles />}

              {activeTab === "Measurements" && <Measurements />}

              {activeTab === "Saved" && <Saved />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

/* =========================================================
   STAT
========================================================= */

const Stat = ({ value, label }) => {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold tracking-tight text-gray-950 sm:text-xl">
        {value}
      </p>

      <p className="mt-0.5 text-[11px] text-gray-400 sm:text-xs">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   ORDERS
========================================================= */

const Orders = () => {
  const orders = [
    {
      title: "Classic White Kurta",
      subtitle: "Custom Tailoring",
      status: "Delivered",
      date: "Aug 28, 2026",
    },
    {
      title: "Wedding Bandhgala",
      subtitle: "Made to Measure",
      status: "In Progress",
      date: "Sep 05, 2026",
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Recent Orders"
        description="Your latest tailoring orders."
        action="View all"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {orders.map((order) => (
          <OrderCard
            key={order.title}
            order={order}
          />
        ))}
      </div>
    </div>
  );
};

const OrderCard = ({ order }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:border-gray-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#eee9df]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-5 h-32 w-32 rounded-full border-[20px] border-white" />
          <div className="absolute right-[-20px] bottom-[-50px] h-40 w-40 rounded-full border-[18px] border-white" />
        </div>

        <div className="relative flex flex-col items-center">
          <ShoppingBag
            size={34}
            strokeWidth={1.2}
            className="text-gray-500"
          />

          <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            MeraTailor
          </span>
        </div>

        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-600 backdrop-blur">
          {order.status}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900">
          {order.title}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {order.subtitle}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[11px] text-gray-400">
            {order.date}
          </p>

          <button className="text-xs font-medium text-gray-600 transition hover:text-gray-950">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   STYLES
========================================================= */

const Styles = () => {
  const styles = [
    {
      title: "Royal Bandhgala",
      category: "Wedding",
      type: "Made to Measure",
    },
    {
      title: "Jaipuri Kurta",
      category: "Festive",
      type: "Custom Style",
    },
  ];

  return (
    <div>
      <SectionHeader
        title="My Styles"
        description="Styles you've created or ordered."
        action="Explore"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {styles.map((style) => (
          <div
            key={style.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#eee8de] p-6"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-white/40" />

            <div className="relative">
              <div className="mb-12 flex h-28 items-center justify-center">
                <ScissorsIcon />
              </div>

              <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-gray-500">
                {style.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {style.title}
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                {style.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScissorsIcon = () => {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white bg-white/70">
      <Ruler
        size={32}
        strokeWidth={1.2}
        className="text-gray-500"
      />
    </div>
  );
};

/* =========================================================
   MEASUREMENTS
========================================================= */

const Measurements = () => {
  const measurements = [
    ["Height", "5' 8\""],
    ["Chest", "40 in"],
    ["Waist", "34 in"],
    ["Shoulder", "18 in"],
    ["Sleeve", "24 in"],
    ["Neck", "15.5 in"],
  ];

  return (
    <div>
      <SectionHeader
        title="My Measurements"
        description="Your saved measurements for custom tailoring."
        action="Edit"
      />

      <div className="rounded-2xl border border-gray-100 bg-[#fafafa] p-4 sm:p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm">
            <Ruler size={18} strokeWidth={1.7} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Default measurements
            </p>

            <p className="mt-0.5 text-xs text-gray-400">
              Used automatically for repeat orders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {measurements.map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-gray-100 bg-white p-4"
            >
              <p className="text-[11px] text-gray-400">
                {label}
              </p>

              <p className="mt-1 text-base font-semibold text-gray-900">
                {value}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-4 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 transition hover:border-gray-300 hover:text-gray-900">
          <Ruler size={14} />
          Update Measurements
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   SAVED
========================================================= */

const Saved = () => {
  return (
    <div>
      <SectionHeader
        title="Saved Styles"
        description="Outfits and designs you've saved."
        action="Explore"
      />

      <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-[#fafafa] px-5 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
          <Heart
            size={19}
            strokeWidth={1.5}
          />
        </div>

        <p className="mt-4 text-sm font-semibold text-gray-700">
          No saved styles yet
        </p>

        <p className="mt-1 max-w-xs text-xs leading-5 text-gray-400">
          Save outfits and tailoring styles you love while
          exploring MeraTailor.
        </p>

        <button className="mt-5 flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-gray-800">
          <Plus size={14} />
          Explore Styles
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({
  title,
  description,
  action,
}) => {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-base font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {description}
        </p>
      </div>

      {action && (
        <button className="shrink-0 text-xs font-medium text-gray-500 transition hover:text-gray-950">
          {action}
        </button>
      )}
    </div>
  );
};

export default Profile;