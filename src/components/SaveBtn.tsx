'use client'

import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const SaveBtn = () => {
    const context = useContext(FitContext);

  if (!context) return null;

  const { savePlan } = context;
    return (
        <div className='rounded-full bg-green-700 p-3'>
              <button>{savePlan.length}</button>
        </div>
    );
};

export default SaveBtn;