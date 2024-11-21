import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div >
        <header className="text-white body-font bg-[#010417] pb-20 "  >
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed">
    <Link href="" className="flex title-font font-medium items-cenver:text-yellow-500 mb-4 md:mb-0">
      
      <span className=" text-center justify-center items-center text-white text-bold text-xl border rounded-full bg-yellow-500 w-10 h-10">Ij.</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-yellow-500 transition 2s ease-in hover:underline">Home</Link>
      <Link href="#about"className="mr-5 hover:text-yellow-500 transition 2s ease-in hover:underline">About</Link>
      <Link href="#work"className="mr-5 hover:text-yellow-500 transition 2s ease-in hover:underline">work</Link>
      <Link href="#blog" className="mr-5 hover:text-yellow-500 transition 2s ease-in hover:underline">blog</Link>
      <Link href="#contact"className="mr-5 hover:text-yellow-500 transition 2s ease-in hover:underline">Contact</Link>
    </nav>
    <button className="inline-flex items-center transition 2s ease-in bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-opacity-50 rounded text-base mt-4 md:mt-0">
      Download CV
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar