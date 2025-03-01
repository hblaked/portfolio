
export default function header() {
  return (
    <div className='flex items-center sticky top-0 w-full h-15 backdrop-blur-[5px] bg-[#161616ab] z-99'>
      <header className='flex justify-between w-full text-[1rem] text-neutral-400'>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>home</a></li>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>projects</a></li>
        <li><a className='hover:text-neutral-100 transition-colors duration-150 line-through'>blog</a></li>
        <li><a href='/' className='hover:text-neutral-100 transition-colors duration-150'>contact</a></li>
      </header>
    </div>
    
  )
}
