'use client'

import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const SaveBtn = () => {
    const {save} = useContext(FitContext)
    return (
        <div>
              <button>{save}</button>
        </div>
    );
};

export default SaveBtn;