import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const Cartcontext=createContext();
const CartPorvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [itemAmountn,setItenAmount]=useState(0)
    const [total,setTotal]=useState(0);
    useEffect(()=>{
       const totalPrice=cart.reduce((acc,current)=>{
        return acc+current.price*current.amount
       },0)
       setTotal(totalPrice)
    },[cart])
  
    useEffect(()=>{
      const amount=cart.reduce((acc,current)=>{
        return acc+current.amount
      },0)
      setItenAmount(amount)
    },[cart])



    const addToCart=(product,id)=>{
      
      const newItem={...product,amount:1}


     const cartItme=cart.find((item)=>{
      return(
        item.id===id
      )
     })



   if(cartItme){
    const newCart=[...cart].map((item)=>{
      
        if(item.id===id){
       return {...item,amount:cartItme.amount+1}
        }else{
          return item;
        }
      
    })
    setCart(newCart)
   }else{
    setCart([...cart,newItem])
   }
    
    }
    // console.log(cart)

    const removeFromCart=(id)=>{
      const newCart= cart.filter((item) => item.id !== id) 
      setCart(newCart)
    }
    // console.log(cart)
    const addAmount=(id)=>{
     const item=cart.find((item)=>item.id===id)
   
     addToCart(item,id)
    }
    const removeAmoun=(id)=>{
      
        const itemmins=cart.find((item)=>item.id===id)
      const newCart=[...cart].map((item)=>{
    
        if(item.id===id && itemmins.amount>1){
         
       return {...item,amount:itemmins.amount-1}
        }else{
          return item;
        }
    })
    setCart(newCart)

    if(itemmins.amount<2){
      removeFromCart(id)
    }
      
      
    
  }

    const removeAll=()=>{
      setCart([])
    }
    return(
        <>
      <Cartcontext.Provider value={{cart,addToCart,removeFromCart,addAmount,removeAll,removeAmoun,itemAmountn,total}}>
      {children}

      </Cartcontext.Provider>
        </>
    )
}
export default CartPorvider;