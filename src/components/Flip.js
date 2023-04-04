import React from 'react'
import smallcircle from "../assert/scircle.png";
import extracircle from "../assert/xlcircle.png";
import flipleft from "../assert/fleft.png";
import leftpic from "../assert/lpic.png";
import rightpic from "../assert/rpic.png";
import userleft from "../assert/uleft.png";
import userright from "../assert/uright.png";
import rectanglepic from "../assert/rectangle.png";

const Flip = () => {
  return (

    <div>
        <img src={rectanglepic} alt="" className='absolute'/>

    <div className='p-10 my-32 inner-border-t-8'>

<div className='flex-col md:flex space-x-96 mx-24 relative'>

    <div className='basic-[45%]'>
        <img src={smallcircle} alt="" className='absolute '/>
        <img src={extracircle} alt=""className='absolute top-[80px] left-[30px] max-w-[200px]' />
        <img src={flipleft} alt="" className='absolute max-w-[100px] left-[50px] top-[120px]'/>
        <img src={leftpic} alt="" className='absolute max-w-[300px] bottom-[70px] left-[60px] '/>

        </div>

        <div className='basic-[55%]'>

    <div className='flex flex-col'>
        <h2 className='text-white text-4xl font-bold text-left'>Develop <br />
        Without Limits </h2>

        <p className='text-white my-6 max-w-[400px] text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus officiis dolor nihil commodi modi necessitatibus odit labore iste tempora quae veritatis deserunt aliquid alias rerum perferendis, atque fugiat cum facilis distinctio. Ad aliquam aspernatur, vel fugit quae atque, illo quam accusamus dolores minima labore!
        </p>
        <button className='bg-[#70C217] max-w-[200px] rounded-full text-white py-3 hover:bg-lime-600'>Read the Documention</button>
        </div>
        </div>


        </div>

        <div className='flex-col md:flex relative space-x-96 mx-80 my-6'>

        <div className='basic-[55%]'>

<div className='flex flex-col'>
    <h2 className='text-white text-4xl font-bold text-left'>Know our <br />
    Global Community </h2>

    <p className='text-white my-6 max-w-[400px] text-left'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus officiis dolor nihil commodi modi necessitatibus odit labore iste tempora quae veritatis deserunt aliquid alias rerum perferendis, atque fugiat cum facilis distinctio. Ad aliquam aspernatur, vel fugit quae atque, illo quam accusamus dolores minima labore!
    </p>
    <button className='bg-[#70C217] max-w-[200px] rounded-full text-white py-3 hover:bg-lime-600'>Read the Documention</button>
    </div>
    </div>

    <div className='basis-[45%]'>
        <img src={smallcircle} alt="" className='absolute bottom-[250px] right-[50px] z-40'/>
        <img src={extracircle} alt=""  className='absolute right-[-180px] bottom-[150px] max-w-[150px]'/>
        <img src={rightpic} alt="" className='absolute top-[60px] right-[-120px] max-w-[300px] z-30'/>
        <img src={userleft} alt="" className='absolute max-w-[300px] right-[-230px] top-[150px] '/>
    </div>
        </div>
      
    </div>

    </div>
    
  )
}

export default Flip
