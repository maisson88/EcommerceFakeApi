import { FaPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import { Cartcontext } from "../context/Cartcontext";
import { useContext } from "react";
const Product=({ product })=>{
    const {addToCart}=useContext(Cartcontext)
    // console.log(product)
    return(
        <>
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] flex justify-center items-center mx-auto'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={product.image} alt="" />
                    </div>
                    <div className='absolute top-6 -right-11 group-hover:right-3 bg-transparent p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <button onClick={()=>addToCart(product,product.id)}>
                            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                            <FaPlus className=''/>
                            </div>
                            </button>
                            <Link to={`/product/:${product.id}`} className='w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl text-primary'>
                            <FaEye/>
                            </Link>
                    </div>
                </div>
            </div>
            <div><div className='text-sm capitalize text-gray-500 mb-1'>
                {product.category}</div>
            <Link to={`/product/:${product.id}`}>
            <h2 className='font-semibold mb-1'>{product.title}</h2>
            </Link>
            <div className="font-semibold">$ {product.price}</div>
            </div>
        </div>
              {/* <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>product</div> */}
        </>
    )
}
export default Product;