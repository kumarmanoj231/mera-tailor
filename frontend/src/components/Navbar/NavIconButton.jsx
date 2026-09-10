import React from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavIconButton = ({ to, label, type }) => {
  return (
    <NavLink
      to={to}
      aria-label={label}
      title={label}
      className={({ isActive }) =>
        `
          group flex h-10 w-10
          items-center justify-center
          rounded-full
          transition-all duration-200

          ${
            isActive
              ? type === "heart"
                ? "bg-red-50"
                : "bg-gray-100"
              : "hover:bg-gray-50"
          }
        `
      }
    >
      {type === "heart" ? (
        <Heart
          size={19}
          strokeWidth={1.8}
          className="
            text-gray-500 transition
            group-hover:fill-red-500
            group-hover:text-red-500
          "
        />
      ) : (
        <ShoppingBag
          size={19}
          strokeWidth={1.8}
          className="
            text-gray-500 transition
            group-hover:text-gray-950
          "
        />
      )}
    </NavLink>
  );
};

export default NavIconButton;