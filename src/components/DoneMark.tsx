'use client'

import { useState } from "react";
import { toast } from "react-toastify";

const DoneMark = () => {
    const [isActive,setIsActive] = useState(false)
    const handleDoneMark =() =>{
        console.log('done clicked')
       
        if(!isActive){
             setIsActive(!isActive)
             toast.success("Successfully Done", {
               position: "top-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               
               });
        }
        else{
             toast.error("Already Done", {
               position: "top-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               
               });
        }
    }
    return (
        <div>
              <button onClick={()=>handleDoneMark()} className={`rounded-full ${isActive?"btn text-white":"bg-[#baff00]"}  px-4 py-2 text-xs font-bold text-black hover:bg-[#caff33]`}>
         {isActive?"✓ Already Done":" ✓ Mark as Done"}
        </button>
        </div>
    );
};

export default DoneMark;