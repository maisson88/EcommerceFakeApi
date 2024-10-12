import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
const ProductProvider=({children})=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProduct=async()=>{
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        }

        
fetchProduct()
    },[])
    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}
export default ProductProvider;