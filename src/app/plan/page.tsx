'use client'
import LibraryDetailsCard from '@/components/LibraryDetailsCard';
import TodaysPlanCard from '@/components/TodaysPlanCard';
import { FitContext } from '@/context/FitProvider';
import React, { useContext } from 'react';

const Plan = () => {
    const context= useContext(FitContext)
    if(!context){
        return null
    }

    const {todayPlan,savePlan} = context
    console.log(todayPlan)
    return (
        <div>
            <h1>Plan:{todayPlan.length}</h1>
            <h1>savePlan:{savePlan.length}</h1>
            <h1 className='text-4xl mt-3 mb-3 font-bold '>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
          

{/* option of tab */}

<div>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Today's Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6">{
    todayPlan.map(data=><TodaysPlanCard key={data.id} data={data}></TodaysPlanCard>)
    }</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">{
    savePlan.map(data=><TodaysPlanCard key={data.id} data={data}></TodaysPlanCard>)
    }</div>


</div>
</div>


        </div>
    );
};

export default Plan;