import Link from 'next/link'
import React from 'react'
import { CiTwitter } from 'react-icons/ci';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function contact() {
  return (
    <div className='bg-[#020726]'>
 <section className="text-gray-600 body-font md:w-[1320px] mx-auto py-20 " id="contact">
 <h1 className="sm:text-3xl text-3xl font-medium title-font text-yellow-500 mb-4 text-center  "  data-aos="zoom-in-down">
      Let's Connect Together
      </h1>
      <p className="text-base  text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white"  data-aos="zoom-in-down">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
        pug.
      </p>
      <div className="flex mt-6 justify-center"  data-aos="zoom-in-down">
        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex mb-10" />
      </div>
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
      <h1 className="title-font font-medium text-xl text-white">
        Let's make something new,different great together.
        <br />
         <span className='text-yellow-500'data-aos="zoom-in">You just say hellow</span>
      </h1>
      <p className="leading-relaxed mt-4 text-white">
        Poke slow-carb mixtape knausgaard, typewriter street art gentrify
        hammock starladder roathse. Craies vegan tousled etsy austin.
      </p>
     <div className='py-4'>
    <div className='py-3 flex'>
    <Link href="#" ><FaPhoneAlt className='text-yellow-500 hover:text-white '  /> </Link>
    <p className='text-white pl-6 hover:underline hover:text-yellow-500'>+ 123 -456-789</p>
    </div>
<div className='py-3 flex '>
<Link href="#">  <MdEmail   className='text-yellow-500 hover:text-white'/> </Link>
<p className='text-white ml-5 hover:underline hover:text-yellow-500'>irajrashid2468@gmail.com</p>
</div>
<div className='py-3 flex'>
  <Link href="#">    <FaLocationDot  className='text-yellow-500 hover:text-white'/></Link>
  <p className='text-white ml-5 hover:underline hover:text-yellow-500'>surjani town karachi</p>
  </div>

     </div>
  
     <div className='flex gap-10 text-2xl pt-10 '>
  <Link href="#"><FaFacebookF className=' text-blue-600 ' /></Link>
<Link href="#">  <FaInstagram  className='text-pink-500'  /></Link>
<Link href="#">  <FaLinkedinIn className='text-blue-800' /></Link>
 <Link href="#"> <CiTwitter className='text-yellow-400' /></Link>
     </div>
     </div>

    
    <div className="lg:w-2/6 md:w-1/2 bg-[#010417] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-yellow-500">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full rounded border bg-[#020726] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-yellow-500">
          Number
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-[#020726] rounded border  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-yellow-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-[#020726] rounded border  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      

      <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-[#020726] rounded text-lg hover:text-yellow-500">
        Button
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Literally you probably haven't heard of them jean shorts.
      </p>
    </div>
  </div>
</section>




    </div>
    
  )
}

export default contact