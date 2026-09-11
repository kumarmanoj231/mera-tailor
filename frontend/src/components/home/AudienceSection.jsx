import React from "react";
import {
  Ruler,
  TrendingUp,
  Boxes,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import AudienceCard from "./AudienceCard";

const AudienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="border-y border-[#e6ddd2] bg-[#f8f1e7]">
      <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-6 max-w-xl">
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.18em] text-[#8f2338] sm:text-left sm:text-[10px]">
            {t("home.everyoneEyebrow")}
          </p>

          <h2
            className="
              mt-1.5
              text-center
              font-serif
              text-[clamp(1.55rem,4.5vw,2.35rem)]
              font-medium
              leading-tight
              tracking-[-0.035em]
              text-[#2b211f]

              sm:text-left
            "
          >
            {t("home.everyoneTitle")}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          <AudienceCard
            icon={<Ruler size={19} />}
            title={t(
              "home.audience.customerTitle"
            )}
            lines={[
              t(
                "home.audience.customerLine1"
              ),
              t(
                "home.audience.customerLine2"
              ),
              t(
                "home.audience.customerLine3"
              ),
            ]}
            button={t(
              "home.audience.customerButton"
            )}
            to="/find-tailors"
          />

          <AudienceCard
            icon={<TrendingUp size={19} />}
            title={t(
              "home.audience.tailorTitle"
            )}
            lines={[
              t(
                "home.audience.tailorLine1"
              ),
              t(
                "home.audience.tailorLine2"
              ),
              t(
                "home.audience.tailorLine3"
              ),
            ]}
            button={t(
              "home.audience.tailorButton"
            )}
            to="/tailor"
          />

          <AudienceCard
            icon={<Boxes size={19} />}
            title={t(
              "home.audience.bulkTitle"
            )}
            lines={[
              t(
                "home.audience.bulkLine1"
              ),
              t(
                "home.audience.bulkLine2"
              ),
              t(
                "home.audience.bulkLine3"
              ),
            ]}
            button={t(
              "home.audience.bulkButton"
            )}
            to="/bulk"
          />
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;