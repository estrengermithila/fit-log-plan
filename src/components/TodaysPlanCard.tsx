import Image from "next/image";
import React from "react";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { libraryType } from "@/type/libraryType";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

interface TodaysPlanCardProps {
  data: libraryType;
  type: "today" | "saved";
}

const TodaysPlanCard = ({ data,type }: TodaysPlanCardProps) => {
  return (
    <div className="flex items-center justify-between gap-5 mb-5 rounded-xl border border-[#252a34] bg-[#151922] p-3">

      {/* Left Side */}
      <div className="flex items-center  gap-4">

        {/* Image */}
        <div className="relative h-24 w-24 overflow-hidden rounded-lg">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Exercise Info */}
        <div>
          <h3 className="text-sm font-bold uppercase text-white">
            {data.name}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {data.muscleGroups.join(", ")}
          </p>

          {/* Stats */}
          <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-300">

            <span className="flex items-center gap-1">
              <FiClock
                size={12}
                className="text-[#baff00]"
              />
              {data.duration} min
            </span>

            <span>
              🔥 {data.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FiStar
                size={12}
                className="text-[#baff00]"
              />
              {data.rating}
            </span>

          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* View Details */}
        <Link href={`/library/${data.id}`}>
        <button className="rounded-full border border-[#303642] px-4 py-2 text-xs text-white hover:bg-[#222833]">
          View Details
        </button>
        </Link>

        {/* Mark as Done */}
        <button className="rounded-full bg-[#baff00] px-4 py-2 text-xs font-bold text-black hover:bg-[#caff33]">
          ✓ Mark as Done
        </button>

        {/* Remove */}
       <RemoveBtn type={type} data={data}></RemoveBtn>

      </div>
    </div>
  );
};

export default TodaysPlanCard;