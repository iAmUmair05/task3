import React from 'react'
import first1pic from "../assert/first-1.png";
import first2pic from "../assert/first-2.png";
import first3pic from "../assert/first-3.png";
import second1pic from "../assert/second-1.png";
import second2pic from "../assert/second-2.png";
import second3pic from "../assert/second-3.png";
import second4pic from "../assert/second-4.png";
import second5pic from "../assert/second-5.png";
import second6pic from "../assert/second-6.png";
import third1pic from "../assert/third-1.png";
import third2pic from "../assert/third-2.png";
import third3pic from "../assert/third-3.png";
import third4pic from "../assert/third-4.png";
import {MdArrowRight} from "react-icons/md";

const Cart = () => {
  return (
    <div className='my-12'>
        <h1 className='text-4xl font-bold text-center text-slate-800'>Your eCommerce <br />
        made simple</h1>

        <div className='grid grid-cols-3 px-16'>

        <section className='flex flex-row items-center justify-center'>

<div className='relative'>
        <div>
            <img src={first1pic} alt="" className='absolute bottom-[310px] right-[370px]'/>
            <img src={first2pic} alt="" className='absolute bottom-[90px] right-[270px] max-w-[200px] z-20'/>
            <img src={first3pic} alt="" className='absolute max-w-[350px]'/>
        </div>

<div className='text-left mx-12 mt-64'>

 <h2 className='text-slate-800 font-bold text-3xl'>All You Need to Start</h2>
 <p className='text-gray-500 my-4'>Add WooCommerce plugin to any site and <br /> 
 setup a new store in minutes</p>

<span className='flex space-x-2'>
 <button className='text-[#299EF3] font-semibold hover:font-bold'>Ecommerce for Wordpress</button>
 <MdArrowRight className="text-[#299EF3] mt-1.5"/>
 </span>

</div>

</div>

      </section>

      <section className='flex items-center justify-center'>

<div className='relative mt-20'>
        <div>
            
        <img src={second1pic} alt="" className='absolute bottom-[335px] right-[220px] z-20 max-w-[150px]'/>
            <img src={second2pic} alt="" className='absolute bottom-[240px] right-[240px] max-w-[120px] z-20'/>
            <img src={second3pic} alt="" className='absolute bottom-[270px] right-[80px] max-w-[150px] z-20'/>
            <img src={second4pic} alt="" className='absolute bottom-[190px] right-[100px] max-w-[150px] z-20'/>
            <img src={second5pic} alt="" className='absolute bottom-[130px] right-[150px] max-w-[150px] z-20'/>
            <img src={second6pic} alt="" className='absolute max-w-[350px]'/>
        </div>

<div className='text-left mx-12 mt-64'>

 <h2 className='text-slate-800 font-bold text-3xl'>Customize and Extended</h2>
 <p className='text-gray-500 my-3'>Add WooCommerce plugin to any site and <br /> 
 setup a new store in minutes</p>

<span className='flex space-x-2'>
 <button className='text-[#299EF3] font-semibold hover:font-bold'>Browser Extension</button>
 <MdArrowRight className="text-[#299EF3] mt-1.5"/>
 </span>

</div>

</div>

      </section>


      <section className='flex items-center justify-center'>

<div className='relative mt-28'>
        <div>
            <img src={third1pic} alt="" className='absolute bottom-[290px] right-[220px] max-w-[150px] z-20'/>
            <img src={third2pic} alt="" className='absolute bottom-[340px] right-[80px] max-w-[150px] z-20'/>
            <img src={third3pic} alt="" className='absolute bottom-[170px] right-[10px] max-w-[150px] z-20'/>
            <img src={third4pic} alt="" className='absolute max-w-[350px]'/>
        </div>

<div className='text-left mx-12 mt-64'>

 <h2 className='text-slate-800 font-bold text-3xl'>Active Community</h2>
 <p className='text-gray-500 my-3'>Add WooCommerce plugin to any site and <br /> 
 setup a new store in minutes</p>

<span className='flex space-x-2'>
 <button className='text-[#299EF3] font-semibold hover:font-bold'>Check our Forums</button>
 <MdArrowRight className="text-[#299EF3] mt-1.5"/>
 </span>

</div>

</div>

      </section>
      </div>

    </div>
  )
}

export default Cart
