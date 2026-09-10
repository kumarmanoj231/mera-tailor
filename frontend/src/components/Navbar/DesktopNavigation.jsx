import React from "react";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import NavItem from "./NavItem";

const DesktopNavigation = ({ isHomePage }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden items-center gap-1 md:flex">
      {/* HOME
          Hidden when already on Home
      */}
      {!isHomePage && (
        <NavItem
          to="/"
          label={t("navbar.home")}
        />
      )}

      {/* FIND TAILORS */}
      <NavItem
        to="/find-tailors"
        icon={
          <MapPin
            size={15}
            strokeWidth={1.8}
          />
        }
        label={t("navbar.findTailors")}
      />

      {/* FOR BULK */}
      <NavItem
        to="/bulk"
        label={t("navbar.bulk")}
      />

      {/* HOW IT WORKS */}
      <NavItem
        to="/how-it-works"
        label={t("navbar.howItWorks")}
      />
    </div>
  );
};

export default DesktopNavigation;