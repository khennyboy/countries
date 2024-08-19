import { useState, useEffect } from "react";


export function useLocalStorage() {
  const [value, setValue] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem('DARk_LIGHT_MODE')) 
    if(storage !== null) setValue(storage)
  }, [])

  return [value, setValue];
}
