'use client'

import { FitContext } from '@/context/FitProvider';
import { libraryType } from '@/type/libraryType';
import { useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';

interface saveBtnProps{
    data:libraryType
}

const SaveLaterBtn = ({data}:saveBtnProps) => {
    
      const context = useContext(FitContext);
    
      if (!context) return null;
      const {savePlan,setSavePlan} = context

      const handleSaveBtn = ()=>{
        setSavePlan([...savePlan,data])
      }
    return (
        <div>
                <button onClick={()=>handleSaveBtn()} className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5">
                          <FiBookmark size={16} />
                          Save for later
                        </button>
        </div>
    );
};

export default SaveLaterBtn;