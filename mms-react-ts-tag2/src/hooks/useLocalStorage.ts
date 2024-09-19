import { useState } from "react";


export function useLocalStorage(key:string, initValue = ""){

    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue):initValue
    });


    const setStoredValue = (newValue:unknown)=>{
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))

    }

    const removeItem =()=>{
        setValue(initValue);
        localStorage.removeItem(key)
    }


    return {value, setStoredValue, removeItem}


}