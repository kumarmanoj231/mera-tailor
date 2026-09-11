import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({
  emoji,
  title,
  price,
}) => {
  return (
    <Link
      to="/find-tailors"
      className="
        flex
        min-h-[125px]
        flex-col
        items-center
        justify-center
        rounded-lg
        border-2
        border-[#dfcdb8]
        bg-white
        px-2.5
        py-4
        text-center
        shadow-[0_5px_16px_rgba(60,45,35,0.035)]
        transition
        duration-200
        hover:-translate-y-0.5
        hover:border-[#d8c9b9]
        hover:shadow-[0_9px_22px_rgba(60,45,35,0.07)]

        sm:min-h-[135px]
      "
    >
      <span className="text-[1.65rem] leading-none">
        {emoji}
      </span>

      <h3 className="mt-3 text-[11px] font-semibold text-[#2b211f] sm:text-xs">
        {title}
      </h3>

      <p className="mt-1.5 text-[9px] text-[#756c67] sm:text-[10px]">
        {price}
      </p>
    </Link>
  );
};

export default CategoryCard;