import React from 'react'

export default function header() {
  return (
    <header className='flex justify-between sticky top-5 backdrop-blur-[5px] w-full mt-5 mb-5 text-2xl text-neutral-500'>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>home</a></li>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>projects</a></li>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>blog</a></li>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>contact</a></li>
    </header>
  )
}
