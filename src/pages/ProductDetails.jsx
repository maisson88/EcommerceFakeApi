import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../context/Cartcontext";


const ProductDetails=()=>{
    const {addToCart}=useContext(Cartcontext)
    let { id } = useParams();
    const [product,setProduct]=useState({})
    id = parseInt(id.replace(':', ''), 10);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response.data);
                setProduct(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);
    return(
        <>
       <section className="h-screen flex items-center">
       <div className="container mx-auto">
        <div className="flex items-center flex-col lg:flex-row gap-16">
            <div className="max-w-[200px] lg:max-w-sm">
                <img src={product.image} alt="" />
            </div>
       <div className="flex-1 text-center lg:text-left">
        <h1 className="font-medium mb-2 max-w-[450px] text-[26px] mx-auto lg:mx-0">{product.title}</h1>
        <p className="text-red-500 mx-auto mb-4">$ {product.price}</p>
        <p className="mx-auto mb-4">{product.description}</p>
        <button className="bg-primary text-white px-6 py-3" onClick={()=>addToCart(product,id)}> Add to Cart</button>
       </div>
        </div>

       </div>
       </section>
      
        </>
    )
}
export default ProductDetails;