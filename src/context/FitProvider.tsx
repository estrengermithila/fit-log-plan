"use client";

import { libraryType } from "@/type/libraryType";
import {
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FitContextType {
  todayPlan: libraryType[];
  setTodayPlan: Dispatch<SetStateAction<libraryType[]>>;
  savePlan: libraryType[];
  setSavePlan: Dispatch<SetStateAction<libraryType[]>>;
}

export const FitContext = createContext<FitContextType | null>(null);

const FitProvider = ({ children }: PropsWithChildren) => {
  const [todayPlan, setTodayPlan] = useState<libraryType[]>([]);

  const [savePlan, setSavePlan] = useState<libraryType[]>([]);

  const [plan,setPlan] = useState(0)
  const [save,setSave] = useState(0)

  const shareData = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
    plan,
    setPlan,
    save,
    setSave
  };

  return (
    <FitContext.Provider value={shareData}>
      {children}
    </FitContext.Provider>
  );
};

export default FitProvider;