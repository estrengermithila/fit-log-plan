'use client'

import { FitContext } from '@/context/FitProvider';
import { libraryType } from '@/type/libraryType';
import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
interface RemoveBtnProps {
  data: libraryType;
  type: 'today' | 'saved';
}
const RemoveBtn = ({data,type}:RemoveBtnProps) => {
    const context = useContext(FitContext);

  if (!context) return null;

  const {  todayPlan,setTodayPlan ,savePlan, setSavePlan} = context;
//   const {  savePlan, setSavePlan ,plan,setPlan} = context;

   
    const handleRemoveBtn = () =>{
   if(type==='today'){
        const dltData = todayPlan.filter(prev=>prev.id!==data.id)
       setTodayPlan(dltData)
      //  const remainingPlan = plan-1
      //   setPlan(remainingPlan)
   }

        // save tab rendering
      if(type==='saved'){
         const dltSaveData = savePlan.filter(prev=>prev.id!==data.id)
       setSavePlan(dltSaveData)
      //  const remainingSavePlan = save-1
      //   setSave(remainingSavePlan)
      }
    }
    return (
        <div>
            
            <button onClick={()=>handleRemoveBtn()} className="text-gray-500 hover:text-white">
                      <FiX size={16} />
                    </button>:
            
        </div>
    );
};

export default RemoveBtn;