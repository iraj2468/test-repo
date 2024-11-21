import React from 'react'
import Navbar from './components/Navbar'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import Link from 'next/link';
import About from './components/about';
import Work from './components/Work';
import Blogs from './components/Blogs';
import Contact from './components/contact';


function page() {
  return (
    <div>
      {/* #010417,#020726 */}

      <Navbar/>
      <section className="text-gray-600 body-font bg-[#020726] px-10 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className='text-bold text-yellow-500'>hellow!</h1>
      <h1 className="title-font sm:text-4xl  mb-4 font-medium text-[60px] text-white">
        This is <span className='text-[60px] text-yellow-500' data-aos="fade-up-right">Iraj</span>
         
       
      </h1>
      <p className="mb-8 leading-relaxed text-white"  data-aos="zoom-in">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-400  hover:text-yellow-500 hover:bg-[#010417] border-0 py-2 px-6 focus:outline-none  rounded text-lg transition 2s ease-in sm:py-2">
          Hire me
        </button>
        <button className="ml-4 inline-flex text-white bg-yellow-400 hover:bg-[#010417] hover:text-yellow-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg transition 2s ease-in">
          Read more
        </button>
  
      </div>
      <div className='flex gap-10 text-2xl pt-10 '>
  <Link href="#"><FaFacebookF className=' text-blue-600 ' /></Link>
<Link href="#">  <FaInstagram  className='text-pink-500'  /></Link>
<Link href="#">  <FaLinkedinIn className='text-blue-800' /></Link>
 <Link href="#"> <CiTwitter className='text-yellow-400' /></Link>
  </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mx-auto "data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
      <img 
        className=" w-[400px] ml-10  "
        alt="hero"
        src="/pg.png" 
      />
    </div>
 
  </div>
  
</section>
<About/>
<Work/>
<Blogs/>
<Contact/>

<script>
  AOS.init();
</script>
    </div>
  )
}

export default page