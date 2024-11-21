"use client"
import React, { useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css";

function about() {
  useEffect(() => {
    AOS.init({})
  },[])
  return (
    <div>
         
   
        <section className="text-gray-600 body-font bg-[#010417]" id="about">

  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"  >
      <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        className="object-cover object-center rounded"
        alt="hero"
        src="/wg.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="  sm:text-4xl md:text-5xl mb-4 font-medium text-yellow-500"data-aos="fade-up-left" >
        About me
     
      </h1>
      <p className='text-yellow-500 text-xl py-2' data-aos="zoom-in">I am a front-end-developer</p>
      <p className="mb-5 leading-relaxed text-white">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      
      <p className="mb-5 leading-relaxed text-white ">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button data-aos="zoom-in" className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 hover:bg-[#020726] hover:text-yellow-500 transition 2s ease-in  rounded text-lg">
          Read more
        </button>
        
      </div>
    </div>
  </div>
  <Skills/>
</section>

    </div>
  )
}

export default about




  export const Skills = () =>{
  return (
    <div className='bg-[#010417] text-white text-center py-10'>
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-yellow-500 mb-4 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      My Skills
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white"
   >
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
        pug.
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex mb-10" />
      </div>
      <div className='md:w-[1320px] md:mx-auto py-10 flex flex-col sm:flex-row '>
        <div className='basis-[50%]'>
       <ul className='md:px-28'>
<div className='flex  '>
<li className='text-xl font-semibold '>Html</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
<div className='flex '>
<li className='text-xl font-semibold '>Javascript</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
<div className='flex '>
<li className='text-xl font-semibold '>React</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
<div className='flex '>
<li className='text-xl font-semibold '>WordPress</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
       </ul>
        </div>
        <div className='basis-[50%]'>
          <ul className='md:px-28'>
          <div className='flex '>
<li className='text-xl font-semibold '>Css</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
<div className='flex '>
<li className='text-xl font-semibold '>Typescript</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
<div className='flex '>
<li className='text-xl font-semibold '>Next.js</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
            <div className='flex '>
<li className='text-xl font-semibold '>Responsive design</li> <div className='w-[30%] h-3 rounded-xl bg-yellow-500  text-center justify-center mt-2 m-5'></div>
</div>
          </ul>
        </div>
      </div>
        



      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-yellow-500 mb-4"data-aos="fade-down">
      Experties Area
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
        pug.
      </p>
      <div className="flex mt-6 justify-center ">
        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 px-20 ">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center border border-gray-900" data-aos="flip-right">
        <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <img src="/u.jpeg" alt="" className='rounded-full' />
          
        </div>
        <div className="flex-grow">
          <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
              UI UX Design
          </h2>
          <p className="leading-relaxed text-base text-white">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard.
          </p>
          <a className="mt-3 text-yellow-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center border border-gray-900" data-aos="flip-down">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src="/u.jpeg" alt="" className='rounded-full' />
         
        </div>
        <div className="flex-grow">
          <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
            Marketing
          </h2>
          <p className="leading-relaxed text-base text-white">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard.
          </p>
          <a className="mt-3 text-yellow-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center border border-gray-900"data-aos="flip-left">
      <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <img src="/u.jpeg" alt=""   className='rounded-full'/>
      
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-yellow-500 font-medium mb-3">
            UI developer
          </h2>
          <p className="leading-relaxed text-base text-white">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard.
          </p>
          <a className="mt-3 text-yellow-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
   
  </div>
 
</section>
<script>
  AOS.init();
</script>

    </div>

    
  )
}