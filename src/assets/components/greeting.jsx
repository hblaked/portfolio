import { Link, Outlet } from 'react-router-dom';
import pfp from '../images/pfp.png';
import resume from '../downloads/Resume.pdf';

export default function greeting() {

  function mouseInteraction(event) {
    const posX = parseFloat(((event.clientX - event.target.getBoundingClientRect().x) / event.target.offsetWidth - 0.5).toFixed(2))
    const posY = parseFloat(((event.clientY - event.target.getBoundingClientRect().y) / event.target.offsetHeight - 0.5).toFixed(2))

    event.target.style.transform = `rotateX(${-50 * posY}deg) rotateY(${50 * posX}deg)`
  }

  function mouseInteractionReset(event) {
      event.target.style.transform = null
  }


  return (
    <div className='mobile-resize-div flex justify-between mt-15 gap-10'>
      <div className='flex flex-col justify-center gap-10'>
        <div>
          <h1 className='text-6xl font-bold font-serif mb-5'>Hi, I'm Hayden 👋🏻</h1>

          <p className='text-neutral-300'>21-year-old frontend developer from Arkansas, USA 🇺🇸</p>

          <p className='text-neutral-300'>I like to develop sleek & responsive websites, play video games and talk to all the ducks in my jeep when I get stumped.</p>
        </div>
        
        <div className='flex items-center gap-5'>
          <a href={resume} download='Hayden-Resume'>
            <button className='cursor-pointer flex items-center justify-center w-35 h-10 border border-neutral-500 rounded-md hover:bg-neutral-500 transition-colors duration-150'>Resume <svg className='fill-neutral-100' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m732-120 144-144-51-51-57 57v-150h-72v150l-57-57-51 51 144 144ZM588 0v-72h288V0H588ZM264-144q-29 0-50.5-21.5T192-216v-576q0-29 21.5-50.5T264-864h312l192 192v192h-72v-144H528v-168H264v576h264v72H264Zm0-72v-576 576Z"/></svg></button>
          </a>
          
          <a href='https://github.com/hblaked' target='_blank'><svg className='cursor-pointer hover:scale-125 transition-all duration-150 fill-neutral-100' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>

          <Link to={`/contact`}><svg className='cursor-pointer hover:scale-125 transition-all duration-150 fill-neutral-100' xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg></Link>
        </div>
      </div>

      <div className='perspective-[100dvw]'>
        <img 
          src={pfp}
          onMouseMove={mouseInteraction} onMouseOut={mouseInteractionReset}
          className='w-dvw max-w-[20rem] rounded-2xl hover:drop-shadow-glow transition-all duration-150 ease-linear' 
        />
      </div>
      <Outlet />
    </div>
  )
}
