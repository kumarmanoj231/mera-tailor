import React from "react";
import { UserPlus } from "lucide-react";
import { UserButton } from "@clerk/react";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../context/AuthContext";

import LanguageToggle from "./LanguageToggle";
import NavIconButton from "./NavIconButton";

const DesktopActions = ({
  language,
  onChangeLanguage,
  onSignIn,
  onSignUp,
}) => {
  const { t } = useTranslation();

  // Global authentication state
  const { isSignedIn, user } = useAuth();

  return (
    <div className="hidden items-center gap-2 md:flex">
      {/* =====================================================
          LANGUAGE
      ====================================================== */}

      <LanguageToggle
        language={language}
        onChange={onChangeLanguage}
      />

      {/* =====================================================
          MY TAILORS
      ====================================================== */}

      {isSignedIn && (
        <NavIconButton
          to="/my-tailors"
          label={t("navbar.myTailors")}
          type="heart"
        />
      )}

      {/* =====================================================
          ORDERS
      ====================================================== */}

      {isSignedIn && (
        <NavIconButton
          to="/orders"
          label={t("navbar.orders")}
          type="orders"
        />
      )}

      {/* =====================================================
          AUTHENTICATED USER
      ====================================================== */}

      {isSignedIn ? (
        <div
          className="
            ml-2
            flex
            items-center
            gap-3
            border-l
            border-gray-200
            pl-3
          "
        >
          {/* GREETING */}

          <p
            className="
              hidden
              text-sm
              font-medium
              text-gray-800
              lg:block
            "
          >
            {t("navbar.hello")},{" "}
            {user?.firstName || "there"}
          </p>

          {/* CLERK USER BUTTON */}

          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox:
                  "h-10 w-10 ring-1 ring-gray-200 shadow-sm transition hover:ring-gray-300",
              },
            }}
          />
        </div>
      ) : (
        /* ===================================================
           LOGGED OUT
        ==================================================== */

        <div
          className="
            ml-1
            flex
            items-center
            gap-1
          "
        >
          {/* SIGN IN */}

          <button
            type="button"
            onClick={onSignIn}
            className="
              rounded-full
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-600
              transition
              hover:bg-gray-100
              hover:text-gray-950
            "
          >
            {t("navbar.signIn")}
          </button>

          {/* GET STARTED */}

          <button
            type="button"
            onClick={onSignUp}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-gray-950
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-gray-800
              active:scale-[0.98]
            "
          >
            <UserPlus
              size={15}
              strokeWidth={2}
            />

            {t("navbar.getStarted")}
          </button>
        </div>
      )}
    </div>
  );
};

export default DesktopActions;