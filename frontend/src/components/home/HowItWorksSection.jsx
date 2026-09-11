import React from "react";
import { useTranslation } from "react-i18next";

import SectionHeading from "./SectionHeading";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f8f1e7]">
      <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <SectionHeading>
          {t("home.howItWorksTitle")}
        </SectionHeading>

        <div className="mt-6 grid gap-3 sm:mt-7 md:grid-cols-3 md:gap-4">
          <HowItWorksCard
            number="01"
            step={t("home.step1")}
            title={t("home.step1Title")}
            text={t("home.step1Text")}
          />

          <HowItWorksCard
            number="02"
            step={t("home.step2")}
            title={t("home.step2Title")}
            text={t("home.step2Text")}
          />

          <HowItWorksCard
            number="03"
            step={t("home.step3")}
            title={t("home.step3Title")}
            text={t("home.step3Text")}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;