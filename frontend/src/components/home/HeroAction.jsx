import React from "react";
import { Link } from "react-router-dom";

const HeroAction = ({
  icon,
  label,
  to,
  onClick,
}) => {
  const content = (
    <>
      <div
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-lg
          bg-white
          text-[#8f2338]
          shadow-sm
        "
      >
        {icon}
      </div>

      <span
        className="
          truncate
          text-[clamp(.48rem,1.3vw,.56rem)]
          font-semibold
          text-[#4c4140]
        "
      >
        {label}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="
          flex
          min-w-0
          flex-col
          items-center
          justify-center
          gap-1
          rounded-xl
          bg-[#f7eee3]
          px-1
          py-2
          transition
          hover:-translate-y-0.5
          hover:bg-[#f2e6d8]
        "
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        min-w-0
        flex-col
        items-center
        justify-center
        gap-1
        rounded-xl
        bg-[#f7eee3]
        px-1
        py-2
        text-center
        transition
        hover:-translate-y-0.5
        hover:bg-[#f2e6d8]
      "
    >
      {content}
    </button>
  );
};

export default HeroAction;