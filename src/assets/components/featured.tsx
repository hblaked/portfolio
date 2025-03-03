import bse from '../images/bse.png';

export default function Featured() {
  return (
    <div className='flex flex-col mt-15'>
        <h1 className='text-3xl font-serif font-bold mb-5'>featured projects.</h1>
        
        <div className='mobile-resize-grid grid grid-cols-2 p-3 gap-5'>
            <div className='flex justify-center w-full p-5 border border-neutral-500 rounded-md hover:scale-105 transition-all duration-150'>
                <div className='flex-col'>
                    <img src={bse} className='rounded-md' />
                    
                    <h1 className='flex items-center text-2xl font-bold mt-2.5'>bse <span className='text-sm ml-2 italic text-neutral-400'>(bang search engine)</span></h1>

                    <p className='text-neutral-300'>A more optomized version of "DuckDuckGo's" bang redirects for a more streamlined surfing experience.</p>

                    <div className='grid grid-cols-4 gap-2 mt-2.5'>
                        <div className='flex justify-center items-center w-full bg-neutral-700 rounded-md font-bold text-sm p-1'>HTML</div>
                        <div className='flex justify-center items-center w-full bg-neutral-700 rounded-md font-bold text-sm p-1'>CSS</div>
                        <div className='flex justify-center items-center w-full bg-neutral-700 rounded-md font-bold text-sm p-1'>Typescript</div>
                    </div>
                    
                    <div className='flex gap-2'>
                        <a href='https://github.com/hblaked/bse' target='_blank'><button className='cursor-pointer flex items-center gap-1 bg-neutral-100 text-neutral-900 font-bold mt-2.5 p-1 rounded-md hover:bg-neutral-300 transition-colors duration-150'><svg className='fill-neutral-900' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> Source</button></a>
                        <a href='https://bse-seven.vercel.app' target='_blank'><button className='cursor-pointer flex items-center gap-1 bg-neutral-100 text-neutral-900 font-bold mt-2.5 p-1 rounded-md hover:bg-neutral-300 transition-colors duration-150'><svg className='fill-neutral-900' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M432-288H288q-79.68 0-135.84-56.23Q96-400.45 96-480.23 96-560 152.16-616q56.16-56 135.84-56h144v72H288q-50 0-85 35t-35 85q0 50 35 85t85 35h144v72Zm-96-156v-72h288v72H336Zm192 156v-72h144q50 0 85-35t35-85q0-50-35-85t-85-35H528v-72h144q79.68 0 135.84 56.23 56.16 56.22 56.16 136Q864-400 807.84-344 751.68-288 672-288H528Z"/></svg> Website</button></a>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
  )
}
