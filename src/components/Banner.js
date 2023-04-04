import React from 'react';
import {MdArrowRight} from "react-icons/md";
import banner1 from "../assert/b1.png";
import banner2 from "../assert/b2.png";
import banner3 from "../assert/b3.png";
import banner4 from "../assert/b4.png";
import banner5 from "../assert/b5.png";
import banner6 from "../assert/b6.png";
import banner7 from "../assert/b7.png";
import banner8 from "../assert/b8.png";
import banner9 from "../assert/b9.png";
import banner10 from "../assert/b10.png";

const Banner = () => {
  return (
    <div className='pt-12 pb-56'>
      
      <section className='max-w-[1380px] mx-auto'>

        <div className='flex space-x-16'>

        <div className='basis-[55%] ml-28'>

            <p className='text-5xl max-w-[800px] text-left mx-auto font-bold text-slate-800 my-6'>Building exactling the eCommerce website <br />
            you want.</p>

            <p className='text-gray-500 my-6 text-left w-auto md:w-[500px]'>We eCommerce is a customizeable, open-source eCommerce plateform
            on Wordpress get started quickly and make you way.</p>

            <div className='flex text-left items-center space-x-1'>
            <button className='bg-indigo-600 py-3 px-9 rounded-full text-white hover:bg-indigo-800'>Start a New Store</button>
            <p className='text-gray-500'>or</p>
            <button className='text-[#299EF3] font-semibold'>Customize & Extend</button>
            <MdArrowRight className="text-[#299EF3] text-3xl"/>
            </div>
        </div>

        <div className='basis-[45%]'>

       <div className='relative'>

        <img src={banner1} alt="" className='absolute max-w-[150px] rounded-lg z-20' />

        <img src={banner3} alt="" className='absolute max-w-[280px] top-[80px] left-[-15px]' />

        <img src={banner10} alt="" className='absolute max-w-[150px] left-[225px] top-[-30px]' />

        <img src={banner9} alt="" className='absolute left-[340px] top-[120px] max-w-[150px]' />   

        <img src={banner2} alt="" className='absolute left-[30px] top-[50px] max-w-[300px] rounded-lg '/>

        <img src={banner4} alt="" className='absolute top-[250px] max-w-[50px]' />
        
        <img src={banner5} alt="" className='absolute left-[200px] top-[30px] max-w-[100px]' />


        <img src={banner8} alt="" className='absolute left-[390px] top-[320px] max-w-[50px] z-20' /> 
        
        
        <img src={banner7} alt="" className='absolute bg-white left-[330px] top-[70px] max-w-[150px] -z-30]' />
        <img src={banner6} alt="" className='absolute bg-white max-w-[250px] rounded-lg top-[260px] shadow left-[120px]' />


        

        


        </div>

            
        </div>


        </div>

      </section>
    </div>
  )
}
export default Banner
