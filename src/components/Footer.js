import React from 'react'
import pictick from "../assert/Tick.png";
import picsetting from "../assert/Setting.png";
import piclock from "../assert/Lock.png";
import flogo from "../assert/flogo.png";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineWifi} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (

    <>
    <div className='bg-[#7854F7] '>
        <footer className='max-w-[1220px] mx-auto'>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 py-16'>

            <div className='flex space-x-3 items-center justify-center text-sm'>
                <img src={pictick} alt="" className='' />
                <p className='text-white'>30 days <strong>money back gurantee</strong></p>
                </div>

                <div className='flex space-x-3 items-center justify-center text-sm'>
                <img src={picsetting} alt="" className='' />
                <p className='text-white'><strong>Support</strong> team around the world</p>
                </div>

                <div className='flex space-x-3 items-center justify-center text-sm'>
                <img src={piclock} alt="" className='' />
                <p className='text-white'><strong>Safe & secure</strong> online payment</p>
                </div>

                </div>
            
            
        <img src={flogo} alt=""  className='w-auto mx-auto'/>
        <hr  className='max-w-[980px] mx-auto opacity-25 my-6' />

        <div className='flex items-center justify-center'>

            <div className='grid grid-cols-3 md:grid-cols-5 py-6'>

                <div className='text-sm text-white text-left'>
                <p className='text-md font-semibold uppercase my-5'>who we are</p>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Work With Us</li>
                </ul>
                </div>

                <div className='text-sm text-white text-left'>
                <p className='text-md font-semibold  uppercase my-5'>woocommerce</p>
                <ul className=''>
                    <li>Features</li>
                    <li>Payment</li>
                    <li>Marketing</li>
                    <li>Shipping</li>
                    <li>Extension Store</li>
                    <li>eCommerce blog</li>
                    
                    <li>Development blog</li>
                    <li>Ideas board</li>
                    <li>Mobile App</li>
                    <li>Community</li>
                    <li>Style Guide</li>
                    <li>Email NewsLetter</li>
                </ul>
                </div>

                <div className='text-sm text-white text-left'>
                <p className='text-md font-semibold uppercase my-5'>other products</p>
                <ul className='text-left'>
                    <li>Storefront</li>
                    <li>WooSlider</li>
                    <li>Sensei</li>
                    <li>Sensei Extension</li>
                </ul>
                </div>

                <div className='text-sm text-white text-left'>
                <p className='text-md font-semibold uppercase my-5'>support</p>
                <ul>
                    <li>Documentation</li>
                    <li>Customizations</li>
                    <li>Support Policy</li>
                    <li>Contact</li>
                    <li>COVID-19 Resources</li>
                    <li>Privacy Notice For</li>
                    <li>California Users</li>
                </ul>
                </div>
                
                <div className='text-sm text-white md:col-auto col-span-2 text-left'>
                <p className='text-md font-semibold uppercase mb-5 my-5'>we recommend</p>
                <ul>
                    <li>WooExperts</li>
                    <li>Hosting Solutions</li>
                    <li>Pre-sales FAQ</li>
                    <li>Success Stories</li>
                    <li>Design Feedback Group</li>
                </ul>
                </div>
                </div>

            </div>

        </footer>
    </div>

    <div className='flex justify-around items-center bg-white py-3'>

        <span className='flex space-x-4 text-slate-800 text-xl'>
            <BsTwitter className='cursor-pointer hover:animate-bounce duration-100'/>
            <BsFacebook className='cursor-pointer hover:animate-bounce duration-100'/>
            <AiOutlineWifi className='cursor-pointer hover:animate-bounce duration-100'/>
            <AiFillInstagram className='cursor-pointer hover:animate-bounce duration-100'/>
        </span>

        <span className='flex'>
        <p className='uppercase text-slate-800'>copyright woocommerce 2020 -</p>
        <p className='underline uppercase text-slate-800'>tech & conditons privacy policy</p>
        </span>

        <span>
<p className='uppercase font-mono tracking-wider'>automattic</p>
        </span>

    </div>

    </>
  )
}

export default Footer
