
import React, { useState } from "react";

import {
  Menu,
  X,
  UserRound,
} from "lucide-react";

import {
  useClerk,
} from "@clerk/react";

import {
  useLocation,
} from "react-router-dom";

import {
  useTranslation,
} from "react-i18next";

import NavbarLogo from "./NavbarLogo";
import DesktopNavigation from "./DesktopNavigation";
import DesktopActions from "./DesktopActions";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { i18n, t } = useTranslation();

  const {
    openSignIn,
    openSignUp,
  } = useClerk();

  const location = useLocation();

  const isHomePage =
    location.pathname === "/";

  // =====================================================
  // TEMPORARY USER ROLE
  // Default role is Customer until database/backend
  // role management is implemented.
  // =====================================================

  const userRole = "customer";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSignIn = () => {
    setMobileOpen(false);
    openSignIn();
  };

  const handleSignUp = () => {
    setMobileOpen(false);
    openSignUp();
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-gray-100
        bg-white/95
        backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto flex h-[70px]
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            DESKTOP LOGO
        ================================================== */}

        <div className="hidden md:block">
          <NavbarLogo
            onClick={closeMobileMenu}
          />
        </div>

        {/* =================================================
            MOBILE CENTERED LOGO
        ================================================== */}

        <div
          className="
            relative flex h-full
            flex-1 items-center
            justify-center
            md:hidden
          "
        >
          <NavbarLogo
            mobile
            onClick={closeMobileMenu}
          />
        </div>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <DesktopNavigation
          isHomePage={isHomePage}
        />

        {/* =================================================
            DESKTOP ACTIONS + USER ROLE
        ================================================== */}

        <div className="hidden md:flex items-center gap-3">
          <DesktopActions
            language={i18n.language}
            onChangeLanguage={changeLanguage}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
          />

          {/* =================================================
              CUSTOMER ROLE BADGE
          ================================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-purple-50
              px-2.5
              py-1.5
              text-xs
              font-medium
              text-purple-700
              whitespace-nowrap
              border border-purple-100
            "
            title={t("navbar.customer")}
          >
            <UserRound
              size={13}
              strokeWidth={2}
            />

            <span>
              {t(`navbar.${userRole}`)}
            </span>
          </div>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center
            rounded-full
            border border-gray-200
            text-gray-800
            transition
            hover:bg-gray-50
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X
              size={20}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={20}
              strokeWidth={1.8}
            />
          )}
        </button>
      </nav>

      {/* ===================================================
          MOBILE MENU
      ================================================== */}

      <MobileMenu
        open={mobileOpen}
        isHomePage={isHomePage}
        language={i18n.language}
        onChangeLanguage={changeLanguage}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onClose={closeMobileMenu}
      />
    </header>
  );
};

export default Navbar;
