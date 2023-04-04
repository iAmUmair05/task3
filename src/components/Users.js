import React from 'react';
import quotepic from "../assert/quote.png";
import pic1 from "../assert/1.png";
import pic2 from "../assert/2.png";
import pic3 from "../assert/3.png";
import userleft from "../assert/uleft.png";
import pic4 from "../assert/4.png";
import pic5 from "../assert/5.png";
import pic6 from "../assert/6.png";
import userright from "../assert/uright.png";
import leftarrow from "../assert/larrow.png";
import rightarrow from "../assert/rarrow.png";
import whitepic from "../assert/white.png";

const Users = () => {
  return (
    <div className='u-background my-12 py-16'>
        <section className=''>
            <h1 className='text-4xl mx-auto font-bold max-w-[360px]'>Trusted by Agencies
            & Store Owners</h1>

            <div className='flex relative'>
            <div>
                <img src={pic1} alt=""  className='absolute left-[250px] top-[-20px] w-[70px]'/>
                <img src={pic2} alt=""  className='absolute left-[100px] top-[60px] w-[60px]'/>
                <img src={pic3} alt=""  className='absolute left-[200px] top-[250px] w-[70px]'/>
                <img src={userleft} alt="" className='absolute left-[310px] top-[250px] max-w-[300px]' />
            </div>

           
            <img src={whitepic} alt="" className='absolute left-[415px] top-[100px] shadow-b max-w-[520px] rounded-lg'/>

            <img src={whitepic} alt="" className='absolute left-[400px] top-[70px] max-w-[550px] rounded-lg'/>

            <div className='shadow-b-xl my-8 relative rounded-lg text-center bg-white max-w-[500px] mx-auto p-10 z-30'>
            
                    
                <img src={quotepic} alt="" className='max-w-[170px] left-[150px] top-[30px] absolute' />
        

                <p className='text-gray-400 relative my-16'>No other eCommerce platform allow people
                to start for free and grow their store as their 
                business grows. More importantly ,
                WooCommerce does not charge you a portion 
                of your profits as your business grows!</p>
            </div>
                    <img src={leftarrow} alt=""  className='absolute left-[800px] top-[380px] w-[20px]'/>
                    <img src={rightarrow} alt=""  className='absolute left-[835px] top-[380px] w-[25px]'/>
            
            <div>
                <img src={pic4} alt=""  className='absolute right-[250px] top-[-20px] w-[70px] '/>
                <img src={pic5} alt=""  className='absolute right-[120px] top-[90px] w-[70px]'/>
                <img src={pic6} alt=""  className='absolute right-[210px] top-[280px] w-[60px]'/>
                <img src={userright} alt="" className='absolute right-[340px] top-[40px] max-w-[300px]' />
            </div>

            </div>


        </section>
      
    </div>
  )
}

export default Users
