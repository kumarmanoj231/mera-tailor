import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, icon }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `
          flex items-center gap-1.5
          rounded-full px-4 py-2.5
          text-sm font-medium
          transition-all duration-200

          ${
            isActive
              ? "bg-gray-100 text-gray-950"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-950"
          }
        `
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default NavItem;