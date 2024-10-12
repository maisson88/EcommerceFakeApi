
import Cartitem from "./Cartitem";
import { Sidebarcontext } from "../context/Sidebarcontext";
import { useContext } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Cartcontext } from "../context/Cartcontext";
import { RiDeleteBin5Line } from "react-icons/ri";
const Sidebar=()=>{
    const {isOpen,handleClose}=useContext(Sidebarcontext)
 const {cart,removeAll,total,itemAmountn}=useContext(Cartcontext)
 console.log(cart)
    // console.log()
    return(
        <>
        <div className={ `${isOpen ?'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex justify-between items-center py-5 border-b">
                <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmountn})</div>
                <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
                <IoArrowForward className="text-2xl" />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[520px] lg-h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                {
                    cart.map((item)=>{
                        return(
                            <>
                             <Cartitem item={item} key={item.id}/>
                            </>
                        )
                    })
                }
               
            </div>
            <div>
                {
                    cart.length!=0?<div className="flex justify-between items-center py-3">
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                        </div>
                        <div className="bg-red-600 text-white p-2 cursor-pointer" onClick={removeAll}>
                        <RiDeleteBin5Line />
                        </div>
                </div>:<h1>no carts</h1>
                }
                
            </div>
            <div>
                <div className="w-full text-center bg-gray-300  font-semibold py-3">View Cart</div>
                <div className="w-full text-center bg-black text-white mt-2  font-semibold py-3">Checkout</div>
            </div>
        </div>
       
        </>
    )
}
export default Sidebar;