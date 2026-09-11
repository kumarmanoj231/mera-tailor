import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionHeading from "./SectionHeading";
import FeaturedTailorCard from "./FeaturedTailorCard";

const FeaturedTailorsSection = () => {
  const { t } = useTranslation();

  const tailors = [
    {
      initials: "PN",
      name: t("home.featured.tailor1Name"),
      location: t("home.featured.tailor1Location"),
      description: t(
        "home.featured.tailor1Description"
      ),
      rating: "4.8",
      price: "₹450+",
      experience: t(
        "home.featured.tailor1Experience"
      ),
    },
    {
      initials: "PB",
      name: t("home.featured.tailor2Name"),
      location: t("home.featured.tailor2Location"),
      description: t(
        "home.featured.tailor2Description"
      ),
      rating: "4.9",
      price: "₹700+",
      experience: t(
        "home.featured.tailor2Experience"
      ),
    },
    {
      initials: "JH",
      name: t("home.featured.tailor3Name"),
      location: t("home.featured.tailor3Location"),
      description: t(
        "home.featured.tailor3Description"
      ),
      rating: "4.6",
      price: "₹1500+",
      experience: t(
        "home.featured.tailor3Experience"
      ),
    },
  ];

  return (
    <section className="bg-[#fffaf0]">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading>
            {t("home.featuredTailors")}
          </SectionHeading>

          <Link
            to="/find-tailors"
            className="
              hidden
              shrink-0
              items-center
              gap-1
              text-xs
              font-semibold
              text-[#6d3428]
              transition
              hover:text-[#8f2338]

              sm:flex
            "
          >
            {t("home.viewAll")}

            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-7 md:grid-cols-3 md:gap-4">
          {tailors.map((tailor) => (
            <FeaturedTailorCard
              key={tailor.initials}
              {...tailor}
            />
          ))}
        </div>

        <Link
          to="/find-tailors"
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-1.5
            text-xs
            font-semibold
            text-[#8f2338]

            sm:hidden
          "
        >
          {t("home.viewAll")}

          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTailorsSection;