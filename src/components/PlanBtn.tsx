'use client'
import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const PlanBtn = () => {
 const context = useContext(FitContext);

  if (!context) return null;

  const { todayPlan } = context;
    return (
        <div>
            <button>{todayPlan.length}</button>
        </div>
    );
};

export default PlanBtn;