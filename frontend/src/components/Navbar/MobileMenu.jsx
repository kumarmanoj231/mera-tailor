import React from "react";

import {
  Heart,
  LogIn,
  MapPin,
  ShoppingBag,
  UserPlus,
} from "lucide-react";

import { UserButton } from "@clerk/react";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { useAuth } from "../../context/AuthContext";

import MobileNavItem from "./MobileNavItem";
import LanguageToggle from "./LanguageToggle";

const MobileMenu = ({
  open,
  isHomePage,
  language,
  onChangeLanguage,
  onSignIn,
  onSignUp,
  onClose,
}) => {
  const { t } = useTranslation();

  // Global authentication state
  const { isSignedIn, user } = useAuth();

  return (
    <div
      className={`
        overflow-hidden
        border-t
        border-gray-100
        bg-white
        transition-all
        duration-300
        md:hidden

        ${
          open
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }
      `}
    >
      <div className="px-5 py-5">
        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}

        <div className="space-y-1.5">
          {/* HOME */}

          {!isHomePage && (
            <MobileNavItem
              to="/"
              label={t("navbar.home")}
              onClick={onClose}
            />
          )}

          {/* FIND TAILORS */}

          <MobileNavItem
            to="/find-tailors"
            label={t("navbar.findTailors")}
            icon={
              <MapPin
                size={18}
                strokeWidth={1.8}
              />
            }
            onClick={onClose}
          />

          {/* FOR BULK */}

          <MobileNavItem
            to="/bulk"
            label={t("navbar.bulk")}
            onClick={onClose}
          />

          {/* HOW IT WORKS */}

          <MobileNavItem
            to="/how-it-works"
            label={t("navbar.howItWorks")}
            onClick={onClose}
          />
        </div>

        {/* =================================================
            SIGNED-IN NAVIGATION
        ================================================== */}

        {isSignedIn && (
          <>
            <div
              className="
                my-4
                h-px
                bg-gray-100
              "
            />

            <div className="space-y-1.5">
              {/* MY TAILORS */}

              <MobileNavItem
                to="/my-tailors"
                label={t("navbar.myTailors")}
                icon={
                  <Heart
                    size={18}
                    strokeWidth={1.8}
                  />
                }
                iconClassName="text-red-500"
                onClick={onClose}
              />

              {/* ORDERS */}

              <MobileNavItem
                to="/orders"
                label={t("navbar.orders")}
                icon={
                  <ShoppingBag
                    size={18}
                    strokeWidth={1.8}
                  />
                }
                onClick={onClose}
              />
            </div>
          </>
        )}

        {/* =================================================
            LANGUAGE
        ================================================== */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-4
            rounded-2xl
            border
            border-gray-100
            bg-gray-50
            px-4
            py-3.5
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-gray-700
            "
          >
            {t("navbar.language")}
          </span>

          <LanguageToggle
            language={language}
            onChange={onChangeLanguage}
            mobile
          />
        </div>

        {/* =================================================
            AUTHENTICATED USER
        ================================================== */}

        {isSignedIn ? (
          <div
            className="
              mt-4
              rounded-2xl
              border
              border-gray-100
              bg-gray-50
              p-5
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "h-12 w-12 ring-1 ring-gray-200 shadow-sm",
                  },
                }}
              />

              <p
                className="
                  mt-3
                  text-sm
                  font-semibold
                  text-gray-950
                "
              >
                {t("navbar.hello")},{" "}
                {user?.firstName || "there"}
              </p>

              <p
                className="
                  mt-1
                  max-w-full
                  truncate
                  text-xs
                  text-gray-500
                "
              >
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>

            <Link
              to="/profile"
              onClick={onClose}
              className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-3
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-gray-50
              "
            >
              {t("navbar.viewProfile")}
            </Link>
          </div>
        ) : (
          /* =================================================
             LOGGED OUT
          ================================================== */

          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-2
            "
          >
            {/* SIGN IN */}

            <button
              type="button"
              onClick={onSignIn}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-3
                py-3.5
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:bg-gray-50
              "
            >
              <LogIn
                size={16}
                strokeWidth={1.8}
              />

              {t("navbar.signIn")}
            </button>

            {/* GET STARTED */}

            <button
              type="button"
              onClick={onSignUp}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gray-950
                px-3
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
              "
            >
              <UserPlus
                size={16}
                strokeWidth={1.8}
              />

              {t("navbar.getStarted")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;