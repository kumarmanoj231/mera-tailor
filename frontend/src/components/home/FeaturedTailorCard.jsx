import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedTailorCard = ({
  initials,
  name,
  location,
  description,
  rating,
  price,
  experience,
}) => {
  return (
    <Link
      to="/find-tailors"
      className="
        group
        rounded-lg
        border-2
        border-[#dfcdb8]
        bg-white
        p-4.5
        shadow-[0_6px_18px_rgba(60,45,35,0.035)]
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_10px_26px_rgba(60,45,35,0.07)]

        sm:p-5
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#8f2338]
            font-serif
            text-sm
            font-semibold
            text-white
          "
        >
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-[13px] font-semibold text-[#2b211f]">
            {name}
          </h3>

          <p className="mt-0.5 truncate text-[10px] text-[#756c67]">
            {location}
          </p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 min-h-[40px] text-[11px] leading-5 text-[#756c67] sm:text-xs">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] sm:text-[11px]">
        <span className="flex items-center gap-1 font-semibold text-[#2b211f]">
          <Star
            size={12}
            fill="currentColor"
            className="text-[#c68635]"
          />

          {rating}
        </span>

        <span className="text-[#756c67]">
          {price}
        </span>

        <span className="text-[#756c67]">
          {experience}
        </span>
      </div>
    </Link>
  );
};

export default FeaturedTailorCard;