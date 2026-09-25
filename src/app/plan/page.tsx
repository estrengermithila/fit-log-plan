'use client';

import TodaysPlanCard from '@/components/TodaysPlanCard';
import { FitContext } from '@/context/FitProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const Plan = () => {
  const context = useContext(FitContext);

  if (!context) return null;

  const { todayPlan, savePlan } = context;

  const totalMnts = todayPlan.reduce(
    (total, time) => total + time.duration,
    0
  );

  const totalcls = todayPlan.reduce(
    (total, time) => total + time.caloriesBurned,
    0
  );



  const savedMnts = savePlan.reduce(
    (total, time) => total + time.duration,
    0
  );


  const savedcls = savePlan.reduce(
    (total, time) => total + time.caloriesBurned,
    0
  );

  return (
    <div className="min-h-screen bg-[#090b0d] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">

    
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your today&apos;s workouts and saved exercises.
          </p>
        </div>


        <div className="tabs tabs-lift w-full">


          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content border-base-300 bg-[#0d0f12] p-6">
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Exercise
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {todayPlan.length}
                </h2>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Minutes
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {totalMnts}
                </h2>
              </div>
              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Calories
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {totalcls}
                </h2>
              </div>

            </div>

    
            {todayPlan.length === 0 ? (

              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#0d0f12] text-center">

                <h1 className="text-xl font-bold uppercase tracking-wide text-white">
                  Nothing Here Yet
                </h1>

                <p className="mt-2 text-xs text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/workOut"
                  className="mt-5 rounded-full bg-[#baff00] px-5 py-2 text-xs font-semibold text-black transition hover:scale-105 hover:bg-[#caff33]"
                >
                  Go to workouts
                </Link>

              </div>

            ) : (

              <div className="space-y-4">

                {todayPlan.map((data) => (
                  <TodaysPlanCard
                    key={data.id}
                    data={data}
                  />
                ))}

              </div>

            )}

          </div>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />

          <div className="tab-content border-base-300 bg-[#0d0f12] p-6">

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Exercise
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {savePlan.length}
                </h2>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Minutes
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {savedMnts}
                </h2>
              </div>

        
              <div className="rounded-xl border border-gray-800 bg-[#111418] p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Calories
                </p>

                <h2 className="text-3xl font-bold text-[#baff00]">
                  {savedcls}
                </h2>
              </div>

            </div>

            {savePlan.length === 0 ? (

              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#0d0f12] text-center">

                <h1 className="text-xl font-bold uppercase tracking-wide text-white">
                  No Saved Exercises
                </h1>

                <p className="mt-2 text-xs text-gray-500">
                  Save your favorite exercises and find them here.
                </p>

                <Link
                  href="/workOut"
                  className="mt-5 rounded-full bg-[#baff00] px-5 py-2 text-xs font-semibold text-black transition hover:scale-105 hover:bg-[#caff33]"
                >
                  Browse workouts
                </Link>

              </div>

            ) : (

              <div className="space-y-4">

                {savePlan.map((data) => (
                  <TodaysPlanCard
                    key={data.id}
                    data={data}
                  />
                ))}

              </div>

            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Plan;