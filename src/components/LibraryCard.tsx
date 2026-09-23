import React from "react";

import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Link from "next/link";
import { libraryType } from "@/type/libraryType";

const LibraryCard = ({ library }:{library:libraryType}) => {
  return (
    <Link href={`/library/${library.id}`}>
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] shadow-lg transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          width={400}
          height={400}
          className=" object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-7">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-3">
          {library.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#baff00] px-4 py-1.5 text-xs font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-2xl font-black uppercase text-white">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-gray-400">
          {library.equipment}
        </p>

        <div className="my-5 h-px bg-white/10" />

        {/* Info */}
        <div className="flex items-center gap-5 text-sm text-gray-400">

          <div className="flex items-center gap-2">
            <FiClock size={18} />
            <span>{library.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <FaFire size={17} />
            <span>{library.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <FiStar size={18} />
            <span>{library.rating}</span>
          </div>

        </div>
      </div>
    </div>
    </Link>
  );
};

export default LibraryCard;