import React from "react";
import { useTranslation } from "react-i18next";

import SectionHeading from "./SectionHeading";
import CategoryCard from "./CategoryCard";

const StitchCategoriesSection = () => {
  const { t } = useTranslation();

  const categories = [
    {
      emoji: "👔",
      title: t("home.categories.shirt"),
      price: t("home.categories.shirtPrice"),
    },
    {
      emoji: "👖",
      title: t("home.categories.pants"),
      price: t("home.categories.pantsPrice"),
    },
    {
      emoji: "👗",
      title: t("home.categories.dress"),
      price: t("home.categories.dressPrice"),
    },
    {
      emoji: "🤵",
      title: t("home.categories.suit"),
      price: t("home.categories.suitPrice"),
    },
    {
      emoji: "🥻",
      title: t("home.categories.ethnic"),
      price: t("home.categories.ethnicPrice"),
    },
    {
      emoji: "👦",
      title: t("home.categories.kids"),
      price: t("home.categories.kidsPrice"),
    },
    {
      emoji: "✂️",
      title: t("home.categories.alteration"),
      price: t("home.categories.alterationPrice"),
    },
  ];

  return (
    <section className="bg-[#fffaf0]">
      <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <SectionHeading>
          {t("home.whatToStitch")}
        </SectionHeading>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StitchCategoriesSection;