import React from "react";
import Image from "next/image";
import { FiBookmark, FiCalendar } from "react-icons/fi";
import { libraryType } from "@/type/libraryType";
import TodaysPlanBtn from "./TodaysPlanBtn";
import SaveLaterBtn from "./SaveLaterBtn";

const LibraryDetailsCard = ({ data }: { data: libraryType }) => {
  return (
    <div className="min-h-screen bg-[#0d0f13] px-5 py-8 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2">

        {/* Left Image */}
        <div className="relative h-[580px] overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="pt-1">

          {/* Title */}
          <h1 className="text-4xl font-black uppercase tracking-tight">
            {data.name}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[550px] text-sm leading-6 text-gray-400">
            {data.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex gap-3">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Details Box */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#171a20]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </span>

              <span className="text-sm text-gray-300">
                {data.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-gray-300">
                {data.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </span>

              <span className="text-sm text-gray-300">
                {data.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </span>

              <span className="text-sm text-gray-300">
                {data.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </span>

              <span className="text-sm text-gray-300">
                {data.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </span>

              <span className="text-sm text-gray-300">
                {data.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </span>

              <span className="text-sm text-gray-300">
                {data.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-7">
            <h2 className="mb-5 text-lg font-black uppercase">
              Instructions
            </h2>

            <ol className="space-y-4">
              {data.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-5 text-gray-400"
                >
                  <span className="text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

         <TodaysPlanBtn data={data}></TodaysPlanBtn>

        <SaveLaterBtn data={data}></SaveLaterBtn>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsCard;