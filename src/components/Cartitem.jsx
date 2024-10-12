import { Link } from "react-router-dom";

import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";


const Cartitem=({item})=>{
    const {removeFromCart,addAmount,removeAmoun}=useContext(Cartcontext)
    return(
        <>
  <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
  <div className='w-full min-h-[150px] flex items-center gap-x-4'>
 
      <Link to={`/product/${item.id}`}>
        <img className='max-w-[80px]' src={item.image} alt="" />
      </Link>
      <div className="w-full flex flex-col">
       <div className='flex justify-between mb-2'>
        <Link to={`/product/${item.id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{item.title}</Link>
        <div className="text-xl"  onClick={()=>removeFromCart(item.id)}>
        <IoIosClose className='cursor-pointer text-gray-500 hover:text-red-500  transition'/>
        </div>
       
       </div>
       <div className="flex justify-between items-center h-[36px] gap-x-2">
        <div className="flex justify-between items-center  min-w-[150px]">
            <div className=' border-gray-400 border text-primary flex justify-around min-w-[70px]'>
                <div className='cursor-pointer'onClick={()=>removeAmoun(item.id)}>-</div>
                <div>{item.amount}</div>
                <div className='cursor-pointer'onClick={()=>addAmount(item.id)}>+</div>
            </div>
            <div className='text-sm text-gray-400'>$ {item.price}</div>
        </div>
        <div className='text-sm text-primary font-medium'>$ {item.price*item.amount}</div>
       </div>
      </div>
    </div>
</div>
        </>
    )
}
export default Cartitem;