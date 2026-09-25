'use client'

import { FitContext } from '@/context/FitProvider';
import { libraryType } from '@/type/libraryType';
import { useContext, useState } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface saveBtnProps{
    data:libraryType
}

const SaveLaterBtn = ({data}:saveBtnProps) => {
    const [isActive,setActive] = useState(false)
      const context = useContext(FitContext);
    
      if (!context) return null;
      const {savePlan,setSavePlan} = context

      const handleSaveBtn = ()=>{
        const newSaveBtn = savePlan.find(plan=>plan.id===data.id)
        if(newSaveBtn){
toast.error(`${newSaveBtn.name} already added`, {
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
setSavePlan([...savePlan,data])
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
  
// const newSave = save+1
// setSave(newSave)
        }
        setActive(!isActive)
      }
    return (
        <div>
                <button onClick={()=>handleSaveBtn()} className={`flex items-center gap-2 rounded-lg ${isActive?'text-white btn':'bg-[#baff00]'} px-5 py-3 text-sm font-bold text-black transition hover:text-black hover:bg-[#caff33]`}>
                          <FiBookmark size={16} />
                          {isActive?"Already Saved":"Save for later"}
                        </button>
        </div>
    );
};

export default SaveLaterBtn;