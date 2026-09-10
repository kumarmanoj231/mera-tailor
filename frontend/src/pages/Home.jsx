import React from "react";

import {
  ArrowRight,
  MapPin,
  Search,
  Phone,
  Heart,
  Users,
  Navigation,
  LocateFixed,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

import {
  useClerk,
  useUser,
} from "@clerk/react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

  /* =========================================================
     CLERK
  ========================================================= */

  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();

  const handleSignIn = () => {
    openSignIn();
  };

  const handleSignUp = () => {
    openSignUp();
  };

  /* =========================================================
     LOCATION STATE
  ========================================================= */

  const [location, setLocation] = React.useState(null);
  const [locationLoading, setLocationLoading] =
    React.useState(false);
  const [locationError, setLocationError] =
    React.useState("");

  /* =========================================================
     DETECT LOCATION
  ========================================================= */

  const detectLocation = () => {

    if (!navigator.geolocation) {

      setLocationError(
        "Location detection is not supported by your browser."
      );

      return;
    }

    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const {
          latitude,
          longitude,
        } = position.coords;

        try {

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error(
              "Unable to retrieve address"
            );
          }

          const data =
            await response.json();

          const address =
            data.address || {};

          const detectedLocation = {
            latitude,
            longitude,

            address:
              data.display_name || "",

            pincode:
              address.postcode ||
              "Not available",

            locality:
              address.suburb ||
              address.neighbourhood ||
              address.city_district ||
              address.village ||
              address.town ||
              "",

            city:
              address.city ||
              address.town ||
              address.municipality ||
              address.county ||
              "",

            state:
              address.state || "",

            country:
              address.country || "",
          };

          setLocation(
            detectedLocation
          );

        } catch (error) {

          console.error(
            "Reverse geocoding error:",
            error
          );

          setLocationError(
            "We found your location, but couldn't retrieve the address. Please try again."
          );

        } finally {

          setLocationLoading(false);

        }
      },

      (error) => {

        setLocationLoading(false);

        switch (error.code) {

          case 1:

            setLocationError(
              "Location access is blocked for MeraTailor. Please allow location access in your browser settings and try again."
            );

            break;

          case 2:

            setLocationError(
              "We couldn't determine your location. Please check your device location settings and try again."
            );

            break;

          case 3:

            setLocationError(
              "Location detection took too long. Please try again."
            );

            break;

          default:

            setLocationError(
              "Something went wrong while detecting your location."
            );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000,
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-gray-950">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          LOCATION SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f7efe7]">

        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full border-[40px] border-[#8f2338]/5" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full border-[50px] border-[#d9a45f]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            {/* =================================================
                LEFT
            ================================================== */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#8f2338]/10 bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#8f2338] shadow-sm">

                <LocateFixed size={14} />

                TAILORS AROUND YOU

              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">

                Find the right tailor

                <span className="block text-[#8f2338]">
                  near your location.
                </span>

              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">

                Tell MeraTailor where you are and we'll help
                you discover tailoring professionals around you.

                <span className="font-medium text-gray-800">
                  {" "}No need to type your address.
                </span>

              </p>

              <div className="mt-7 space-y-3">

                <LocationBenefit
                  icon={<MapPin size={15} />}
                  text="Tailors based on your nearby area"
                />

                <LocationBenefit
                  icon={<Search size={15} />}
                  text="Find specialists for your outfit"
                />

                <LocationBenefit
                  icon={<Phone size={15} />}
                  text="Connect directly with your tailor"
                />

              </div>

            </div>

            {/* =================================================
                LOCATION CARD
            ================================================== */}

            <div className="relative">

              <div className="overflow-hidden rounded-[28px] border border-white bg-white p-5 shadow-xl shadow-[#8f2338]/5 sm:p-7">

                {!location ? (

                  <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8f2338]/5 text-[#8f2338]">

                      <MapPin
                        size={29}
                        strokeWidth={1.7}
                      />

                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-950">
                      Where are you located?
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">

                      Allow location access and we'll
                      automatically find your area and PIN code.

                    </p>

                    <button
                      type="button"
                      onClick={detectLocation}
                      disabled={locationLoading}
                      className="
                        mt-6 inline-flex w-full items-center
                        justify-center gap-2 rounded-xl
                        bg-[#8f2338] px-5 py-3.5
                        text-sm font-semibold text-white
                        shadow-lg shadow-[#8f2338]/15
                        transition hover:bg-[#761d2f]
                        disabled:cursor-not-allowed
                        disabled:opacity-70 sm:w-auto
                      "
                    >

                      {locationLoading ? (

                        <>
                          <LoaderCircle
                            size={17}
                            className="animate-spin"
                          />

                          Detecting your location...
                        </>

                      ) : (

                        <>
                          <Navigation size={17} />

                          Detect My Location
                        </>

                      )}

                    </button>

                    <div className="mt-5 flex items-start justify-center gap-2 text-left">

                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />

                      <p className="max-w-sm text-[11px] leading-5 text-gray-400">

                        Your location is only used to help find
                        nearby tailors. Your exact location isn't
                        displayed to other users.

                      </p>

                    </div>

                  </div>

                ) : (

                  <div>

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

                          <CheckCircle2 size={21} />

                        </div>

                        <div>

                          <p className="text-xs font-semibold tracking-wide text-emerald-600">
                            LOCATION DETECTED
                          </p>

                          <h3 className="mt-0.5 text-lg font-bold text-gray-950">
                            You're here
                          </h3>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={detectLocation}
                        disabled={locationLoading}
                        className="
                          rounded-full border border-gray-200
                          p-2 text-gray-500 transition
                          hover:bg-gray-50 hover:text-gray-950
                          disabled:opacity-50
                        "
                        title="Refresh location"
                      >

                        {locationLoading ? (

                          <LoaderCircle
                            size={15}
                            className="animate-spin"
                          />

                        ) : (

                          <Navigation size={15} />

                        )}

                      </button>

                    </div>

                    <div className="mt-6 rounded-2xl bg-[#f7efe7] p-5">

                      <div className="flex gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#8f2338] shadow-sm">

                          <MapPin size={20} />

                        </div>

                        <div className="min-w-0">

                          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            Your Area
                          </p>

                          <p className="mt-1 text-lg font-bold text-gray-950">

                            {location.locality ||
                              location.city ||
                              "Your Location"}

                          </p>

                          <p className="mt-1 text-sm text-gray-500">

                            {location.city}

                            {location.state
                              ? `, ${location.state}`
                              : ""}

                          </p>

                        </div>

                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-white bg-white px-4 py-3">

                        <div>

                          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                            PIN CODE
                          </p>

                          <p className="mt-0.5 text-base font-bold tracking-wider text-gray-950">
                            {location.pincode}
                          </p>

                        </div>

                        <MapPin
                          size={18}
                          className="text-[#8f2338]"
                        />

                      </div>

                    </div>

                    {location.address && (

                      <div className="mt-4">

                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          DETECTED ADDRESS
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {location.address}
                        </p>

                      </div>

                    )}

                    <Link
                      to="/find-tailors"
                      className="
                        mt-6 flex w-full items-center
                        justify-center gap-2 rounded-xl
                        bg-gray-950 px-5 py-3.5
                        text-sm font-semibold text-white
                        transition hover:bg-gray-800
                      "
                    >

                      Find Tailors Near Me

                      <ArrowRight size={16} />

                    </Link>

                  </div>

                )}

                {/* =================================================
                    ERROR
                ================================================== */}

                {locationError && (

                  <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4">

                    <div className="flex items-start gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-500">

                        <MapPin size={15} />

                      </div>

                      <div className="min-w-0">

                        <p className="text-sm font-semibold text-red-700">
                          Location access needed
                        </p>

                        <p className="mt-1 text-xs leading-5 text-red-600">
                          {locationError}
                        </p>

                      </div>

                    </div>

                    <div className="mt-3 rounded-xl bg-white p-3">

                      <p className="text-xs font-semibold text-gray-700">
                        How to enable it
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">

                        Click the location or lock icon next to
                        the website address in your browser,
                        allow Location access, then click
                        "Try Again".

                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={detectLocation}
                      disabled={locationLoading}
                      className="
                        mt-4 inline-flex items-center gap-2
                        rounded-lg bg-red-600 px-4 py-2
                        text-xs font-semibold text-white
                        transition hover:bg-red-700
                        disabled:opacity-60
                      "
                    >

                      {locationLoading ? (

                        <LoaderCircle
                          size={13}
                          className="animate-spin"
                        />

                      ) : (

                        <Navigation size={13} />

                      )}

                      Try Again

                    </button>

                  </div>

                )}

              </div>

              {/* SECURITY BADGE */}

              <div className="
                absolute -bottom-4 -left-3 hidden
                rounded-xl border border-gray-100 bg-white
                px-4 py-3 shadow-lg
                sm:flex sm:items-center sm:gap-2
              ">

                <div className="
                  flex h-7 w-7 items-center justify-center
                  rounded-lg bg-emerald-50 text-emerald-600
                ">

                  <CheckCircle2 size={14} />

                </div>

                <span className="text-xs font-medium text-gray-600">
                  Private & secure
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 pb-10 sm:px-6 lg:px-8">

        <div className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[32px] bg-[#8f2338]
        ">

          <div className="
            absolute -right-20 -top-20 h-72 w-72
            rounded-full border-[50px] border-white/5
          " />

          <div className="
            absolute -bottom-32 -left-20 h-80 w-80
            rounded-full border-[60px] border-white/5
          " />

          <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20">

            <p className="text-xs font-bold tracking-[0.2em] text-[#e8c997]">
              YOUR NEXT OUTFIT STARTS HERE
            </p>

            <h2 className="
              mx-auto mt-4 max-w-3xl
              text-4xl font-bold tracking-tight text-white
              sm:text-5xl
            ">

              This wedding season,

              <span className="block text-[#f1d8b0]">
                find your tailor on MeraTailor.
              </span>

            </h2>

            <p className="
              mx-auto mt-5 max-w-xl
              text-sm leading-6 text-white/70 sm:text-base
            ">

              Discover skilled local tailors in Jaipur,
              connect directly and get the fit you actually want.

            </p>

            <Link
              to="/find-tailors"
              className="
                mt-8 inline-flex items-center gap-2
                rounded-full bg-white px-7 py-3.5
                text-sm font-semibold text-[#8f2338]
                transition hover:bg-gray-100
              "
            >

              Find My Tailor

              <ArrowRight size={17} />

            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM / SOLUTION
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold tracking-[0.2em] text-[#8f2338]">
              WEDDING SEASON IN JAIPUR
            </p>

            <h2 className="
              mt-4 text-3xl font-bold tracking-tight
              text-gray-950 sm:text-4xl
            ">

              The outfit matters.

              <span className="block text-gray-400">
                Finding the tailor shouldn't be difficult.
              </span>

            </h2>

            <p className="mt-5 leading-7 text-gray-500">

              Jaipur has talented tailors in every neighbourhood.
              The problem is finding the right one for your style,
              location and requirements.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <ProblemCard
              number="01"
              title="Search everywhere"
              text="Ask friends, visit shops or search randomly to find someone who can make what you want."
            />

            <ProblemCard
              number="02"
              title="Hard to compare"
              text="It can be difficult to know who specializes in sherwanis, blouses, suits, ethnic wear or alterations."
            />

            <ProblemCard
              number="03"
              title="Measurements get lost"
              text="Every new order often means explaining your measurements and preferences again."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          JAIPUR SECTION
      ====================================================== */}

      <section className="bg-white">

        <div className="
          mx-auto grid max-w-7xl gap-10 px-5 py-20
          sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8
        ">

          <div className="relative">

            <div className="overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85"
                alt="Jaipur architecture"
                className="h-[480px] w-full object-cover"
              />

            </div>

            <div className="
              absolute bottom-5 left-5
              rounded-2xl bg-white p-4 shadow-xl
            ">

              <div className="flex items-center gap-3">

                <div className="
                  flex h-10 w-10 items-center
                  justify-center rounded-xl
                  bg-[#8f2338] text-white
                ">

                  <MapPin size={18} />

                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    STARTING IN
                  </p>

                  <p className="font-semibold text-gray-950">
                    Jaipur, Rajasthan
                  </p>

                </div>

              </div>
            </div>
          </div>

          <div>

            <p className="text-xs font-bold tracking-[0.2em] text-[#8f2338]">
              BUILT FOR YOUR CITY
            </p>

            <h2 className="
              mt-4 text-4xl font-bold tracking-tight
              text-gray-950 sm:text-5xl
            ">

              Jaipur knows

              <span className="block text-[#8f2338]">
                good craftsmanship.
              </span>

            </h2>

            <p className="mt-5 leading-7 text-gray-600">

              From traditional Rajasthani clothing to modern
              wedding fashion, Jaipur has generations of tailoring
              expertise. MeraTailor simply makes that expertise
              easier to discover.

            </p>

            <div className="mt-8 space-y-4">

              <JaipurPoint
                icon={<Users size={18} />}
                title="Local professionals"
                text="Discover tailors in neighbourhoods you already know."
              />

              <JaipurPoint
                icon={<Phone size={18} />}
                title="Direct connection"
                text="Call and discuss your exact requirements."
              />

              <JaipurPoint
                icon={<Heart size={18} />}
                title="Build your favourites"
                text="Keep your trusted tailors close for future occasions."
              />

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer
        isSignedIn={isSignedIn}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />

    </div>
  );
};

/* =========================================================
   LOCATION BENEFIT
========================================================= */

const LocationBenefit = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600">

      <div className="
        flex h-8 w-8 items-center justify-center
        rounded-lg bg-white text-[#8f2338] shadow-sm
      ">
        {icon}
      </div>

      {text}

    </div>
  );
};

/* =========================================================
   PROBLEM CARD
========================================================= */

const ProblemCard = ({
  number,
  title,
  text,
}) => {
  return (
    <div className="
      rounded-2xl border border-gray-100
      bg-gray-50 p-7
    ">

      <span className="text-xs font-bold text-[#8f2338]">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-semibold text-gray-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
};

/* =========================================================
   JAIPUR POINT
========================================================= */

const JaipurPoint = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="flex gap-4">

      <div className="
        flex h-10 w-10 shrink-0 items-center
        justify-center rounded-xl
        bg-[#f7efe7] text-[#8f2338]
      ">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-gray-950">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {text}
        </p>

      </div>

    </div>
  );
};

export default Home;