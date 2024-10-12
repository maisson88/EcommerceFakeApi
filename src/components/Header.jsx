import { useContext, useState } from "react";

import { Sidebarcontext } from "../context/Sidebarcontext";
import { LuShoppingBag } from "react-icons/lu";
import { Cartcontext } from "../context/Cartcontext";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg'
import { useEffect } from "react";
const Header=()=>{
    const {setIsOpen,isOpen}=useContext(Sidebarcontext)
    let {itemAmountn}=useContext(Cartcontext)
    const [isActive,setIsActive]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>60?setIsActive(true):setIsActive(false)
        })
    },[])
    return(

        <>
        <header className={`${isActive?'bg-white shadow-md py-4':'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className=" flex justify-between mx-auto container">
            <Link to={'/'}>
       <img src={logo} className="w-[30px]" alt="" />
        </Link>
        <div className=" cursor-pointer relative flex " onClick={()=>setIsOpen(!isOpen)}><LuShoppingBag  className="text-2xl"/>
        <div className="bg-red-500 absolute border-red-50 text-white -right-2 -bottom-1 text-[12px] w-[17px] rounded-full flex justify-center items-center">  {itemAmountn}</div>
      
        </div>
        </div>
        </header>
        
     
        </>
    )
}
export default Header;