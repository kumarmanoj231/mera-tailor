import React from "react";
import { Link } from "react-router-dom";

const AudienceCard = ({
  icon,
  title,
  lines,
  button,
  to,
}) => {
  return (
    <div
      className="
        flex
        min-h-[245px]
        flex-col
        rounded-lg
        border-2
        border-[#dfcdb8]
        bg-[#fffefd]
        p-5
        shadow-[0_6px_18px_rgba(70,45,30,0.04)]
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_10px_24px_rgba(70,45,30,0.07)]

        sm:p-6
      "
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f7eee5] text-[#8f2338]">
        {icon}
      </div>

      <h3 className="mt-5 font-serif text-[14px] font-semibold leading-tight text-[#2b211f] sm:text-[15px]">
        {title}
      </h3>

      <div className="mt-3 space-y-1">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-[11px] leading-5 text-[#756c67] sm:text-xs"
          >
            {line}
          </p>
        ))}
      </div>

      <Link
        to={to}
        className="
          mt-auto
          inline-flex
          min-h-9
          w-fit
          items-center
          rounded-lg
          border
          border-[#e2d8cd]
          bg-[#fffaf4]
          px-3.5
          text-[10px]
          font-semibold
          text-[#6d3428]
          shadow-sm
          transition
          hover:border-[#d4c5b5]
          hover:bg-white
        "
      >
        {button}
      </Link>
    </div>
  );
};

export default AudienceCard;