'use client'
import { FitContext } from "@/context/FitProvider";
import { libraryType } from "@/type/libraryType";
import { useContext, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";


interface todaysPlanProps{
    data:libraryType
}


const TodaysPlanBtn = ({data}:todaysPlanProps) => {
    console.log(data)
const [isActive,setActive] = useState(false)
  const context = useContext(FitContext);

  if (!context) return null;

  const { todayPlan, setTodayPlan } = context;   


const handleTodayPlan = ()=>{
        console.log('btn clicked')

const newTodayPlanBtn = todayPlan.find(plan=>plan.id===data.id)
if(newTodayPlanBtn){

toast.error(`${newTodayPlanBtn.name} already added`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});


   
    return
}
else{
        setTodayPlan([...todayPlan,data])
    toast.success(`Successfully ${data.name} added`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
  
    //   const newPlan = plan+1
    //   setPlan(newPlan)
}


    //     setTodayPlan([...todayPlan,data])
    //     const newPlan = plan+1
    //     if(!newPlan){
    //         alert("already added")
    //     }
    //    else{
    //      setPlan(newPlan)
    //    }
    setActive(!isActive)
    }
    return (
        <div>
               <button onClick={()=>handleTodayPlan()} className={`flex items-center gap-2 rounded-lg ${isActive?'text-white btn':'bg-[#baff00]'} px-5 py-3 text-sm font-bold text-black transition hover:text-black hover:bg-[#caff33]`}>
                          <FiCalendar size={16} />
                          {isActive?"Already added to today's plan":"Add to today's plan"}
                        </button>
        </div>
    );
};

export default TodaysPlanBtn;