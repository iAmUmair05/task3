import React from 'react'
import Newsletter from './Newsletter'
import largecircle from "../assert/lcircle.png";
import smallcircle from "../assert/scircle.png";
import leftpeople from "../assert/pleft.png";
import peoplebg from "../assert/pbg.png";
import peoplepic from "../assert/people.png";
import rightpeople from "../assert/pright.png";

const People = () => {
  return (
    <>
<h1 className='text-slate-800 text-5xl max-w-[600px] mx-auto font-bold my-4'>Supported by real People</h1>
      <p className='text-gray-500 max-w-[600px] mx-auto'>
        Our team of Happiness Engineeers works remotely from 58 coutries providing
        customer support across multiple time zones.
      </p>

      <div className='relative'>

        <section className=''>

      <div className='flex mt-16'>

        <div>
      <img src={largecircle} alt="" className='absolute left-[60px] top-[40px] max-w-[40px]'/>
      <img src={smallcircle} alt="" className='absolute top-[135px] left-[110px] max-w-[25px]'/>
      <img src={leftpeople} alt="" className='absolute top-[180px] left-[50px] -z-20 max-w-[150px]'/>
      </div>


      <div>
  <img src={smallcircle} alt=""  className='absolute top-[20px] right-[180px]'/>
  <img src={rightpeople} alt="" className='absolute right-[115px] top-[120px] -z-20 max-w-[300px]' />
  <img src={largecircle} alt="" className='absolute top-[305px] right-[145px] max-w-[50px]'/>

</div>

<div className='flex flex-col justify-center items-center'>


  <div className='relative ml-[220px]'>      
        <img src={peoplebg} alt="" className='absolute max-w-[1080px] left-[-90px] top-[70px] -z-20'/>
        
        <img src={peoplepic} alt="" className=' max-w-[920px] z-20' />
        </div>
  

</div>

      

      </div>
      </section>

<Newsletter  className="relative"/>

</div>
    </>
  )
}

export default People
