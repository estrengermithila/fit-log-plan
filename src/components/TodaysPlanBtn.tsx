'use client'
import { FitContext } from "@/context/FitProvider";
import { libraryType } from "@/type/libraryType";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";


interface todaysPlanProps{
    data:libraryType
}


const TodaysPlanBtn = ({data}:todaysPlanProps) => {
    console.log(data)

  const context = useContext(FitContext);

  if (!context) return null;

  const { todayPlan, setTodayPlan,plan,setPlan } = context;   


const handleTodayPlan = ()=>{
        console.log('btn clicked')

const newTodayPlanBtn = todayPlan.find(plan=>plan.id===data.id)
if(newTodayPlanBtn){
    alert('already added')
    return
}
else{
      setTodayPlan([...todayPlan,data])
      const newPlan = plan+1
      setPlan(newPlan)
}


    //     setTodayPlan([...todayPlan,data])
    //     const newPlan = plan+1
    //     if(!newPlan){
    //         alert("already added")
    //     }
    //    else{
    //      setPlan(newPlan)
    //    }
    }
    return (
        <div>
               <button onClick={()=>handleTodayPlan()} className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#caff33]">
                          <FiCalendar size={16} />
                          Add to today&apos;s plan
                        </button>
        </div>
    );
};

export default TodaysPlanBtn;