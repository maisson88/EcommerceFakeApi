
import { Link } from 'react-router-dom';
import hero from '../img/woman_hero.png'
const Hero=()=>{
    return(
        <>
       <section className=" h-[800px] bg-hero bg-cover bg-center by-24">
  <div className="container mx-auto flex justify-around  items-center h-full">
    <div>
  
        <div  className='flex items-center gap-1'>
        <div className='w-10 h-[2px] bg-red-500'></div> 
            <div className='uppercase font-semibold'>New Trend</div>
        </div>
        <div>
            <h1 className='text-black uppercase text-6xl mb-3 font-light'>autman sale stylish</h1>
   
            <h1 className='text-6xl font-bold mb-5'>WOMENS</h1>
      <Link to={'/'}>
      <span className='uppercase  cursor-pointer border-primary font-semibold border-b-2 '>discover more</span>
      </Link>
          
         
            
        </div>
    </div>
    <div className='hidden lg:block'><img src={hero} alt="" /></div>

  </div>
       </section>
        </>
    )
}
export default Hero;