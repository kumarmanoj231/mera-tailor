import React from "react";
import { useTranslation } from "react-i18next";
import { useClerk } from "@clerk/react";

import { useAuth } from "../../context/AuthContext";
import FooterLink from "./FooterLink";

const FooterForYou = () => {
  const { t } = useTranslation();

  const { openSignIn, openSignUp } = useClerk();

  const { isSignedIn } = useAuth();

  return (
    <div
      className="
        min-w-0
        text-center
        sm:text-left
      "
    >
      <h3
        className="
          text-sm
          font-semibold
          text-gray-950
        "
      >
        {t("footer.forYou")}
      </h3>

      <div className="mt-4 space-y-2">
        {isSignedIn ? (
          <>
            <FooterLink
              to="/profile"
              label={t("footer.profile")}
            />

            <FooterLink
              to="/orders"
              label={t("footer.orders")}
            />

            <FooterLink
              to="/contact"
              label={t("footer.contact")}
            />
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={openSignUp}
              className="
                mx-auto
                block
                text-center
                text-sm
                leading-6
                text-gray-500
                transition-colors
                duration-200
                hover:text-gray-950

                sm:mx-0
                sm:text-left
              "
            >
              {t("navbar.getStarted")}
            </button>

            <button
              type="button"
              onClick={openSignIn}
              className="
                mx-auto
                block
                text-center
                text-sm
                leading-6
                text-gray-500
                transition-colors
                duration-200
                hover:text-gray-950

                sm:mx-0
                sm:text-left
              "
            >
              {t("navbar.signIn")}
            </button>

            <FooterLink
              to="/contact"
              label={t("footer.contact")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FooterForYou;