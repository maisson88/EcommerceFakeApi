

import { useContext } from "react";
import { ProductContext } from "../context/Productcontext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home=()=>{
    const {products}=useContext(ProductContext);
    const filterdProducts=products.filter((ithem)=>{return (ithem.category=== "men's clothing"||ithem.category=== "women's clothing")})
    // console.log(filterdProducts)
    return(
        <>
     <Hero/>
     <section className="py-16">
        <div className="container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filterdProducts.map((product)=>{
                    return(
                        <>
                     <Product product={product} key={product.id}/>
                        </>
                    )
                })}
            </div>
        </div>
     </section>
        </>
    )
}
export default Home;