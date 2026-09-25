'use client'
import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const PlanBtn = () => {
 const context = useContext(FitContext);

  if (!context) return null;

  const { todayPlan } = context;
    return (
         <div className="flex h-8 min-w-8 items-center justify-center rounded-full bg-green-700 px-2">
      <button className="text-sm font-bold text-white">
        {todayPlan.length}
      </button>
    </div>
    );
};

export default PlanBtn;