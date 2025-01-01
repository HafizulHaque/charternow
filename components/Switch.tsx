'use client';

import { useCallback } from "react";
import { useAppContext } from "@/context/AppContext";

export default function Switch() {

  let { state: { aiModeEnabled }, setStateValue } = useAppContext();

  const toggleAiMode = useCallback(() => {
    setStateValue({
      aiModeEnabled: !aiModeEnabled
    })
  }, [aiModeEnabled])

  return (
    <div
      onClick={toggleAiMode}
      className={`relative w-12 h-6 flex items-center bg-white/30 rounded-full p-1 cursor-pointer transition-colors duration-300`}
    >
      <div
        className={`w-5 h-5 bg-cstmTeal rounded-full shadow-md transform transition-transform duration-300 ${
          aiModeEnabled ? 'translate-x-[1.3rem]' : ''
        }`}
      ></div>
    </div>
  );
}
