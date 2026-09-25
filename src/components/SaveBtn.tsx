'use client'

import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const SaveBtn = () => {
    const {save} = useContext(FitContext)
    return (
        <div className='rounded-full bg-green-700 p-3'>
              <button>{save}</button>
        </div>
    );
};

export default SaveBtn;