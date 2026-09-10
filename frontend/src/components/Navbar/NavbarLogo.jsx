import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = ({ mobile = false, onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`
        group flex items-center gap-2.5
        ${mobile ? "absolute left-1/2 -translate-x-1/2" : "shrink-0"}
      `}
    >
      <div
        className={`
          flex shrink-0 items-center justify-center
          overflow-hidden rounded-xl bg-[#fff7fb]
          transition-transform duration-200
          group-hover:scale-105
          ${mobile ? "h-9 w-9" : "h-10 w-10"}
        `}
      >
        <img
          src="/logo.png"
          alt="MeraTailor"
          className={mobile ? "h-8 w-8 object-contain" : "h-9 w-9 object-contain"}
        />
      </div>

      <div className="leading-none">
        <div
          className={`
            font-bold tracking-tight text-gray-950
            ${mobile ? "text-[17px]" : "text-[18px]"}
          `}
        >
          मेरा&nbsp;
          <span className="text-gray-500">Tailor</span>
        </div>

        {!mobile && (
          <p
            className="
              mt-1 hidden text-[8px]
              font-medium tracking-[0.18em]
              text-gray-400 sm:block
            "
          >
            APNA TAILOR, AB AASANI SE
          </p>
        )}
      </div>
    </Link>
  );
};

export default NavbarLogo;