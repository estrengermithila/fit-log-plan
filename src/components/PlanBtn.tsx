'use client'
import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const PlanBtn = () => {
    const {plan} = useContext(FitContext)
    return (
        <div>
            <button>{plan}</button>
        </div>
    );
};

export default PlanBtn;