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

  const { todayPlan, setTodayPlan } = context;   


const handleTodayPlan = ()=>{
        console.log('btn clicked')
        setTodayPlan([...todayPlan,data])
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