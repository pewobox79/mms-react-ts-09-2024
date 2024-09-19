import { createContext } from "react";

export const UserContext = createContext<{user:{email:string, password: string, state: boolean}; setUser:React.Dispatch<React.SetStateAction<{email: string, password: string, state:boolean}>>;}>({user: {email: "", password: "",  state: false}, setUser:()=>{}})