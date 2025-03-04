import { Link, Outlet } from "react-router-dom"

export default function header() {
  return (
    <div className='mobile-resize-replaceblur flex items-center sticky top-0 w-full h-15 z-97'>
      <div className='mobile-resize-hide absolute -right-1/2 w-[200dvw] h-15 backdrop-blur-[5px] bg-[#161616ab] z-98' />
      <header className='flex justify-between w-full text-[1rem] text-neutral-400 z-99'>
        <Link to={`/`} className='hover:text-neutral-100 transition-colors duration-150'>home</Link>
        <Link to={`/projects`} className='hover:text-neutral-100 transition-colors duration-150'>projects</Link>
        <Link to={`/contact`} className='hover:text-neutral-100 transition-colors duration-150'>contact</Link>
        <Outlet />
      </header>
    </div>
    
  )
}
