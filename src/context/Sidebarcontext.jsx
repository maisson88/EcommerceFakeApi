import { useState } from "react";
import { createContext } from "react";


export const Sidebarcontext=createContext()

const SidebarProvider=({ children })=>{
    const [isOpen,setIsOpen]=useState(false)
    const handleClose=()=>{
        setIsOpen(false)
    }
    return(
      <Sidebarcontext.Provider value={{isOpen,setIsOpen,handleClose}}>
{ children }
      </Sidebarcontext.Provider>
    )
}
export default SidebarProvider;