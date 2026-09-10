import React, { useState } from "react";

import {
  Menu,
  X,
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

  const { i18n } = useTranslation();

  const {
    openSignIn,
    openSignUp,
  } = useClerk();

  const location = useLocation();

  const isHomePage =
    location.pathname === "/";

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
        {/* DESKTOP LOGO */}

        <div className="hidden md:block">
          <NavbarLogo
            onClick={closeMobileMenu}
          />
        </div>

        {/* MOBILE CENTERED LOGO */}

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

        {/* DESKTOP NAVIGATION */}

        <DesktopNavigation
          isHomePage={isHomePage}
        />

        {/* DESKTOP ACTIONS */}

        <DesktopActions
          language={i18n.language}
          onChangeLanguage={changeLanguage}
          onSignIn={handleSignIn}
          onSignUp={handleSignUp}
        />

        {/* MOBILE MENU BUTTON */}

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

      {/* MOBILE MENU */}

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